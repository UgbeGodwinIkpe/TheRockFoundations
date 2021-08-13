const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'dabd3ea089524e81c5353d7100d4e0ba-9ad3eb61-02971ce6',
        domain: 'sandboxecd0a20a99b54b78a49737e3939ec600.mailgun.org	'
    }
};
const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, subject, text, cb) => {
        const mailOptions = {
            sender: name,
            from: email,
            to: 'ugbegodwin7963@gmail.com',
            subject: subject,
            text: text
        };

        transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, data);
            }
        });

    }
    // Exporting the sendmail
module.exports = sendMail;