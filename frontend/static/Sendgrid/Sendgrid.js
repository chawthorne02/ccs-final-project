
require('dotenv').config();


const client = require('@sendgrid/mail')


client.setApiKey(process.env.SG_API_KEY)

const message = {
    to: 'chawthorne02@gmail.com',
    from: 'betterminds257@gmail.com',
    subject: "Hello new Student",
    text: "Welcome to Better Minds Tutoring"
}

// sg.mail.send(message)
// .then(response => console.log('Email Sent'))
// .catch((error) => console.log(error.message));

client
 .send(message)
 .then(() => console.log("Mail sent successfully"))
 .catch(error => {
    console.error(error)
 })

 