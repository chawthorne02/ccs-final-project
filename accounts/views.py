from rest_framework import generics
from .models import TutorProfile, StudentProfile, Reference, Lesson, User, Review
from .serializers import TutorProfileSerializer, StudentProfileSerializer, UserDetailsSerializer, ReferenceSerializer, LessonSerializer, ReviewSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser
from .permissions import IsUserOrReadOnly

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
        return TutorProfile.objects.filter(is_verified=True) # Returns a new QuerySet containing objects that match the given lookup parameters which "is_verified"

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
    queryset = StudentProfile.objects.all() # Retrieve ALL objects from the Student table
    serializer_class = StudentProfileSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


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
    queryset = queryset = Reference.objects.all()
    serializer_class = ReferenceSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class LessonListApiView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated, IsAdminUser,)
    queryset = Reference.objects.all()
    serializer_class = LessonSerializer


class LessonDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsUserOrReadOnly,)
    queryset = queryset = Reference.objects.all()
    serializer_class = LessonSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

