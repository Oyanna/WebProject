from django.http import Http404
from rest_framework import status
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from api.models import Car, Brand, Like, Comment
from api.serializers import BrandSerializer, CarSerializer, LikeSerializer, CommentSerializer
from auth_.models import Profile


class BrandListAPIView(APIView):
    def get(self, request):
        brands = Brand.objects.all()
        serializer = BrandSerializer(brands, many=True)

        return Response(serializer.data)



class BrandCarsAPIView(APIView):
    def get_brand(self, id):
        try:
            return Brand.objects.get(id=id)
        except Brand.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, id):
        brand = self.get_brand(id)
        cars = brand.car_set.all()
        
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)

    def post(self, request, id):
        brand = self.get_brand(id)
        profile = Profile.objects.get(user=self.request.user)
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(brand=brand, author_id=profile.id)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    # def put(self, request, id):
    #     brand = self.get_brand(id)
    #     serializer = BrandSerializer(instance=brand, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response({'error': serializer.errors})

    # def delete(self, request, id):
    #     company = self.get_company(id)
    #     company.delete()
    #     return Response({'deleted': True})

class ProfileCarAPIView(APIView):
    def get_profile(self, id):
        try:
            return Profile.objects.get(id=id)
        except Profile.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, id):
        profile = self.get_profile(id)
        cars = profile.cars.all()

        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)

    # def post(self, request, id):
    #     category = self.get_category(id)
    #     profile = Profile.objects.get(user=self.request.user)
    #     serializer = PostSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save(category=category, author_id=profile.id)
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response({'error': serializer.errors},
    #                     status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class CarListAPIView(APIView):
    def get(self, request):
        cars = Car.objects.all()
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)


class CarDetailAPIView(APIView):
    def get_car(self, id):
        try:
            return Car.objects.get(id=id)
        except Car.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, id):
        car = self.get_car(id)
        serializer = CarSerializer(car)
        return Response(serializer.data)

    def put(self, request, id):
        car = self.get_car(id)
        serializer = CarSerializer(instance=car, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, id):
        car = self.get_car(id)
        car.delete()
        return Response({'deleted': True})



class CarLikesAPIView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = LikeSerializer

    def get_car(self):
        try:
            car = Car.objects.get(id=self.kwargs['pk'])
        except Car.DoesNotExist:
            raise Http404
        return car

    def get_queryset(self):
        return self.get_car().likes.all()

    def perform_create(self, serializer):
        return serializer.save(car=self.get_car(), owner=Profile.objects.get(user=self.request.user))
    # ok

class CarLikeAPIView(APIView):
    permission_classes = (IsAuthenticated,)

    def get_car(self, id):
        try:
            car = Car.objects.get(id=id)
        except Car.DoesNotExist:
            raise Http404
        return car

    def get(self, request, pk1, pk2):
        try:
            like = self.get_car(id=pk1).likes.get(id=pk2)
        except Like.DoesNotExist:
            raise Http404
        serializer = LikeSerializer(like)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, pk1, pk2):
        try:
            like = self.get_car(pk1=pk1).likes.get(id=pk2)
        except Like.DoesNotExist:
            raise Http404
        like.delete()
        return Response({}, status=status.HTTP_204_NO_CONTENT)



class CarCommentsAPIView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CommentSerializer

    def get_car(self):
        try:
            car = Car.objects.get(id=self.kwargs['pk'])
            print(car)
        except Car.DoesNotExist:
            raise Http404
        return car

    def get_queryset(self):
        return self.get_car().comments.all()

    def perform_create(self, serializer):
        return serializer.save(car=self.get_car(), owner=Profile.objects.get(user=self.request.user))

class CarCommentAPIView(APIView):
    permission_classes = (IsAuthenticated,)

    def get_car(self, pk1):
        try:
            car = Car.objects.get(id=pk1)
        except Car.DoesNotExist:
            raise Http404
        return car

    def get(self, request, pk1, pk2):
        try:
            comment = self.get_post(pk1=pk1).comments.get(id=pk2)
        except Comment.DoesNotExist:
            raise Http404
        serializer = CommentSerializer(comment)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk1, pk2):
        try:
            instance = self.get_car(pk1=pk1).comments.get(id=pk2)
        except Comment.DoesNotExist:
            raise Http404
        serializer = CommentSerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk1, pk2):
        try:
            comment = self.get_car(pk1=pk1).comments.get(id=pk2)
        except Comment.DoesNotExist:
            raise Http404
        comment.delete()
        return Response({}, status=status.HTTP_204_NO_CONTENT)