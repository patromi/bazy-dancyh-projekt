from django_filters import rest_framework as filters
from .models import (
    Uczelnie, Budynki, Pokoje, Wydzialy, Opiekunowie,
    Organizacje, Projekty, Wydarzenia, Sekcje, Czlonkowie, Role
)

charFields_lookup = [
    'iexact', 'icontains', 'istartswith',
    'iendswith', 'isnull',
]

numberFields_lookup = [
    'iexact', 'lt', 'gt', 'lte', 'gte', 'isnull',
]

textFields_lookup = [
    'icontains', 'isnull',
]

booleanFields_lookup = [
    'exact', 'isnull',
]

class UczelnieFilter(filters.FilterSet):
    class Meta:
        model = Uczelnie
        fields = {
            'id': ['exact'],
            'nazwa': charFields_lookup,
            'adres_uczelni': charFields_lookup,
        }

class BudynkiFilter(filters.FilterSet):
    class Meta:
        model = Budynki
        fields = {
            'id': ['exact'],
            'nazwa_budynku': charFields_lookup,
            'adres_budynku': charFields_lookup,
            'uczelnia': ['exact'],
        }


class PokojeFilter(filters.FilterSet):
    class Meta:
        model = Pokoje
        fields = {
            'id': ['exact'],
            'nazwa_pokoju': charFields_lookup,
            'pojemnosc': numberFields_lookup,
            'budynek': ['exact'],
        }

class WydzialyFilter(filters.FilterSet):
    class Meta:
        model = Wydzialy
        fields = {
            'id': ['exact'],
            'nazwa_wydzialu': charFields_lookup,
            'adres_wydzialu': charFields_lookup,
            'uczelnia': ['exact'],
        }

class OpiekunowieFilter(filters.FilterSet):
    class Meta:
        model = Opiekunowie
        fields = {
            'id': ['exact'],
            'pesel': charFields_lookup,
            'imie': charFields_lookup,
            'drugie_imie': charFields_lookup,
            'nazwisko': charFields_lookup,
            'email': charFields_lookup,
            'numer_kontaktowy': charFields_lookup,
        }

class CzlonkowieFilter(filters.FilterSet):
    class Meta:
        model = Czlonkowie
        fields = {
            'id': ['exact'],
            'pesel': charFields_lookup,
            'imie': charFields_lookup,
            'drugie_imie': charFields_lookup,
            'nazwisko': charFields_lookup,
            'email': charFields_lookup,
            'numer_kontaktowy': charFields_lookup,
        }


class OrganizacjeFilter(filters.FilterSet):
    class Meta:
        model = Organizacje
        fields = {
            'id': ['exact'],
            'nazwa_organizacji': charFields_lookup,
            'data_zalozenia': numberFields_lookup,
            'czy_aktywna': booleanFields_lookup,
            'opiekun': ['exact'],
            'wydzial': ['exact'],
        }

class ProjektyFilter(filters.FilterSet):
    class Meta:
        model = Projekty
        fields = {
            'id': ['exact'],
            'nazwa_projektu': charFields_lookup,
            'liczba_pkt_do_stypendium': numberFields_lookup,
            'opis_projektu': textFields_lookup,
            'organizacja': ['exact'],
        }

class WydarzeniaFilter(filters.FilterSet):
    class Meta:
        model = Wydarzenia
        fields = {
            'id': ['exact'],
            'nazwa_wydarzenia': charFields_lookup,
            'data_rozpoczecia': numberFields_lookup,
            'data_zakonczenia': numberFields_lookup,
            'opis_wydarzenia': textFields_lookup,
            'organizacja': ['exact'],
            'pokoj': ['exact'],
        }

class SekcjeFilter(filters.FilterSet):
    class Meta:
        model = Sekcje
        fields = {
            'id': ['exact'],
            'nazwa_sekcji': charFields_lookup,
            'data_zalozenia': numberFields_lookup,
            'opis_sekcji': textFields_lookup,
            'organizacja': ['exact'],
        }


class RoleFilter(filters.FilterSet):
    class Meta:
        model = Role
        fields = {
            'id': ['exact'],
            'nazwa_roli': charFields_lookup,
            'liczba_pkt_do_stypendium': numberFields_lookup,
            'sekcja': ['exact'],
            'czlonek': ['exact'],
        }
        

