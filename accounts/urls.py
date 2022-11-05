from django.urls import path, include
from .views import TutorListApiView, TutorDetailApiView, StudentListApiView, StudentDetailApiView

app_name = 'accounts'

urlpatterns = [
    # path('profiles/', ProfileListAPIView.as_view(), name='profile_list')

]