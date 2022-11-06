from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, TutorProfile, StudentProfile, Review

admin.site.register(User, UserAdmin),
# admin.site.register(Profile)
admin.site.register(TutorProfile)
admin.site.register(StudentProfile)
admin.site.register(Review)

