import random
import datetime
from django.core.management.base import BaseCommand
from django.db import transaction, IntegrityError
from faker import Faker
# Zmień 'twoja_aplikacja' na nazwę folderu, w którym masz models.py
from api.models import (
    Uczelnie, Budynki, Pokoje, Wydzialy, Opiekunowie,
    Czlonkowie, Organizacje, CzlonkowieWOrganizacjach,
    Projekty, Wydarzenia, Sekcje, Role
)
from django.db import transaction, connection

fake = Faker('pl_PL')


class Command(BaseCommand):
    help = 'Generuje REALISTYCZNE dane testowe'

    def handle(self, *args, **options):
        self.stdout.write("Rozpoczynam generowanie realistycznych danych...")

        try:
            with transaction.atomic():
                # 1. Struktura Uczelni (Realne nazwy i powiązania)
                self.create_uczelnie_struktura()

                # 2. Ludzie (Faker jest tu akurat dobry)
                self.create_ludzie(n_opiekunow=15, n_czlonkow=80)

                # 3. Organizacje (Konkretne nazwy kół naukowych)
                self.create_organizacje()

                # 4. PRZYPISANIE CZŁONKÓW (RAW SQL)
                self.assign_czlonkowie_sql()

                # 5. Działalność
                self.create_projekty_i_wydarzenia()
                self.create_sekcje_i_role()

            self.stdout.write(self.style.SUCCESS("SUKCES! Baza danych została zasilona realnymi danymi."))

        except Exception as e:
            self.stdout.write(self.style.ERROR(f"Wystąpił błąd: {e}"))

    def create_uczelnie_struktura(self):
        print(" -> Tworzenie uczelni, wydziałów i budynków...")

        # Słownik: Uczelnia -> (Adres, Lista Wydziałów, Lista Budynków)
        dane_uczelni = {
            "Politechnika Poznańska": {
                "adres": "pl. Marii Skłodowskiej-Curie 5",
                "wydzialy": [
                    "Wydział Informatyki i Telekomunikacji",
                    "Wydział Inżynierii Lądowej i Transportu",
                    "Wydział Architektury",
                    "Wydział Inżynierii Mechanicznej"
                ],
                "budynki": [
                    ("Centrum Wykładowe", "ul. Piotrowo 2"),
                    ("Biblioteka Techniczna", "ul. Piotrowo 3"),
                    ("Budynek Elektryczny", "ul. Piotrowo 3A")
                ]
            },
            "Uniwersytet im. Adama Mickiewicza": {
                "adres": "ul. Wieniawskiego 1",
                "wydzialy": [
                    "Wydział Matematyki i Informatyki",
                    "Wydział Fizyki",
                    "Wydział Prawa i Administracji",
                    "Wydział Anglistyki"
                ],
                "budynki": [
                    ("Collegium Minus", "ul. Wieniawskiego 1"),
                    ("Collegium Iuridicum", "ul. Święty Marcin 90"),
                    ("Kampus Morasko", "ul. Uniwersytetu Poznańskiego 4")
                ]
            }
        }

        for nazwa_ucz, info in dane_uczelni.items():
            uczelnia, _ = Uczelnie.objects.get_or_create(
                nazwa=nazwa_ucz,
                defaults={'adres_uczelni': info['adres']}
            )

            # Tworzenie konkretnych wydziałów
            for nazwa_wydz in info['wydzialy']:
                Wydzialy.objects.get_or_create(
                    nazwa_wydzialu=nazwa_wydz,
                    uczelnia=uczelnia,
                    defaults={'adres_wydzialu': f"ul. Wydziałowa {random.randint(1, 20)}"}
                )

            # Tworzenie konkretnych budynków
            for nazwa_bud, adres_bud in info['budynki']:
                budynek, _ = Budynki.objects.get_or_create(
                    nazwa_budynku=nazwa_bud,
                    uczelnia=uczelnia,
                    defaults={'adres_budynku': adres_bud}
                )

                # Pokoje (Sale wykładowe i laboratoria)
                typy_sal = ["Aula", "Lab", "Sala"]
                for i in range(1, 6):
                    typ = random.choice(typy_sal)
                    nr = random.randint(100, 399)
                    Pokoje.objects.get_or_create(
                        nazwa_pokoju=f"{typ} {nr}",
                        budynek=budynek,
                        defaults={'pojemnosc': random.choice([30, 45, 90, 200])}
                    )

    def create_ludzie(self, n_opiekunow, n_czlonkow):
        print(" -> Generowanie ludzi...")
        # Tutaj Faker jest najlepszy, bo imiona są unikalne
        for _ in range(n_opiekunow):
            Opiekunowie.objects.get_or_create(
                pesel=fake.unique.pesel(),
                defaults={
                    'imie': fake.first_name(),
                    'nazwisko': fake.last_name(),
                    'email': fake.email(),
                    'numer_kontaktowy': fake.phone_number()[:15]
                }
            )

        for _ in range(n_czlonkow):
            Czlonkowie.objects.get_or_create(
                pesel=fake.unique.pesel(),
                defaults={
                    'imie': fake.first_name(),
                    'nazwisko': fake.last_name(),
                    'email': fake.unique.email(),  # Unikalne maile
                    'numer_kontaktowy': fake.phone_number()[:15]
                }
            )

    def create_organizacje(self):
        print(" -> Tworzenie organizacji z realnymi nazwami...")
        wydzialy = list(Wydzialy.objects.all())
        opiekunowie = list(Opiekunowie.objects.all())

        if not wydzialy: return

        # Lista realistycznych kół naukowych
        realne_organizacje = [
            "Akademickie Koło Aplikacji Internetowych",
            "Koło Naukowe Robotyków 'Cyborg'",
            "Grupa .NET",
            "Koło Inżynierii Danych",
            "Studenckie Koło Prawa Podatkowego",
            "AZS Sekcja Pływacka",
            "Koło Naukowe Architektury 'Bryła'",
            "Samorząd Studencki",
            "Koło Miłośników Fizyki Kwantowej",
            "Radio Studenckie 'Afera'",
            "Koło Szachowe Strateg",
            "Erasmus Student Network"
        ]

        for nazwa_org in realne_organizacje:
            # Przypisujemy do losowego wydziału, ale staramy się pasować (uproszczone losowanie)
            Wydzial = random.choice(wydzialy)

            Organizacje.objects.get_or_create(
                nazwa_organizacji=nazwa_org,
                # Szukamy wydziału po nazwie organizacji (prosta heurystyka)
                # jeśli nie znajdziemy pasującego, bierzemy losowy
                defaults={
                    'wydzial': Wydzial,
                    'data_zalozenia': fake.date_between(start_date='-10y', end_date='today'),
                    'czy_aktywna': fake.boolean(chance_of_getting_true=85),
                    'opiekun': random.choice(opiekunowie)
                }
            )

    def assign_czlonkowie_sql(self):
        print(" -> Przypisywanie członków (SQL)...")
        organizacje = list(Organizacje.objects.all())
        czlonkowie = list(Czlonkowie.objects.all())

        inserts = []
        sql = """
              INSERT INTO czlonkowie_w_organizacjach (id_czlonka, id_organizacji)
              VALUES (%s, %s) ON CONFLICT DO NOTHING
              """

        for org in organizacje:
            sample_size = random.randint(5, 15)
            members_sample = random.sample(czlonkowie, k=min(len(czlonkowie), sample_size))
            for member in members_sample:
                inserts.append((member.id, org.id))

        if inserts:
            with connection.cursor() as cursor:
                cursor.executemany(sql, inserts)

    def create_projekty_i_wydarzenia(self):
        print(" -> Tworzenie projektów i wydarzeń...")
        organizacje = list(Organizacje.objects.all())
        pokoje = list(Pokoje.objects.all())

        # Baza pomysłów na projekty i wydarzenia
        pomysly_projekty = [
            "Budowa łazika marsjańskiego", "Aplikacja mobilna dziekanatu",
            "Dni Kariery", "Kurs Pythona dla początkujących",
            "Modernizacja strony wydziałowej", "Zawody robotów SUMO",
            "Wystawa makiet architektonicznych", "Symulacja rozprawy sądowej"
        ]

        pomysly_wydarzenia = [
            "Hackathon 24h", "Spotkanie rekrutacyjne", "Prelekcja eksperta z branży",
            "Walne zebranie członków", "Warsztaty z lutowania",
            "Wyjazd integracyjny", "Konferencja naukowa"
        ]

        for org in organizacje:
            # Projekty
            for _ in range(random.randint(1, 2)):
                Projekty.objects.get_or_create(
                    nazwa_projektu=random.choice(pomysly_projekty),
                    organizacja=org,
                    defaults={
                        'liczba_pkt_do_stypendium': random.choice([10, 20, 50, 100]),
                        'opis_projektu': fake.paragraph(nb_sentences=2)
                    }
                )

            # Wydarzenia
            if pokoje:
                # Wybieramy pokój z budynku, który należy do uczelni organizacji
                uczelnia_id = org.wydzial.uczelnia.id
                pokoje_uczelni = [p for p in pokoje if p.budynek.uczelnia.id == uczelnia_id]

                if not pokoje_uczelni:
                    pokoje_uczelni = pokoje  # fallback

                for _ in range(random.randint(1, 3)):
                    start = fake.date_this_year()
                    end = start + datetime.timedelta(hours=random.randint(2, 48))

                    Wydarzenia.objects.get_or_create(
                        nazwa_wydarzenia=random.choice(pomysly_wydarzenia),
                        data_rozpoczecia=start,
                        data_zakonczenia=end,
                        organizacja=org,
                        defaults={
                            'opis_wydarzenia': fake.sentence(),
                            'pokoj': random.choice(pokoje_uczelni)
                        }
                    )

    def create_sekcje_i_role(self):
        print(" -> Tworzenie sekcji i ról...")
        organizacje = list(Organizacje.objects.all())

        sekcje_nazwy = ["Sekcja Marketingu", "Sekcja Techniczna", "Sekcja Logistyki", "Sekcja IT", "Zarząd"]

        for org in organizacje:
            # 1. Pobierz ID członków
            with connection.cursor() as cursor:
                cursor.execute(
                    "SELECT id_czlonka FROM czlonkowie_w_organizacjach WHERE id_organizacji = %s",
                    [org.id]
                )
                member_ids = [row[0] for row in cursor.fetchall()]

            czlonkowie_org = list(Czlonkowie.objects.filter(id__in=member_ids))
            if not czlonkowie_org: continue

            # 2. Twórz sekcje
            utworzone_sekcje = []
            for nazwa in random.sample(sekcje_nazwy, k=random.randint(1, 3)):
                sekcja, _ = Sekcje.objects.get_or_create(
                    nazwa_sekcji=nazwa,
                    organizacja=org,
                    defaults={
                        'data_zalozenia': org.data_zalozenia,
                        'opis_sekcji': f"Odpowiedzialni za {fake.word()}."
                    }
                )
                utworzone_sekcje.append(sekcja)

            role_dict = {
                "Przewodniczący": 50,
                "Wiceprzewodniczący": 30,
                "Skarbnik": 25,
                "Grafik": 15,
                "Programista": 20
            }

            for sekcja in utworzone_sekcje:
                rola_nazwa = random.choice(list(role_dict.keys()))
                Role.objects.get_or_create(
                    nazwa_roli=rola_nazwa,
                    sekcja=sekcja,
                    defaults={
                        'liczba_pkt_do_stypendium': role_dict[rola_nazwa],
                        'czlonek': random.choice(czlonkowie_org)
                    }
                )