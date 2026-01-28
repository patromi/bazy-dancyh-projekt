from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import (
    Uczelnie, Budynki, Pokoje, Wydzialy, Opiekunowie,
    Organizacje, Projekty, Wydarzenia, Sekcje, Czlonkowie, Role
)
from .serializers import (
    UczelnieSerializer, BudynkiSerializer, PokojeSerializer, WydzialySerializer,
    OpiekunowieSerializer, OrganizacjeSerializer, ProjektySerializer,
    WydarzeniaSerializer, SekcjeSerializer, CzlonkowieSerializer, RoleSerializer
)
from .filters import (
    UczelnieFilter, BudynkiFilter, PokojeFilter, WydzialyFilter,
    OpiekunowieFilter, OrganizacjeFilter, ProjektyFilter,
    WydarzeniaFilter, SekcjeFilter, CzlonkowieFilter, RoleFilter
)
from .stats_view import StatsView

class UczelnieListCreateView(generics.ListCreateAPIView):
    queryset = Uczelnie.objects.all()
    serializer_class = UczelnieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = UczelnieFilter
    ordering_fields = '__all__'
    ordering = ['nazwa']
    search_fields = ['nazwa', 'adres_uczelni']

class UczelnieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Uczelnie.objects.all()
    serializer_class = UczelnieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = UczelnieFilter
    ordering_fields = '__all__'
    ordering = ['nazwa']

class BudynkiListCreateView(generics.ListCreateAPIView):
    queryset = Budynki.objects.all()
    serializer_class = BudynkiSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = BudynkiFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_budynku']
    search_fields = ['nazwa_budynku', 'adres_budynku', 'uczelnia__nazwa']

class BudynkiDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Budynki.objects.all()
    serializer_class = BudynkiSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = BudynkiFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_budynku']

class PokojeListCreateView(generics.ListCreateAPIView):
    queryset = Pokoje.objects.all()
    serializer_class = PokojeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = PokojeFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_pokoju']
    search_fields = ['nazwa_pokoju', 'budynek__nazwa_budynku']

class PokojeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pokoje.objects.all()
    serializer_class = PokojeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = PokojeFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_pokoju']

class WydzialyListCreateView(generics.ListCreateAPIView):
    queryset = Wydzialy.objects.all()
    serializer_class = WydzialySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = WydzialyFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_wydzialu']
    search_fields = ['nazwa_wydzialu', 'adres_wydzialu', 'uczelnia__nazwa']

class WydzialyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wydzialy.objects.all()
    serializer_class = WydzialySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = WydzialyFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_wydzialu']

class OpiekunowieListCreateView(generics.ListCreateAPIView):
    queryset = Opiekunowie.objects.all()
    serializer_class = OpiekunowieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = OpiekunowieFilter
    ordering_fields = '__all__'
    ordering = ['nazwisko']
    search_fields = ['imie', 'nazwisko', 'email', 'numer_kontaktowy']

class OpiekunowieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Opiekunowie.objects.all()
    serializer_class = OpiekunowieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = OpiekunowieFilter
    ordering_fields = '__all__'
    ordering = ['nazwisko']

class OrganizacjeListCreateView(generics.ListCreateAPIView):
    queryset = Organizacje.objects.all()
    serializer_class = OrganizacjeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = OrganizacjeFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_organizacji']
    search_fields = ['nazwa_organizacji', 'wydzial__nazwa_wydzialu']

class OrganizacjeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Organizacje.objects.all()
    serializer_class = OrganizacjeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = OrganizacjeFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_organizacji']

class ProjektyListCreateView(generics.ListCreateAPIView):
    queryset = Projekty.objects.all()
    serializer_class = ProjektySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = ProjektyFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_projektu']
    search_fields = ['nazwa_projektu', 'opis_projektu', 'organizacja__nazwa_organizacji']

class ProjektyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Projekty.objects.all()
    serializer_class = ProjektySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = ProjektyFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_projektu']

class WydarzeniaListCreateView(generics.ListCreateAPIView):
    queryset = Wydarzenia.objects.all()
    serializer_class = WydarzeniaSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = WydarzeniaFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_wydarzenia']
    search_fields = ['nazwa_wydarzenia', 'opis_wydarzenia', 'organizacja__nazwa_organizacji']

class WydarzeniaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wydarzenia.objects.all()
    serializer_class = WydarzeniaSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = WydarzeniaFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_wydarzenia']

class SekcjeListCreateView(generics.ListCreateAPIView):
    queryset = Sekcje.objects.all()
    serializer_class = SekcjeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = SekcjeFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_sekcji']
    search_fields = ['nazwa_sekcji', 'opis_sekcji', 'organizacja__nazwa_organizacji']

class SekcjeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sekcje.objects.all()
    serializer_class = SekcjeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = SekcjeFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_sekcji']

class CzlonkowieListCreateView(generics.ListCreateAPIView):
    queryset = Czlonkowie.objects.all()
    serializer_class = CzlonkowieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = CzlonkowieFilter
    ordering_fields = '__all__'
    ordering = ['nazwisko']
    search_fields = ['imie', 'nazwisko', 'email', 'numer_kontaktowy']

class CzlonkowieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Czlonkowie.objects.all()
    serializer_class = CzlonkowieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = CzlonkowieFilter
    ordering_fields = '__all__'
    ordering = ['nazwisko']

class RoleListCreateView(generics.ListCreateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = RoleFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_roli']
    search_fields = ['nazwa_roli', 'sekcja__nazwa_sekcji', 'czlonek__imie', 'czlonek__nazwisko', 'sekcja__organizacja__nazwa_organizacji']

class RoleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = RoleFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_roli']
