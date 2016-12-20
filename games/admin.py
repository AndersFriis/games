from django.contrib import admin

from .models import Games

class GamesAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name", "id",)}