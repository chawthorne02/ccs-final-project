# Generated by Django 4.1.3 on 2022-11-02 20:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_profile'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, null=True)),
                ('notes', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Reference',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('position', models.CharField(max_length=100, null=True)),
                ('company_name', models.CharField(max_length=100, null=True)),
                ('company_address', models.CharField(max_length=100, null=True)),
                ('company_state', models.CharField(max_length=50, null=True)),
                ('zip_code', models.CharField(max_length=12, null=True)),
                ('city', models.CharField(max_length=1024, null=True)),
                ('email', models.EmailField(max_length=100, null=True)),
                ('description', models.CharField(max_length=200, null=True)),
                ('admin_verified', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.ImageField(null=True, upload_to='profiles/')),
                ('grade_level', models.CharField(choices=[('Elementary', 'Elementary'), ('Middle', 'Middle'), ('High', 'High')], max_length=25, null=True)),
                ('subject', models.CharField(choices=[('Math', 'Math'), ('Science', 'Science'), ('SS', 'SS'), ('LA', 'LA')], max_length=25, null=True)),
                ('bio', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tutor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.ImageField(null=True, upload_to='profiles/')),
                ('level_preferred', models.CharField(choices=[('Elementary', 'Elementary'), ('Middle', 'Middle'), ('High', 'High')], max_length=25, null=True)),
                ('subject', models.CharField(choices=[('Math', 'Math'), ('Science', 'Science'), ('SS', 'SS'), ('LA', 'LA')], max_length=25, null=True)),
                ('bio', models.TextField(null=True)),
                ('admin_verified', models.BooleanField(default=False)),
                ('is_certified', models.BooleanField(default=False)),
                ('student', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.student')),
            ],
        ),
        migrations.AddField(
            model_name='user',
            name='is_student',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='user',
            name='is_tutor',
            field=models.BooleanField(default=False),
        ),
        migrations.DeleteModel(
            name='Profile',
        ),
        migrations.AddField(
            model_name='tutor',
            name='user',
            field=models.OneToOneField(blank=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='student',
            name='user',
            field=models.OneToOneField(blank=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='reference',
            name='tutor',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.tutor'),
        ),
        migrations.AddField(
            model_name='lesson',
            name='student',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.student'),
        ),
        migrations.AddField(
            model_name='lesson',
            name='tutor',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.tutor'),
        ),
    ]
