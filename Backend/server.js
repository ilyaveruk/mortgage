// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

app.post('/sendmail', (req, res) => {
    const { firstName, lastName, mail, phone, option, info } = req.body;
    console.log(req);
    
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.SUPPORT_EMAIL, // The email you want to send to
        subject: `New contact form submission from ${firstName} ${lastName}`,
        text: `Name: ${firstName} ${lastName}\nEmail: ${mail}\nPhone: ${phone}\nOption: ${option}\nInfo: ${info}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email successfully sent');
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
