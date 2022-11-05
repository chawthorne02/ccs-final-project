from django.urls import path, include
from .views import TutorProfileListApiView, TutorProfileDetailApiView, StudentProfileListApiView, StudentProfileDetailApiView, TutorReviewsListAPIView, UserListApiView

app_name = 'accounts'

urlpatterns = [
    # path('profiles/', ProfileListAPIView.as_view(), name='profile_list')

]