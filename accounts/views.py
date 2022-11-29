from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import TutorProfile, StudentProfile, Reference, Lesson, User, Review, Question
from .serializers import TutorProfileSerializer, StudentProfileSerializer, UserDetailsSerializer, ReferenceSerializer, LessonSerializer, ReviewSerializer, QuestionSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser
from .permissions import IsUserOrReadOnly
from django.shortcuts import get_object_or_404
from django.core.mail import send_mail
import sendgrid
import os
from sendgrid.helpers.mail import *


# class ProfileListAPIView(generics.ListCreateAPIView):
#     queryset = models.Profile.objects.all()
#     serializer_class = serializers.ProfileSerializer


#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

class UserListApiView(generics.ListCreateAPIView):
    permission_classes = (IsAdminUser,)
    queryset = User.objects.all()  # Retrieve ALL objects from the User table
    serializer_class = UserDetailsSerializer

class TutorProfileListApiView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = TutorProfileSerializer

    def get_queryset(self):
        return TutorProfile.objects.filter(admin_verified=True) # Returns a new QuerySet containing objects that match the given lookup parameters which "is_verified"

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TutorProfileDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsUserOrReadOnly,)
    queryset = TutorProfile.objects.all()
    serializer_class = TutorProfileSerializer


class TutorReviewsListAPIView(generics.ListCreateAPIView):
    permission_classes = (IsUserOrReadOnly,)
    serializer_class = ReviewSerializer

    def get_queryset(self):
        tutorprofile = self.kwargs['tutorprofile']
        return Review.objects.filter(tutorprofile=tutorprofile)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class StudentProfileListApiView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,) # Make sure student user is Authenticated
    # queryset = StudentProfile.objects.all() # Retrieve ALL objects from the Student table
    serializer_class = StudentProfileSerializer
    queryset = StudentProfile.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    # def get_queryset(self):
    #     # tutorprofile = self.kwargs['tutorprofile']
    #     tutorprofile = TutorProfile.objects.get(user=self.request.user)
    #     return StudentProfile.objects.filter(tutor=tutorprofile)

    



class StudentProfileDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsUserOrReadOnly,) # Makes sure this is the correct user
    queryset = StudentProfile.objects.all()
    serializer_class = StudentProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ReferenceListApiView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated, IsAdminUser,)
    queryset = Reference.objects.all()
    serializer_class = ReferenceSerializer


class ReferenceDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsUserOrReadOnly,)
    queryset = Reference.objects.all()
    serializer_class = ReferenceSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class LessonListApiView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated, IsAdminUser,)
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer


class LessonDetailApiView(generics.ListCreateAPIView):
    permission_classes = (IsUserOrReadOnly,)
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

    def perform_create(self, serializer):
        tutor_profile = TutorProfile.objects.get(user=self.request.user)
        serializer.save(tutor=tutor_profile)

        
    def get_queryset(self):
        pass

class ReviewListAPIView(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        tutorprofile = self.kwargs['tutorprofile']
        return Review.objects.filter(tutorprofile=tutorprofile)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ReviewDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsUserOrReadOnly,)
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class StudentLessonListAPIView(generics.ListAPIView):
    # queryset = StudentProfile.objects.all()
    serializer_class = LessonSerializer
    def get_queryset(self):
        student_profile = StudentProfile.objects.get(user=self.request.user)
        return Lesson.objects.filter(student=student_profile)

    # def perform_create(self, serializer):
    #     student_profile_id = self.kwargs['student']
    #     student_profile = StudentProfile.objects.get(id=student_profile_id)
    #     tutorprofile = TutorProfile.objects.get(user=self.request.user)
    #     serializer.save(tutor=tutorprofile, student=student_profile)

class StudentLessonDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = (IsUserOrReadOnly,)
    serializer_class = LessonSerializer
    queryset = Lesson.objects.all()

    # def get_object(self, ):
    #     lesson = self.kwargs['lesson']
    #     return get_object_or_404(Lesson, id=lesson)
 
class AllStudentLessonListAPIView(generics.RetrieveDestroyAPIView):
    permission_classes = (IsUserOrReadOnly,)
    serializer_class = LessonSerializer
    queryset = Lesson.objects.all()


class StudentLessonsTutorView(generics.ListCreateAPIView):
    serializer_class = LessonSerializer

    def get_queryset(self):

        # import pdb 
        # pdb.set_trace()
        student_profile = StudentProfile.objects.get(id=self.kwargs['pk'])
        return Lesson.objects.filter(student=student_profile)

    


class QuestionView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


@api_view(['PATCH'])
def add_tutor(request, tutor_id):
    student_profile = StudentProfile.objects.get(user=request.user)
    tutor_profile = TutorProfile.objects.get(id=tutor_id)
    student_profile.tutor = tutor_profile
    student_profile.save()
    serializer = StudentProfileSerializer(student_profile)

    sg = sendgrid.SendGridAPIClient(api_key=os.environ.get('SENDGRID_API_KEY'))
    from_email = Email("betterminds257@gmail.com")
    to_email = To("chawthorne02@gmail.com")
    subject = "A new student has requested to work with you!"
    content = Content("text/plain", "Check your dashboard page to see that they have joined!")
    mail = Mail(from_email, to_email, subject, content)
    response = sg.client.mail.send.post(request_body=mail.get())

    return Response(serializer.data)


# Sendgrid email servi
# send_mail('Hello', 'Welcome new Student', 'betterminds257@gmail.com', ['eric.m.warren1@gmail.com'], fail_silently=False)