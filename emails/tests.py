from django.test import TestCase

# Create your tests here.
from django.core.mail import send_mail
send_mail('Example Subject', 'Example message', 'from@example.com', ['eric.m.warren1@gmail.com'])