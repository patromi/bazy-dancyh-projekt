from django.db import models


class Uczelnie(models.Model):
    nazwa = models.CharField(max_length=100, unique=True, blank=True, null=True)
    adres_uczelni = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'uczelnie'
        verbose_name_plural = "Uczelnie"

    def __str__(self):
        return self.nazwa


class Budynki(models.Model):
    nazwa_budynku = models.CharField(max_length=100, blank=True, null=True)
    adres_budynku = models.CharField(max_length=255)
    uczelnia = models.ForeignKey(Uczelnie, on_delete=models.DO_NOTHING, db_column='id_uczelni')

    class Meta:
        managed = False
        db_table = 'budynki'
        unique_together = (('nazwa_budynku', 'uczelnia'),)
        verbose_name_plural = "Budynki"

    def __str__(self):
        return f"{self.nazwa_budynku} ({self.uczelnia})"


class Pokoje(models.Model):
    nazwa_pokoju = models.CharField(max_length=50, blank=True, null=True)
    pojemnosc = models.IntegerField()
    budynek = models.ForeignKey(Budynki, on_delete=models.DO_NOTHING, db_column='id_budynku')

    class Meta:
        managed = False
        db_table = 'pokoje'
        unique_together = (('nazwa_pokoju', 'budynek'),)
        verbose_name_plural = "Pokoje"

    def __str__(self):
        return f"{self.nazwa_pokoju} - {self.budynek.nazwa_budynku}"


class Wydzialy(models.Model):
    nazwa_wydzialu = models.CharField(max_length=100, blank=True, null=True)
    adres_wydzialu = models.CharField(max_length=255)
    uczelnia = models.ForeignKey(Uczelnie, on_delete=models.DO_NOTHING, db_column='id_uczelni')

    class Meta:
        managed = False
        db_table = 'wydzialy'
        unique_together = (('nazwa_wydzialu', 'uczelnia'),)
        verbose_name_plural = "Wydziały"

    def __str__(self):
        return f"{self.nazwa_wydzialu} ({self.uczelnia})"


class Opiekunowie(models.Model):
    pesel = models.CharField(max_length=11, unique=True, db_column='pesel')
    imie = models.CharField(max_length=50)
    drugie_imie = models.CharField(max_length=50, blank=True, null=True)
    nazwisko = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    numer_kontaktowy = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'opiekunowie'
        verbose_name_plural = "Opiekunowie"

    def __str__(self):
        return f"{self.imie} {self.nazwisko}"


class Czlonkowie(models.Model):
    pesel = models.CharField(max_length=11, unique=True, blank=True, null=True, db_column='pesel')
    imie = models.CharField(max_length=50)
    drugie_imie = models.CharField(max_length=50, blank=True, null=True)
    nazwisko = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    numer_kontaktowy = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'czlonkowie'
        verbose_name_plural = "Członkowie"

    def __str__(self):
        return f"{self.imie} {self.nazwisko}"


class CzlonkowieWOrganizacjach(models.Model):
    """
    Model pośredni dla relacji ManyToMany między Organizacje a Czlonkowie.
    Konieczny przy managed=False, aby wskazać niestandardowe nazwy kolumn.
    """
    czlonek = models.ForeignKey(Czlonkowie, on_delete=models.DO_NOTHING, db_column='id_czlonka')
    organizacja = models.ForeignKey('Organizacje', on_delete=models.DO_NOTHING, db_column='id_organizacji')

    class Meta:
        managed = False
        db_table = 'czlonkowie_w_organizacjach'
        unique_together = (('czlonek', 'organizacja'),)


class Organizacje(models.Model):
    nazwa_organizacji = models.CharField(max_length=100, blank=True, null=True)
    data_zalozenia = models.DateField()
    czy_aktywna = models.BooleanField()
    opiekun = models.ForeignKey(Opiekunowie, on_delete=models.DO_NOTHING, db_column='id_opiekuna')
    wydzial = models.ForeignKey(Wydzialy, on_delete=models.DO_NOTHING, db_column='id_wydzialu')

    # Relacja ManyToMany z użyciem modelu pośredniego (through)
    czlonkowie = models.ManyToManyField(
        Czlonkowie,
        through='CzlonkowieWOrganizacjach',
        through_fields=('organizacja', 'czlonek'),
        blank=True
    )

    class Meta:
        managed = False
        db_table = 'organizacje'
        unique_together = (('nazwa_organizacji', 'wydzial'),)
        verbose_name_plural = "Organizacje"

    def __str__(self):
        return f"{self.nazwa_organizacji} ({self.wydzial.uczelnia})"


class Projekty(models.Model):
    nazwa_projektu = models.CharField(max_length=100, blank=True, null=True)
    liczba_pkt_do_stypendium = models.IntegerField()
    opis_projektu = models.TextField(blank=True, null=True)
    organizacja = models.ForeignKey(Organizacje, on_delete=models.DO_NOTHING, db_column='id_organizacji')

    class Meta:
        managed = False
        db_table = 'projekty'
        unique_together = (('nazwa_projektu', 'organizacja'),)
        verbose_name_plural = "Projekty"

    def __str__(self):
        return self.nazwa_projektu


class Wydarzenia(models.Model):
    nazwa_wydarzenia = models.CharField(max_length=100, blank=True, null=True)
    data_rozpoczecia = models.DateField()
    data_zakonczenia = models.DateField()
    opis_wydarzenia = models.TextField(blank=True, null=True)
    organizacja = models.ForeignKey(Organizacje, on_delete=models.DO_NOTHING, db_column='id_organizacji')
    pokoj = models.ForeignKey(Pokoje, on_delete=models.DO_NOTHING, db_column='id_pokoju')

    class Meta:
        managed = False
        db_table = 'wydarzenia'
        unique_together = (('nazwa_wydarzenia', 'data_rozpoczecia', 'data_zakonczenia', 'organizacja'),)
        verbose_name_plural = "Wydarzenia"

    def __str__(self):
        return self.nazwa_wydarzenia


class Sekcje(models.Model):
    nazwa_sekcji = models.CharField(max_length=100, blank=True, null=True)
    data_zalozenia = models.DateField()
    opis_sekcji = models.TextField(blank=True, null=True)
    organizacja = models.ForeignKey(Organizacje, on_delete=models.DO_NOTHING, db_column='id_organizacji')

    class Meta:
        managed = False
        db_table = 'sekcje'
        unique_together = (('nazwa_sekcji', 'organizacja'),)
        verbose_name_plural = "Sekcje"

    def __str__(self):
        return f"{self.nazwa_sekcji} ({self.organizacja.nazwa_organizacji})"


class Role(models.Model):
    nazwa_roli = models.CharField(max_length=50, blank=True, null=True)
    liczba_pkt_do_stypendium = models.IntegerField()
    sekcja = models.ForeignKey(Sekcje, on_delete=models.DO_NOTHING, db_column='id_sekcji')
    czlonek = models.ForeignKey(Czlonkowie, on_delete=models.DO_NOTHING, db_column='id_czlonka')

    class Meta:
        managed = False
        db_table = 'role'
        unique_together = (('nazwa_roli', 'sekcja'),)
        verbose_name_plural = "Role"

    def __str__(self):
        return self.nazwa_roli