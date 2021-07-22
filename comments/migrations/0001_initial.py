# Generated by Django 3.2.5 on 2021-07-22 09:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('locations', '0003_auto_20210721_1415'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(max_length=300)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='locations.location')),
            ],
        ),
    ]