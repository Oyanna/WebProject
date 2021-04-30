from django.db import models
from auth_.models import Profile

class Brand(models.Model):
    name = models.CharField(max_length=50)
    class Meta:
        verbose_name = 'Brand'
        verbose_name_plural = 'Brands'

class Car(models.Model):
    title = models.CharField(max_length=50)
    text = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now=True)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, default=None, null=True)
    author = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='cars')

    class Meta:
        verbose_name = 'Car'
        verbose_name_plural = 'Cars'

class Comment(models.Model):
    text = models.CharField(max_length=200)
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='comments')
    owner = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='comments')

    class Meta:
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'

class Like(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE, default=None, null=True, related_name='likes')
    # comment = models.ForeignKey(Comment, on_delete=models.CASCADE, default=None, null=True)
    owner = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='likes')

    class Meta:
        verbose_name = 'Like'
        verbose_name_plural = 'Likes'