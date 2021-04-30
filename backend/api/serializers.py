from rest_framework import serializers
from auth_.serializers import ProfileSerializer
from api.models import Brand, Car, Comment, Like

class BrandSerializer(serializers.Serializer):
    name = serializers.CharField()

    # class Meta:
    #     model=Brand
    #     fields = '__all__'

class CarSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    created_at = serializers.DateTimeField(required=False)
    author = ProfileSerializer(required=False)
    brand = BrandSerializer(required=False)

    # class Meta:
    #     model = Car
    #     fields = '__all__'

    def create(self, validated_data):
        return Car.objects.create(**validated_data)

class CommentSerializer(serializers.ModelSerializer):
    # id = serializers.IntegerField(read_only=True)
    # created_at = serializers.DateTimeField(required=False)
    # owner = ProfileSerializer(required=False)
    # car = CarSerializer(required=False)

    class Meta:
        model = Comment
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.text = validated_data.get('text', instance.text)
        instance.save()
        return instance


class LikeSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    car = CarSerializer(required=False)
    # comment = CommentSerializer(required=False)
    owner = ProfileSerializer(required=False)

    class Meta:
        model = Like
        fields = '__all__'