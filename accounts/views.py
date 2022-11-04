from rest_framework import generics
from .models import Tutor, Student, Reference, Lesson, User
from .serializers import TutorSerializer, StudentSerializer, UserDetailsSerializer
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




