from rest_framework import serializers
from dj_rest_auth.serializers import UserDetailsSerializer
from dj_rest_auth.registration.serializers import RegisterSerializer
from django.db import models


from .models import Tutor, Student, Reference, Lesson


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


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'



class TutorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tutor
        fields = '__all__'


class ReferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reference
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
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

