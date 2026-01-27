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
    uczelnia_name = serializers.StringRelatedField(source='uczelnia')
    
    class Meta:
        model = Budynki
        fields = '__all__'

class PokojeSerializer(serializers.ModelSerializer):
    budynek_name = serializers.StringRelatedField(source='budynek')
    
    class Meta:
        model = Pokoje
        fields = '__all__'

class WydzialySerializer(serializers.ModelSerializer):
    uczelnia_name = serializers.StringRelatedField(source='uczelnia')
    
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
    opiekun_name = serializers.StringRelatedField(source='opiekun')
    wydzial_name = serializers.StringRelatedField(source='wydzial')
    
    class Meta:
        model = Organizacje
        fields = '__all__'

class ProjektySerializer(serializers.ModelSerializer):
    organizacja_name = serializers.StringRelatedField(source='organizacja')
    
    class Meta:
        model = Projekty
        fields = '__all__'

class WydarzeniaSerializer(serializers.ModelSerializer):
    organizacja_name = serializers.StringRelatedField(source='organizacja')
    pokoj_name = serializers.StringRelatedField(source='pokoj')
    
    class Meta:
        model = Wydarzenia
        fields = '__all__'

class SekcjeSerializer(serializers.ModelSerializer):
    organizacja_name = serializers.StringRelatedField(source='organizacja')
    
    class Meta:
        model = Sekcje
        fields = '__all__'

class RoleSerializer(serializers.ModelSerializer):
    sekcja_name = serializers.StringRelatedField(source='sekcja')
    czlonek_name = serializers.StringRelatedField(source='czlonek')
    
    class Meta:
        model = Role
        fields = '__all__'