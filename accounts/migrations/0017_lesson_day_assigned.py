# Generated by Django 4.1.3 on 2022-11-16 02:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0016_remove_tutorprofile_student_studentprofile_tutor'),
    ]

    operations = [
        migrations.AddField(
            model_name='lesson',
            name='day_assigned',
            field=models.CharField(choices=[('Monday', 'Monday'), ('Tuesday', 'Tuesday'), ('Wednesday', 'Wednesday'), ('Thursday', 'Thursday'), ('Friday', 'Friday')], max_length=25, null=True),
        ),
    ]
