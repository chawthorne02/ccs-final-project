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


    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    is_verified = models.BooleanField(default=False)
    avatar = models.ImageField(upload_to='profiles/', null=True)
    first_name = models.CharField(max_length=225, null=True)
    last_name = models.CharField(max_length=225, null=True)
    references = models.CharField(max_length=225, null=True)
    level_preferred = models.CharField(max_length=25, choices=EDUCATION_CHOICES, null=True)
    subject = models.CharField(max_length=25, choices=SUBJECT_CHOICES, null=True)
    bio = models.TextField(null=True)
    email = models.CharField(max_length=225, null=True)
    joined_on = models.DateTimeField(auto_now_add=True, null=True)



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


    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    avatar = models.ImageField(upload_to='profiles/', null=True)
    first_name = models.CharField(max_length=225, null=True)
    last_name = models.CharField(max_length=225, null=True)
    level_preferred = models.CharField(max_length=25, choices=EDUCATION_CHOICES, null=True)
    subject = models.CharField(max_length=25, choices=SUBJECT_CHOICES, null=True)
    email = models.CharField(max_length=225, null=True)
