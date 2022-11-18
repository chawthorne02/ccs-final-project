from random import choices
from unittest.util import _MAX_LENGTH
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from phonenumber_field.formfields import PhoneNumberField




class User(AbstractUser):
    is_student = models.BooleanField(default=False)
    is_tutor = models.BooleanField(default=False)


class TutorProfile(models.Model):
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

    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True)
    avatar = models.ImageField(upload_to='profiles/', null=True)
    first_name = models.CharField(max_length=225, null=True)
    last_name = models.CharField(max_length=225, null=True)
    email = models.CharField(max_length=225, null=True)
    level_preferred = models.CharField(max_length=25, choices=EDUCATION_CHOICES, null=True)
    subject = models.CharField(max_length=25, choices=SUBJECT_CHOICES, null=True)
    bio = models.TextField(null=True)
    location = models.CharField(max_length=225, null=True)
    admin_verified = models.BooleanField(default=False)
    is_certified = models.BooleanField(default=False)

    def __str__(self):
        return self.first_name + ' ' + self.last_name

    
class StudentProfile(models.Model):

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


    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True)
    avatar = models.ImageField(upload_to='profiles/', null=True)
    first_name = models.CharField(max_length=225, null=True)
    last_name = models.CharField(max_length=225, null=True)
    email = models.CharField(max_length=225, null=True)
    location = models.CharField(max_length=225, null=True)
    grade_level = models.CharField(max_length=25, choices=EDUCATION_CHOICES, null=True)
    subject = models.CharField(max_length=25, choices=SUBJECT_CHOICES, null=True)
    bio = models.TextField(null=True)
    tutor = models.ForeignKey(TutorProfile, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        return self.user.username


class Reference(models.Model):
    tutor = models.ForeignKey(TutorProfile, on_delete=models.CASCADE, blank=True)
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

    MONDAY = "Monday"
    TUESDAY = "Tuesday"
    WEDNESDAY = "Wednesday"
    THURSDAY = "Thursday"
    FRIDAY = "Friday"

    DAY_CHOICES = [
        (MONDAY, "Monday"),
        (TUESDAY, "Tuesday"),
        (WEDNESDAY, "Wednesday"),
        (THURSDAY, "Thursday"),
        (FRIDAY, "Friday"),
    ]

    COMPLETED = "Completed"
    IN_PROGRESS = "in_progress"
    NOT_STARTED = "not_started"

    PROGRESSION_CHOICES = [
        (COMPLETED, "Completed"),
        (IN_PROGRESS, "in_progress"),
        (NOT_STARTED, "not_started"),
    ]

    title = models.CharField(max_length=500, null=True)
    notes = models.TextField(null=True)
    tutor = models.ForeignKey(TutorProfile, on_delete=models.CASCADE, blank=True)
    student = models.ForeignKey(StudentProfile, on_delete=models.CASCADE, blank=True)
    day_assigned = models.CharField(max_length=25, choices=DAY_CHOICES, null=True)
    progress = models.CharField(max_length=25, choices=PROGRESSION_CHOICES, null=True)

class Review(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    first_name = models.CharField(max_length=225, null=True)
    last_name = models.CharField(max_length=225, null=True)
    avatar = models.ImageField(upload_to='profiles/', null=True)
    text = models.TextField(null=True)
    tutorprofile = models.ForeignKey(TutorProfile, on_delete=models.CASCADE, blank=True)
    rating = models.IntegerField()
    created_on = models.DateTimeField(auto_now_add=True, null=True)




    

















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






