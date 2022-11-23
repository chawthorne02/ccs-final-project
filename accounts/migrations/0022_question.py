# Generated by Django 4.1.3 on 2022-11-23 03:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0021_alter_tutorprofile_avatar'),
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=500, null=True)),
                ('question', models.TextField()),
                ('studentprofile', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.studentprofile')),
                ('tutorprofile', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.tutorprofile')),
                ('user', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]