const sgMail = require("@sendgrid/mail");
require('dotenv').config()

module.exports = (req, res) => {
    const sender = process.env.SENDER_EMAIL
    const receiver = process.env.RECEIVER_EMAIL
    const API_KEY = process.env.SENDGRID_API_KEY
    const username = req.body.username
    const email = req.body.email
    const message = req.body.message
    sgMail.setApiKey(API_KEY);

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
}