from django.contrib import admin

# Register your models here.
from . import models
admin.site.register(models.Uczelnie)
admin.site.register(models.Budynki)
admin.site.register(models.Pokoje)
admin.site.register(models.Wydzialy)
admin.site.register(models.Opiekunowie)
admin.site.register(models.Organizacje)
admin.site.register(models.Projekty)
admin.site.register(models.Wydarzenia)
admin.site.register(models.Sekcje)
admin.site.register(models.Czlonkowie)
admin.site.register(models.Role)

