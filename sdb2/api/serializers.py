from rest_framework import serializers
from .models import (
    Uczelnie, Budynki, Pokoje, Wydzialy, Opiekunowie,
    Organizacje, Projekty, Wydarzenia, Sekcje, Czlonkowie, Role
)

class UczelnieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Uczelnie
        fields = '__all__'

class BudynkiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budynki
        fields = '__all__'

class PokojeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokoje
        fields = '__all__'

class WydzialySerializer(serializers.ModelSerializer):
    class Meta:
        model = Wydzialy
        fields = '__all__'

class OpiekunowieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Opiekunowie
        fields = '__all__'

class CzlonkowieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Czlonkowie
        fields = '__all__'

class OrganizacjeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organizacje
        fields = '__all__'

class ProjektySerializer(serializers.ModelSerializer):
    class Meta:
        model = Projekty
        fields = '__all__'

class WydarzeniaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wydarzenia
        fields = '__all__'

class SekcjeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sekcje
        fields = '__all__'

class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'