# Generated by Django 4.1.3 on 2022-11-07 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0014_review_first_name_review_last_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='avatar',
            field=models.ImageField(null=True, upload_to='profiles/'),
        ),
    ]
