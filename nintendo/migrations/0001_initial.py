# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Nintendo',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('title', models.CharField(max_length=50)),
                ('genre', models.CharField(max_length=50)),
                ('platform', models.CharField(max_length=50)),
                ('year', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'ordering': ['title'],
            },
        ),
    ]
