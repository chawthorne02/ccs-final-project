from rest_framework import serializers
from dj_rest_auth.serializers import UserDetailsSerializer
from dj_rest_auth.registration.serializers import RegisterSerializer
from dj_rest_auth.models import TokenModel
from django.db import models
from .models import TutorProfile, StudentProfile, Reference, Lesson, User, Review, Question


# class ProfileSerializer(serializers.ModelSerializer):
#     username = serializers.ReadOnlyField(source='user.username')

#     class Meta:
#         model = models.Profile
#         fields = '__all__'


class RegisterSerializer(RegisterSerializer):
    is_student = serializers.BooleanField(default=False)
    is_tutor = serializers.BooleanField(default=False)

    def get_cleaned_data(self):
        data_dict = super().get_cleaned_data()
        data_dict['is_student'] = self.validated_data.get('is_student', False)
        data_dict['is_tutor'] = self.validated_data.get('is_tutor', False)
        
        return data_dict


class UserDetailsSerializer(UserDetailsSerializer):

    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + ('is_tutor', 'is_student', )



class TokenSerializer(serializers.ModelSerializer):
    is_superuser = serializers.ReadOnlyField(source='user.is_superuser')
    id = serializers.ReadOnlyField(source='user.id')
    is_tutor = serializers.ReadOnlyField(source='user.is_tutor')
    is_student = serializers.ReadOnlyField(source='user.is_student')
    tutor_avatar = serializers.ReadOnlyField(source='user.tutor.avatar')
    student_avatar = serializers.ReadOnlyField(source='user.student.avatar')

    class Meta:
        model = TokenModel
        fields = ('key', 'is_superuser', 'id', 'is_tutor', 'is_student', 'tutor_avatar', 'student_avatar')







class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = '__all__'



class TutorProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TutorProfile
        fields = '__all__'
        read_only_fields = ['is_verified']


class ReferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reference
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):
    student_first_name = serializers.ReadOnlyField(source="student.first_name")
    student_last_name = serializers.ReadOnlyField(source="student.last_name")
    class Meta:
        model = Lesson
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    author_avatar = serializers.ImageField(source='user.studentprofile.avatar', read_only=True)

    class Meta:
        model = Review
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    student_first_name = serializers.ReadOnlyField(source="student.first_name")
    student_last_name = serializers.ReadOnlyField(source="student.last_name")
    tutor_first_name = serializers.ReadOnlyField(source="tutor.first_name")
    tutor_last_name = serializers.ReadOnlyField(source="tutor.last_name")

    class Meta:
        model = Question
        fields = '__all__'



# class UserDetailsSerializer(UserDetailsSerializer):
#     user_type = serializers.SerializerMethodField()

#     class Meta(UserDetailsSerializer.Meta):
#         fields = UserDetailsSerializer.Meta.fields + ('user_type', )

#     def get_user_type(self, obj):
#         if obj.is_student:
#             return 'student'
#         elif obj.is_tutor:
#             return 'tutor'
        
#         return 'user'

