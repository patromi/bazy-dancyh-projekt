from django.urls import path
from . import views

urlpatterns = [
    path('uczelnie/', views.UczelnieListCreateView.as_view(), name='uczelnie-list'),
    path('uczelnie/<int:pk>/', views.UczelnieDetailView.as_view(), name='uczelnie-detail'),

    path('budynki/', views.BudynkiListCreateView.as_view(), name='budynki-list'),
    path('budynki/<int:pk>/', views.BudynkiDetailView.as_view(), name='budynki-detail'),

    path('pokoje/', views.PokojeListCreateView.as_view(), name='pokoje-list'),
    path('pokoje/<int:pk>/', views.PokojeDetailView.as_view(), name='pokoje-detail'),

    path('wydzialy/', views.WydzialyListCreateView.as_view(), name='wydzialy-list'),
    path('wydzialy/<int:pk>/', views.WydzialyDetailView.as_view(), name='wydzialy-detail'),

    path('opiekunowie/', views.OpiekunowieListCreateView.as_view(), name='opiekunowie-list'),
    path('opiekunowie/<int:pk>/', views.OpiekunowieDetailView.as_view(), name='opiekunowie-detail'),

    path('organizacje/', views.OrganizacjeListCreateView.as_view(), name='organizacje-list'),
    path('organizacje/<int:pk>/', views.OrganizacjeDetailView.as_view(), name='organizacje-detail'),

    path('projekty/', views.ProjektyListCreateView.as_view(), name='projekty-list'),
    path('projekty/<int:pk>/', views.ProjektyDetailView.as_view(), name='projekty-detail'),

    path('wydarzenia/', views.WydarzeniaListCreateView.as_view(), name='wydarzenia-list'),
    path('wydarzenia/<int:pk>/', views.WydarzeniaDetailView.as_view(), name='wydarzenia-detail'),

    path('sekcje/', views.SekcjeListCreateView.as_view(), name='sekcje-list'),
    path('sekcje/<int:pk>/', views.SekcjeDetailView.as_view(), name='sekcje-detail'),

    path('czlonkowie/', views.CzlonkowieListCreateView.as_view(), name='czlonkowie-list'),
    path('czlonkowie/<int:pk>/', views.CzlonkowieDetailView.as_view(), name='czlonkowie-detail'),

    path('role/', views.RoleListCreateView.as_view(), name='role-list'),
    path('role/<int:pk>/', views.RoleDetailView.as_view(), name='role-detail'),

]
