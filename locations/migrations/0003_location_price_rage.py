# Generated by Django 3.2.5 on 2021-07-23 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0002_auto_20210723_0945'),
    ]

    operations = [
        migrations.AddField(
            model_name='location',
            name='price_rage',
            field=models.IntegerField(choices=[(1, 'Inexpensive'), (2, 'Moderately Expensive'), (3, 'Expensive'), (4, 'Very Expensive')], default=2),
        ),
    ]
