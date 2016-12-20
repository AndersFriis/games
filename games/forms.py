from django import forms

from .models import Games

from core.forms import BootstrapFormMixin

class Games(BootstrapFormMixin, forms.ModelForm):

    class Meta:
        model = Games

        fields = (
            'title',
            'genre',
            'platform',
            'year',
            
            
        )