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

class UczelnieListCreateView(generics.ListCreateAPIView):
    queryset = Uczelnie.objects.all()
    serializer_class = UczelnieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = UczelnieFilter
    ordering_fields = '__all__'
    ordering = ['nazwa']

class UczelnieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Uczelnie.objects.all()
    serializer_class = UczelnieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = UczelnieFilter
    ordering_fields = '__all__'
    ordering = ['nazwa']

class BudynkiListCreateView(generics.ListCreateAPIView):
    queryset = Budynki.objects.all()
    serializer_class = BudynkiSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = BudynkiFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_budynku']

class BudynkiDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Budynki.objects.all()
    serializer_class = BudynkiSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = BudynkiFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_budynku']

class PokojeListCreateView(generics.ListCreateAPIView):
    queryset = Pokoje.objects.all()
    serializer_class = PokojeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = PokojeFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_pokoju']

class PokojeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pokoje.objects.all()
    serializer_class = PokojeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = PokojeFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_pokoju']

class WydzialyListCreateView(generics.ListCreateAPIView):
    queryset = Wydzialy.objects.all()
    serializer_class = WydzialySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = WydzialyFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_wydzialu']

class WydzialyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wydzialy.objects.all()
    serializer_class = WydzialySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = WydzialyFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_wydzialu']

class OpiekunowieListCreateView(generics.ListCreateAPIView):
    queryset = Opiekunowie.objects.all()
    serializer_class = OpiekunowieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = OpiekunowieFilter
    ordering_fields = '__all__'
    ordering = ['nazwisko']

class OpiekunowieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Opiekunowie.objects.all()
    serializer_class = OpiekunowieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = OpiekunowieFilter
    ordering_fields = '__all__'
    ordering = ['nazwisko']

class OrganizacjeListCreateView(generics.ListCreateAPIView):
    queryset = Organizacje.objects.all()
    serializer_class = OrganizacjeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = OrganizacjeFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_organizacji']

class OrganizacjeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Organizacje.objects.all()
    serializer_class = OrganizacjeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = OrganizacjeFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_organizacji']

class ProjektyListCreateView(generics.ListCreateAPIView):
    queryset = Projekty.objects.all()
    serializer_class = ProjektySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = ProjektyFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_projektu']

class ProjektyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Projekty.objects.all()
    serializer_class = ProjektySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = ProjektyFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_projektu']

class WydarzeniaListCreateView(generics.ListCreateAPIView):
    queryset = Wydarzenia.objects.all()
    serializer_class = WydarzeniaSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = WydarzeniaFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_wydarzenia']

class WydarzeniaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wydarzenia.objects.all()
    serializer_class = WydarzeniaSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = WydarzeniaFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_wydarzenia']

class SekcjeListCreateView(generics.ListCreateAPIView):
    queryset = Sekcje.objects.all()
    serializer_class = SekcjeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = SekcjeFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_sekcji']

class SekcjeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sekcje.objects.all()
    serializer_class = SekcjeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = SekcjeFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_sekcji']

class CzlonkowieListCreateView(generics.ListCreateAPIView):
    queryset = Czlonkowie.objects.all()
    serializer_class = CzlonkowieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = CzlonkowieFilter
    ordering_fields = '__all__'
    ordering = ['nazwisko']

class CzlonkowieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Czlonkowie.objects.all()
    serializer_class = CzlonkowieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = CzlonkowieFilter
    ordering_fields = '__all__'
    ordering = ['nazwisko']

class RoleListCreateView(generics.ListCreateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = RoleFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_roli']

class RoleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = RoleFilter
    ordering_fields = '__all__'
    ordering = ['nazwa_roli']