const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config()

const app = express();

const PORT = process.env.PORT
const sender = process.env.SENDER_EMAIL
const receiver = process.env.RECEIVER_EMAIL
const API_KEY = process.env.SENDGRID_API_KEY
const CORS_URL = process.env.CORS_URL   

app.use(express.json())
app.use(cors())     // setting up temparory for testing purpose
// app.use(cors({
//     origin: CORS_URL
// }))


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    //res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.post('/api/email', (req, res) => {
    //console.log(req.body);
    const username = req.body.username
    const email = req.body.email
    const message = req.body.message
    sgMail.setApiKey(API_KEY)
    sgMail.send({
        to: receiver,
        from: sender,
        subject: 'You have a new message from ayushaggarwal.com',
        text: `Name: ${username}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${username}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`
    }).then(() => {
        return res.status(201).json({
            msg: 'success'
        })
    })
        .catch((err) => {
            return res.status(500).json({
                msg: 'failure'
            })
        })

})

app.listen(PORT, () => {
    console.log("running....")
})


