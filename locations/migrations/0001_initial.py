# Generated by Django 3.2.5 on 2021-07-22 12:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default=None, max_length=50)),
                ('image1', models.CharField(blank=True, max_length=500)),
                ('image2', models.CharField(blank=True, max_length=500)),
                ('image3', models.CharField(blank=True, max_length=500)),
                ('description', models.TextField(default=None, max_length=200)),
                ('address', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(blank=True, default=None, max_length=100)),
                ('postal_code', models.CharField(default=None, max_length=100)),
                ('country', models.CharField(max_length=100)),
                ('latitude', models.DecimalField(blank=True, decimal_places=10, default=0, max_digits=18)),
                ('longitude', models.DecimalField(blank=True, decimal_places=10, default=0, max_digits=18)),
                ('post_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
