# Generated by Django 4.1.3 on 2022-11-02 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_lesson_reference_student_tutor_user_is_student_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='is_student',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='is_tutor',
            field=models.BooleanField(default=False, null=True),
        ),
    ]