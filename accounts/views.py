from rest_framework import generics
from .models import Tutor, Student, Reference, Lesson, User
from .serializers import TutorSerializer, StudentSerializer, UserDetailsSerializer, ReferenceSerializer, LessonSerializer
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

class TutorListApiView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = TutorSerializer

    def get_queryset(self):
        return Tutor.objects.filter(is_verified=True) # Returns a new QuerySet containing objects that match the given lookup parameters which "is_verified"

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TutorDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsUserOrReadOnly,)
    queryset = Tutor.objects.all()
    serializer_class = TutorSerializer





class StudentListApiView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,) # Make sure student user is Authenticated
    queryset = Student.objects.all() # Retrieve ALL objects from the Student table
    serializer_class = StudentSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class StudentDetailApiView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsUserOrReadOnly,) # Makes sure this is the correct user
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

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

