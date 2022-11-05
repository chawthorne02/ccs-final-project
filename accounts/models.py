from random import choices
from unittest.util import _MAX_LENGTH
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from phonenumber_field.formfields import PhoneNumberField




class User(AbstractUser):
    is_student = models.BooleanField(default=False)
    is_tutor = models.BooleanField(default=False)

    def __str__(self):
        return self.username

    
class Student(models.Model):

    ELEMENTARY = "Elementary"
    MIDDLE_SCHOOL = "Middle"
    HIGH_SCHOOL = "High"

    MATH = "Math"
    SCIENCE = "Science"
    SOCIAL_STUDIES = "SS"
    LANGUAGE_ARTS = "LA"

    EDUCATION_CHOICES = [
        (ELEMENTARY, "Elementary"),
        (MIDDLE_SCHOOL, "Middle"),
        (HIGH_SCHOOL, "High"),
    ]

    SUBJECT_CHOICES = [
        (MATH, "Math"),
        (SCIENCE, "Science"),
        (SOCIAL_STUDIES, "SS"),
        (LANGUAGE_ARTS, "LA"),
    ]


    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True)
    avatar = models.ImageField(upload_to='profiles/', null=True)
    grade_level = models.CharField(max_length=25, choices=EDUCATION_CHOICES, null=True)
    subject = models.CharField(max_length=25, choices=SUBJECT_CHOICES, null=True)
    bio = models.TextField(null=True)

    def __str__(self):
        return self.user.username


class Tutor(models.Model):
    ELEMENTARY = "Elementary"
    MIDDLE_SCHOOL = "Middle"
    HIGH_SCHOOL = "High"

    MATH = "Math"
    SCIENCE = "Science"
    SOCIAL_STUDIES = "SS"
    LANGUAGE_ARTS = "LA"

    EDUCATION_CHOICES = [
        (ELEMENTARY, "Elementary"),
        (MIDDLE_SCHOOL, "Middle"),
        (HIGH_SCHOOL, "High"),
    ]

    SUBJECT_CHOICES = [
        (MATH, "Math"),
        (SCIENCE, "Science"),
        (SOCIAL_STUDIES, "SS"),
        (LANGUAGE_ARTS, "LA"),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True)
    avatar = models.ImageField(upload_to='profiles/', null=True)
    level_preferred = models.CharField(max_length=25, choices=EDUCATION_CHOICES, null=True)
    subject = models.CharField(max_length=25, choices=SUBJECT_CHOICES, null=True)
    bio = models.TextField(null=True)
    admin_verified = models.BooleanField(default=False)
    is_certified = models.BooleanField(default=False)
    student = models.ForeignKey(Student, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.user.username


class Reference(models.Model):
    tutor = models.ForeignKey(Tutor, on_delete=models.CASCADE, blank=True)
    position = models.CharField(max_length=100, null=True)
    company_name = models.CharField(max_length=100, null=True)
    company_address = models.CharField(max_length=100, null=True)
    company_state = models.CharField(max_length=50, null=True)
    zip_code = models.CharField(max_length=12, null=True)
    city = models.CharField(max_length=1024, null=True)
    phone_number = PhoneNumberField()  # A Django library which interfaces with python-phonenumbers to validate, pretty print and convert phone numbers.
    email = models.EmailField(max_length=100, null=True)
    description = models.CharField(max_length=200, null=True)
    admin_verified = models.BooleanField(default=False)


class Lesson(models.Model):
    title = models.CharField(max_length=50, null=True)
    notes = models.TextField(null=True)
    tutor = models.ForeignKey(Tutor, on_delete=models.CASCADE, blank=True)
    student = models.ForeignKey(Student, on_delete=models.CASCADE, blank=True)




    

















# class Profile(models.Model):
#     avatar = models.ImageField(upload_to='profiles/') 
#     user = models.OneToOneField(
#         settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
                                                              
#     def __str__(self):                                         
#         return self.user.username 


# class Tutor(models.Model):

#     ELEMENTARY = "Elementary"
#     MIDDLE_SCHOOL = "Middle"
#     HIGH_SCHOOL = "High"

#     MATH = "Math"
#     SCIENCE = "Science"
#     SOCIAL_STUDIES = "SS"
#     LANGUAGE_ARTS = "LA"

#     EDUCATION_CHOICES = [
#         (ELEMENTARY, "Elementary"),
#         (MIDDLE_SCHOOL, "Middle"),
#         (HIGH_SCHOOL, "High"),
#     ]

#     SUBJECT_CHOICES = [
#         (MATH, "Math"),
#         (SCIENCE, "Science"),
#         (SOCIAL_STUDIES, "SS"),
#         (LANGUAGE_ARTS, "LA"),
#     ]


#     user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
#     avatar = models.ImageField(upload_to='profiles/', null=True)
#     level_preferred = models.CharField(max_length=25, choices=EDUCATION_CHOICES, null=True)
#     subject = models.CharField(max_length=25, choices=SUBJECT_CHOICES, null=True)
#     bio = models.TextField(null=True)
#     admin_verified = models.BooleanField(default=False)
#     is_certified = models.BooleanField(default=False)
    


# class Student(models.Model):
    
#     ELEMENTARY = "Elementary"
#     MIDDLE_SCHOOL = "Middle"
#     HIGH_SCHOOL = "High"

#     MATH = "Math"
#     SCIENCE = "Science"
#     SOCIAL_STUDIES = "SS"
#     LANGUAGE_ARTS = "LA"

#     EDUCATION_CHOICES = [
#         (ELEMENTARY, "Elementary"),
#         (MIDDLE_SCHOOL, "Middle"),
#         (HIGH_SCHOOL, "High"),
#     ]

#     SUBJECT_CHOICES = [
#         (MATH, "Math"),
#         (SCIENCE, "Science"),
#         (SOCIAL_STUDIES, "SS"),
#         (LANGUAGE_ARTS, "LA"),
#     ]


#     user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True) # make a one to one
#     avatar = models.ImageField(upload_to='profiles/', null=True)
#     level_preferred = models.CharField(max_length=25, choices=EDUCATION_CHOICES, null=True)
#     subject = models.CharField(max_length=25, choices=SUBJECT_CHOICES, null=True)
#     bio = models.TextField(null=True)
#     tutor = models.ManyToManyField(Tutor)






