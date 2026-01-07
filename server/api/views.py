from rest_framework import generics
from .models import (
    Uczelnie, Budynki, Pokoje, Wydzialy, Opiekunowie,
    Organizacje, Projekty, Wydarzenia, Sekcje, Czlonkowie, Role
)
from .serializers import (
    UczelnieSerializer, BudynkiSerializer, PokojeSerializer, WydzialySerializer,
    OpiekunowieSerializer, OrganizacjeSerializer, ProjektySerializer,
    WydarzeniaSerializer, SekcjeSerializer, CzlonkowieSerializer, RoleSerializer
)

class UczelnieListCreateView(generics.ListCreateAPIView):
    queryset = Uczelnie.objects.all()
    serializer_class = UczelnieSerializer

class UczelnieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Uczelnie.objects.all()
    serializer_class = UczelnieSerializer

class BudynkiListCreateView(generics.ListCreateAPIView):
    queryset = Budynki.objects.all()
    serializer_class = BudynkiSerializer

class BudynkiDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Budynki.objects.all()
    serializer_class = BudynkiSerializer

class PokojeListCreateView(generics.ListCreateAPIView):
    queryset = Pokoje.objects.all()
    serializer_class = PokojeSerializer

class PokojeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pokoje.objects.all()
    serializer_class = PokojeSerializer

class WydzialyListCreateView(generics.ListCreateAPIView):
    queryset = Wydzialy.objects.all()
    serializer_class = WydzialySerializer

class WydzialyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wydzialy.objects.all()
    serializer_class = WydzialySerializer

class OpiekunowieListCreateView(generics.ListCreateAPIView):
    queryset = Opiekunowie.objects.all()
    serializer_class = OpiekunowieSerializer

class OpiekunowieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Opiekunowie.objects.all()
    serializer_class = OpiekunowieSerializer

class OrganizacjeListCreateView(generics.ListCreateAPIView):
    queryset = Organizacje.objects.all()
    serializer_class = OrganizacjeSerializer

class OrganizacjeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Organizacje.objects.all()
    serializer_class = OrganizacjeSerializer

class ProjektyListCreateView(generics.ListCreateAPIView):
    queryset = Projekty.objects.all()
    serializer_class = ProjektySerializer

class ProjektyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Projekty.objects.all()
    serializer_class = ProjektySerializer

class WydarzeniaListCreateView(generics.ListCreateAPIView):
    queryset = Wydarzenia.objects.all()
    serializer_class = WydarzeniaSerializer

class WydarzeniaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wydarzenia.objects.all()
    serializer_class = WydarzeniaSerializer

class SekcjeListCreateView(generics.ListCreateAPIView):
    queryset = Sekcje.objects.all()
    serializer_class = SekcjeSerializer

class SekcjeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sekcje.objects.all()
    serializer_class = SekcjeSerializer

class CzlonkowieListCreateView(generics.ListCreateAPIView):
    queryset = Czlonkowie.objects.all()
    serializer_class = CzlonkowieSerializer

class CzlonkowieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Czlonkowie.objects.all()
    serializer_class = CzlonkowieSerializer

class RoleListCreateView(generics.ListCreateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

class RoleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer