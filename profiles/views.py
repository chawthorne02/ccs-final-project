# from rest_framework import generics
# from .models import TutorProfile, StudentProfile
# from .serializers import TutorProfileSerializer, StudentProfileSerializer
# from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
# from .permissions import IsUserOrReadOnly

# # Create your views here.


# class TutorProfileListAPIView(generics.ListCreateAPIView):
#     permission_classes = (IsAuthenticatedOrReadOnly,)
#     queryset = TutorProfile.objects.all()
#     serializer_class = TutorProfileSerializer


# class TutorProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     permission_classes = (IsUserOrReadOnly,)
#     queryset = TutorProfile.objects.all()
#     serializer_class = TutorProfileSerializer


# class StudentProfileListAPIView(generics.ListCreateAPIView):
#     permission_classes = (IsAuthenticated,)
#     queryset = StudentProfile.objects.all()
#     serializer_class = StudentProfileSerializer


# class StudentProfileDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     permission_classes = (IsUserOrReadOnly,)
#     queryset = StudentProfile.objects.all()
#     serializer_class = StudentProfileSerializer