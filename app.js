const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const sendMail = require('./config/mail');
const applliedAdmisssion = require('./config/models/Admission');
const dotenv = require('dotenv');
const checkResult = require('./controller/checkResult');
const resultPIN = require('./controller/resultPIN');
const paidPIN = require('./controller/paidPIN');
dotenv.config({ path: '.config/.env' });
const app = express();


// DB config
const db = require('./config/keys').MongoURI;

// connection to Mongo appliedAdmission collection
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


// Loading dotenv variable

app.use(express.static(__dirname + '/public'));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Bodyparser
app.use(express.urlencoded({ extended: false }));

// Express middleware session
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true

}));

// connect flash
app.use(flash());




// routes
app.get('/', (req, res) => {
    res.render('welcome', {
        errors: req.flash('errors'),
        msg: req.flash('msg')
    })
})
app.get('/about', (req, res) => res.render('about'));
app.get('/admissions', (req, res) => res.render('admission', {
    errors: '',
    msg: ''
}));
app.get('/entranceExam', (req, res) => res.render('entranceExam'));
app.get('/fees', (req, res) => res.render('fees'));
app.get('/buyPIN', (req, res) => res.render('buyPIN'));

//post admission form request
app.post('/email', (req, res) => {
    const name = req.body.name,
        subject = "The Rock Foundations Admission Form request from " + name + ' ' + req.body.subject,
        email = req.body.email,
        Nform = req.body.Nform,
        text = "I need " + Nform + " admission form(s) for my child(ren) ";

    if (!name || !email || !Nform) {
        console.log('Please ensure you filled all fields before sending!');
        req.flash('errors', 'Please ensure you filled all fields before sending!');
        return res.render('welcome', {
            errors: req.flash('errors'),
            msg: ''
        });
    } else {

        //Send an email here...
        sendMail(name, email, subject, text, function(err, data) {
            if (err) {
                res.status(500).json({ message: 'Internal Error' });
            } else {
                console.log('Email sent')
                req.flash('msg', 'Your request has been successfully sent. A reply will be send to this ' + email + ' within 10 minutes. Thank you!');
                return res.render('welcome', {
                    msg: req.flash('msg'),
                    errors: ''
                });
            }
        });
    }
});
app.get('/paidPIN', paidPIN);
//post contact form 
app.post('/contactForm', (req, res) => {
    const name = req.body.name,
        subject = "The Rock Foundations Contact Form request from " + name,
        email = req.body.email,
        text = req.body.text;
    console.log('Data:', req.body);

    if (!name || !email || !text) {
        console.log('Please ensure you filled all fields before sending!');
        req.flash('errors', 'Please ensure you filled all fields before sending...');
        return res.render('welcome', {
            msg: '',
            errors: req.flash('errors')
        });
    } else {
        //Send an email here...
        sendMail(name, email, subject, text, function(err, data) {
            if (err) throw err;
            else {
                req.flash('msg', 'Your message has been successfully sent. Thanks for contacting us!');
                res.render('welcome', {
                    msg: req.flash('msg'),
                    errors: ''

                });
            }

        });
    }

});

// Admission Handle
app.post('/admissions', (req, res) => {
    // console.log(req.body);
    const { firstName, surName, otherName, birthdate, nationality, state, lga, entranceExamCentre, entryClass, parentName, parentPhoneNumber, parentAddress, parentEmail } = req.body;
    // let errors = [];

    // check require fields
    if (!firstName || !surName || !otherName || !birthdate || !nationality || !state || !lga || !entranceExamCentre || !entryClass || !parentName || !parentAddress || !parentPhoneNumber || !parentEmail) {
        req.flash('errors', 'Please fill in all fields');
        return res.render('admission', {
            errors: req.flash('errors'),
            msg: ''
        })
    } else {
        // validation passed
        applliedAdmisssion.findOne({ firstName: firstName, surName: surName, otherName: otherName, parentEmail })
            .then(user => {
                if (user) {
                    // user exist

                    req.flash('msg', 'Someone have apllied for this addmission with same information. Please check your details')
                    return res.render('admission', {
                        errors: '',
                        msg: req.flash('msg'),
                        firstName,
                        surName,
                        otherName,
                        birthdate,
                        nationality,
                        state,
                        lga,
                        entranceExamCentre,
                        entryClass,
                        parentName,
                        parentPhoneNumber,
                        parentAddress,
                        parentEmail
                    });
                } else {
                    const newapplliedAdmisssion = new applliedAdmisssion({
                        firstName,
                        surName,
                        otherName,
                        birthdate,
                        nationality,
                        state,
                        lga,
                        entranceExamCentre,
                        entryClass,
                        parentName,
                        parentPhoneNumber,
                        parentAddress,
                        parentEmail
                    });

                    // save the user
                    newapplliedAdmisssion.save()
                        .then(user => {
                            console.log(user);
                            req.flash('msg', 'Please pay for exams fee');
                            return res.render('entranceExam', {
                                fullName: firstName + otherName + surName,
                                parentPhoneNumber: parentPhoneNumber,
                                parentEmail: parentEmail,
                                entryClass: entryClass
                            })
                        })
                        .catch(err => console.log(err));
                }
            });

    }
});
app.post('/checkResult', checkResult);
// Result PINs
app.post('/resultPIN', resultPIN);

const PORT = process.env.PORT || 7070;

app.listen(PORT, console.log('Server started in ' + process.env.NODE_ENV + ' mode on port ' + PORT));