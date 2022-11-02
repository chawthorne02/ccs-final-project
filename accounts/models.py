from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from phonenumber_field.formfields import PhoneNumberField

class User(AbstractUser):
    pass


# class Profile(models.Model):
#     avatar = models.ImageField(upload_to='profiles/') 
#     user = models.OneToOneField(
#         settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
                                                              
#     def __str__(self):                                         
#         return self.user.username 


from django.db import models
from django.conf import settings

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


    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    avatar = models.ImageField(upload_to='profiles/', null=True)
    level_preferred = models.CharField(max_length=25, choices=EDUCATION_CHOICES, null=True)
    subject = models.CharField(max_length=25, choices=SUBJECT_CHOICES, null=True)
    bio = models.TextField(null=True)
    

    # references = models.CharField(max_length=225, null=True) # reference model
    admin_verified = models.BooleanField(default=False)
    is_certified = models.BooleanField(default=False)
    

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


    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True) # make a one to one
    avatar = models.ImageField(upload_to='profiles/', null=True)
    level_preferred = models.CharField(max_length=25, choices=EDUCATION_CHOICES, null=True)
    subject = models.CharField(max_length=25, choices=SUBJECT_CHOICES, null=True)



class Reference(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    position = models.CharField(max_length=100, null=True)
    company = models.CharField(max_length=100, null=True)
    company_address = models.CharField(max_length=100, null=True)
    company_state = models.CharField(max_length=50, null=True)
    zip_code = models.CharField(max_length=12, null=True)
    city = models.CharField(max_length=1024, null=True)
    phone_number = PhoneNumberField()  # A Django library which interfaces with python-phonenumbers to validate, pretty print and convert phone numbers.
    email = models.EmailField(max_length=100, null=True)
    description = models.CharField(max_length=200, null=True)
    admin_verified = models.BooleanField(default=False)


