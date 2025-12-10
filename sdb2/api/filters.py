from rest_framework import generics, filters, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.db import connection

from . import models
from . import serializers
from .filters import (
    UczelnieFilter, BudynkiFilter, PokojeFilter,
    OrganizacjeFilter, ProjektyFilter, WydarzeniaFilter, CzlonkowieFilter
)


class UczelnieListCreateView(generics.ListCreateAPIView):
    queryset = models.Uczelnie.objects.all()
    serializer_class = serializers.UczelnieSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = UczelnieFilter
    search_fields = ['nazwa', 'adres_uczelni']
    ordering_fields = ['nazwa', 'id']


class UczelnieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Uczelnie.objects.all()
    serializer_class = serializers.UczelnieSerializer


class BudynkiListCreateView(generics.ListCreateAPIView):
    queryset = models.Budynki.objects.all()
    serializer_class = serializers.BudynkiSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = BudynkiFilter
    search_fields = ['nazwa_budynku', 'adres_budynku']
    ordering_fields = ['nazwa_budynku']


class BudynkiDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Budynki.objects.all()
    serializer_class = serializers.BudynkiSerializer


class PokojeListCreateView(generics.ListCreateAPIView):
    queryset = models.Pokoje.objects.all()
    serializer_class = serializers.PokojeSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = PokojeFilter
    search_fields = ['nazwa_pokoju']
    ordering_fields = ['pojemnosc', 'nazwa_pokoju']


class PokojeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Pokoje.objects.all()
    serializer_class = serializers.PokojeSerializer


class WydzialyListCreateView(generics.ListCreateAPIView):
    queryset = models.Wydzialy.objects.all()
    serializer_class = serializers.WydzialySerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['uczelnia']
    search_fields = ['nazwa_wydzialu', 'adres_wydzialu']
    ordering_fields = ['nazwa_wydzialu']


class WydzialyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Wydzialy.objects.all()
    serializer_class = serializers.WydzialySerializer


class OpiekunowieListCreateView(generics.ListCreateAPIView):
    queryset = models.Opiekunowie.objects.all()
    serializer_class = serializers.OpiekunowieSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['email']
    search_fields = ['imie', 'nazwisko', 'pesel', 'email']
    ordering_fields = ['nazwisko', 'imie']


class OpiekunowieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Opiekunowie.objects.all()
    serializer_class = serializers.OpiekunowieSerializer


class OrganizacjeListCreateView(generics.ListCreateAPIView):
    queryset = models.Organizacje.objects.all()
    serializer_class = serializers.OrganizacjeSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = OrganizacjeFilter
    search_fields = ['nazwa_organizacji']
    ordering_fields = ['data_zalozenia', 'nazwa_organizacji']


class OrganizacjeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Organizacje.objects.all()
    serializer_class = serializers.OrganizacjeSerializer


class ProjektyListCreateView(generics.ListCreateAPIView):
    queryset = models.Projekty.objects.all()
    serializer_class = serializers.ProjektySerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = ProjektyFilter
    search_fields = ['nazwa_projektu', 'opis_projektu']
    ordering_fields = ['liczba_pkt_do_stypendium', 'nazwa_projektu']


class ProjektyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Projekty.objects.all()
    serializer_class = serializers.ProjektySerializer


class WydarzeniaListCreateView(generics.ListCreateAPIView):
    queryset = models.Wydarzenia.objects.all()
    serializer_class = serializers.WydarzeniaSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = WydarzeniaFilter
    search_fields = ['nazwa_wydarzenia', 'opis_wydarzenia']
    ordering_fields = ['data_rozpoczecia', 'data_zakonczenia']


class WydarzeniaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Wydarzenia.objects.all()
    serializer_class = serializers.WydarzeniaSerializer


class SekcjeListCreateView(generics.ListCreateAPIView):
    queryset = models.Sekcje.objects.all()
    serializer_class = serializers.SekcjeSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['organizacja']
    search_fields = ['nazwa_sekcji', 'opis_sekcji']
    ordering_fields = ['data_zalozenia']


class SekcjeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Sekcje.objects.all()
    serializer_class = serializers.SekcjeSerializer


class CzlonkowieListCreateView(generics.ListCreateAPIView):
    queryset = models.Czlonkowie.objects.all()
    serializer_class = serializers.CzlonkowieSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = CzlonkowieFilter
    search_fields = ['imie', 'nazwisko', 'pesel', 'email']
    ordering_fields = ['nazwisko', 'imie']


class CzlonkowieDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Czlonkowie.objects.all()
    serializer_class = serializers.CzlonkowieSerializer


class RoleListCreateView(generics.ListCreateAPIView):
    queryset = models.Role.objects.all()
    serializer_class = serializers.RoleSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['sekcja', 'czlonek']
    search_fields = ['nazwa_roli']
    ordering_fields = ['liczba_pkt_do_stypendium']


class RoleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Role.objects.all()
    serializer_class = serializers.RoleSerializer


class ZmienStatusOrganizacjiView(APIView):
    def post(self, request, pk):
        nowy_status = request.data.get('czy_aktywna')
        if nowy_status is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        try:
            with connection.cursor() as cursor:
                val = 1 if nowy_status else 0
                cursor.execute("CALL zmien_status_organizacji(%s, %s)", [pk, val])
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class RoleCzlonkaView(APIView):
    def get(self, request, pk):
        try:
            with connection.cursor() as cursor:
                cursor.execute("CALL pobierz_role_czlonka(%s)", [pk])
                rows = cursor.fetchall()

                results = []
                for row in rows:
                    results.append({
                        "imie": row[0],
                        "nazwisko": row[1],
                        "nazwa_sekcji": row[2],
                        "nazwa_roli": row[3]
                    })
                return Response(results)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)