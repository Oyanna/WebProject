# Generated by Django 3.2 on 2021-04-23 22:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('auth_', '0003_follow'),
        ('api', '0003_auto_20210424_0341'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='post',
            new_name='car',
        ),
        migrations.RenameField(
            model_name='like',
            old_name='post',
            new_name='car',
        ),
        migrations.AlterField(
            model_name='car',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cars', to='auth_.profile'),
        ),
    ]
