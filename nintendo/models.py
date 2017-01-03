from django.db import models

from django.db import models
from django.core.urlresolvers import reverse

class Nintendo(models.Model):
    title = models.CharField(max_length=50)
    genre = models.CharField(max_length=50)
    platform = models.CharField(max_length=50)
    year = models.IntegerField(blank=True, null=True,)
    


    

    class Meta:
        ordering = ['title']

    def __str__(self):
        return self.name