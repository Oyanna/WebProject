from django.contrib import admin

# Register your models here.
from api.models import Car, Brand, Comment, Like

admin.site.register(Car)
admin.site.register(Brand)
admin.site.register(Comment)
admin.site.register(Like)