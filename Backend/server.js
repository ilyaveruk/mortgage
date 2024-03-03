// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const DB = require('./Database');
const Contact = require('./models/ContactSchema');
const User = require('./models/UserSchema');


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

app.post('/sendmail', async (req, res) => {
    const {firstName, lastName, mail, phone, option, info, userId} = req.body;

    const newContact = new Contact({
        firstName,
        lastName,
        mail,
        phone,
        option,
        info,
        userId
    });

    await newContact.save();


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


app.post('/register', async (req, res) => {
    const {email, password} = req.body;

    const newUser = new User({
        email,
        password
    });

    await newUser.save();

    res.status(200).send('User successfully registered');
});

app.post('/login', async (req, res) => {

    const user = await User.findOne({email: req.body.email});

    if (user && user.password === req.body.password) {

        res.status(200).json({userId: user._id.toString()});
    } else {
        res.status(401).send('Invalid credentials');
    }

});

app.post('/recovery', async (req, res) => {
    const user = await User.findOne({email: req.body.email});

    if (user) {
        res.status(200).json({user});
    }
    else{
        res.status(401).send('Invalid email');
    }
});

app.post('/change-password', async (req, res) => {
    const user = await User.findOne({email: req.body.email});

    if (user) {
        await User.updateOne({email: req.body.email}, {password: req.body.password}).then(() => {
            res.status(200).send('Password successfully changed');

        });
    }

});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    DB();
    console.log(`Server running on port ${PORT}`);
});
