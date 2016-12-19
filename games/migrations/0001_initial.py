# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Games',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('title', models.CharField(max_length=50)),
                ('genre', models.CharField(max_length=50)),
                ('platform', models.CharField(max_length=50)),
                ('year', models.IntegerField(null=True, blank=True)),
            ],
            options={
                'ordering': ['title'],
            },
        ),
    ]
