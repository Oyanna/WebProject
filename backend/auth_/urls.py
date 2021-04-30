from django.urls import path
from auth_.views import login, logout, ProfilesAPIView, ProfileFollowingAPIView, ProfileFollowOperation, \
    ProfileFollowersAPIView, ProfileAPIView, MyUserAPIView, MyProfileAPIView


urlpatterns = [

    path('login/', login),
    path('logout/', logout),
# path('register/', UserCreateView.as_view()),
    path('me/', MyUserAPIView.as_view()),
    path('my-profile/', MyProfileAPIView.as_view()),
    path('profile/', ProfilesAPIView.as_view()),
    path('profile/<int:pk>/', ProfileAPIView.as_view())
]