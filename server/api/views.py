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

class UczelnieListCreateView(generics.ListCreateAPIView):
    queryset = Uczelnie.objects.all()
    serializer_class = UczelnieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class UczelnieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Uczelnie.objects.all()
    serializer_class = UczelnieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class BudynkiListCreateView(generics.ListCreateAPIView):
    queryset = Budynki.objects.all()
    serializer_class = BudynkiSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class BudynkiDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Budynki.objects.all()
    serializer_class = BudynkiSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class PokojeListCreateView(generics.ListCreateAPIView):
    queryset = Pokoje.objects.all()
    serializer_class = PokojeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class PokojeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pokoje.objects.all()
    serializer_class = PokojeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class WydzialyListCreateView(generics.ListCreateAPIView):
    queryset = Wydzialy.objects.all()
    serializer_class = WydzialySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class WydzialyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wydzialy.objects.all()
    serializer_class = WydzialySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class OpiekunowieListCreateView(generics.ListCreateAPIView):
    queryset = Opiekunowie.objects.all()
    serializer_class = OpiekunowieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class OpiekunowieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Opiekunowie.objects.all()
    serializer_class = OpiekunowieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class OrganizacjeListCreateView(generics.ListCreateAPIView):
    queryset = Organizacje.objects.all()
    serializer_class = OrganizacjeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class OrganizacjeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Organizacje.objects.all()
    serializer_class = OrganizacjeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class ProjektyListCreateView(generics.ListCreateAPIView):
    queryset = Projekty.objects.all()
    serializer_class = ProjektySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class ProjektyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Projekty.objects.all()
    serializer_class = ProjektySerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class WydarzeniaListCreateView(generics.ListCreateAPIView):
    queryset = Wydarzenia.objects.all()
    serializer_class = WydarzeniaSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class WydarzeniaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Wydarzenia.objects.all()
    serializer_class = WydarzeniaSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class SekcjeListCreateView(generics.ListCreateAPIView):
    queryset = Sekcje.objects.all()
    serializer_class = SekcjeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class SekcjeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sekcje.objects.all()
    serializer_class = SekcjeSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class CzlonkowieListCreateView(generics.ListCreateAPIView):
    queryset = Czlonkowie.objects.all()
    serializer_class = CzlonkowieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class CzlonkowieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Czlonkowie.objects.all()
    serializer_class = CzlonkowieSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class RoleListCreateView(generics.ListCreateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']

class RoleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = '__all__'
    ordering_fields = '__all__'
    ordering = ['id']