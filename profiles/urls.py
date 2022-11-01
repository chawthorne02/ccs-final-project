from django.urls import path
from .views import StudentProfileDetailAPIView, StudentProfileListAPIView, TutorProfileDetailAPIView, TutorProfileListAPIView

app_name = "profiles"

urlpatterns = [
    path('profiles/trainers/', TutorProfileListAPIView.as_view(), name='tutor_list'),
    path('profiles/trainers/<int:pk>/', TutorProfileDetailAPIView.as_view(), name='tutor_profile'),
    path('profiles/clients/', StudentProfileListAPIView.as_view(), name='student_list'),
    path('profiles/clients/<int:pk>/', StudentProfileDetailAPIView.as_view(), name='student_profile'),
]