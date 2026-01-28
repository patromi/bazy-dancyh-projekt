from rest_framework.views import APIView
from rest_framework.response import Response
from .models import (
    Uczelnie, Budynki, Pokoje, Wydzialy, Opiekunowie,
    Organizacje, Projekty, Wydarzenia, Sekcje, Czlonkowie
)

class StatsView(APIView):
    def get(self, request):
        data = {
            "uczelnie": Uczelnie.objects.count(),
            "budynki": Budynki.objects.count(),
            "pokoje": Pokoje.objects.count(),
            "wydzialy": Wydzialy.objects.count(),
            "opiekunowie": Opiekunowie.objects.count(),
            "organizacje": Organizacje.objects.count(),
            "projekty": Projekty.objects.count(),
            "wydarzenia": Wydarzenia.objects.count(),
            "sekcje": Sekcje.objects.count(),
            "czlonkowie": Czlonkowie.objects.count(),
        }
        return Response(data)
