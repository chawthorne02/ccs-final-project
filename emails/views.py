from django.shortcuts import render

# Create your views here.

from django.core.mail import send_mail
send_mail('Example Subject', 'Example message', 'from@example.com', ['eric.m.warren1@gmail.com'])