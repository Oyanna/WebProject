from django.urls import path
from api.views import CarListAPIView, CarDetailAPIView, BrandCarsAPIView,\
                    BrandListAPIView, ProfileCarAPIView, CarLikesAPIView, \
                    CarCommentsAPIView, CarLikeAPIView


urlpatterns = [
    path('brands/', BrandListAPIView.as_view()),
    path('brands/<int:id>/cars/', BrandCarsAPIView.as_view()),
    path('cars/', CarListAPIView.as_view()),
    path('cars/<int:id>/', CarDetailAPIView.as_view()),
    path('profile/<int:id>/cars/', ProfileCarAPIView.as_view()),
    path('cars/<int:pk>/like/', CarLikesAPIView.as_view()),
    path('cars/<int:pk1>/like/<int:pk2>', CarLikeAPIView.as_view()),
    path('cars/<int:pk>/comment/', CarCommentsAPIView.as_view()),
]
