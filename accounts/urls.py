from django.urls import path, include
from .views import TutorProfileListApiView, TutorProfileDetailApiView, StudentProfileListApiView, StudentProfileDetailApiView, TutorReviewsListAPIView, UserListApiView, ReferenceListApiView, ReferenceDetailApiView, ReviewListApiView, LessonListApiView, LessonDetailApiView

app_name = 'accounts'

urlpatterns = [
    # path('profiles/', ProfileListAPIView.as_view(), name='profile_list')
    path('users/', UserListApiView.as_view(), name='user_list'),
    path('profiles/tutors/', TutorProfileListApiView.as_view(), name='tutor_list'),
    path('profiles/tutors/<int:pk>/', TutorProfileDetailApiView.as_view(), name='tutor_profile'),
    path('profiles/students/', StudentProfileListApiView.as_view(), name='student_list'),
    path('profiles/students/<int:pk>/', StudentProfileDetailApiView.as_view(), name='student_profile'),
    path('profiles/tutors/<int:tutorprofile>/reviews/', TutorReviewsListAPIView.as_view()),
    path('profiles/references/', ReferenceListApiView.as_view(), name='reference_list'),
    path('profiles/tutors/<int:tutorprofile>/references', ReferenceDetailApiView.as_view(), name='reference'),
    path('profiles/lessons/', LessonListApiView.as_view(), name='lesson_list'),
    path('profiles/lessons/<int:pk>/', LessonDetailApiView.as_view(), name='lesson'),
    path('profiles/reviews/', ReviewListApiView.as_view(), name='review_list'), 
]