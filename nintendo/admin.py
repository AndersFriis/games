from django.contrib import admin

from .models import Nintendo

class NintendoAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name", "id",)}
