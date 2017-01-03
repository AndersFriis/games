from django import forms

from .models import Nintendo

from core.forms import BootstrapFormMixin

class Nintendo(BootstrapFormMixin, forms.ModelForm):

    class Meta:
        model = Nintendo

        fields = (
            'title',
            'genre',
            'platform',
            'year',
            
            
        )