const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const sendMail = require('./config/mail');
const applliedAdmisssion = require('./config/models/Admission');
const dotenv = require('dotenv');

dotenv.config({ path: '.config/.env' });
const app = express();


// DB config
const db = require('./config/keys').MongoURI;

// connect to Mongo
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
    resave: true,
    saveUninitialized: true

}));




// connect flash
app.use(flash());

// Global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});


// routes
app.get('/', (req, res) => {
    res.render('welcome')
})
app.get('/about', (req, res) => res.render('about'));
app.get('/admissions', (req, res) => res.render('admission'));
app.get('/entranceExam', (req, res) => res.render('entranceExam'));
app.get('/fees', (req, res) => {
    res.render('fees');
});

//post admission form request
app.post('/email', (req, res) => {
    const name = req.body.name,
        subject = "The Rock Foundations Admission Form request from " + name + ' ' + ' ' + req.body.subject,
        email = req.body.email,
        text = "I'm requesting for " + req.body.text + " admission form(s) for my children ";
    console.log('Data:', req.body);
    //Send an email here...
    sendMail(name, email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            console.log('Email sent')
            res.status(200).json({ message: 'Email sent!!!' });
        }
    });
    // res.json({ message: 'Message received!' })
});

//post contact form 
app.post('/contactForm', (req, res) => {
    const name = req.body.name,
        subject = "The Rock Foundations Contact Form request from " + name,
        email = req.body.email,
        text = req.body.text;
    console.log('Data:', req.body);
    //Send an email here...
    sendMail(name, email, subject, text, function(err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            console.log('Email sent')
            res.status(200).json({ message: 'Email sent!!!' });
        }
    });
    // res.json({ message: 'Message received!' })
});

// Admission Handle
app.post('/admissions', (req, res) => {
    // console.log(req.body);
    const { firstName, surName, otherName, birthdate, nationality, state, lga, entranceExamCentre, entryClass, parentName, parentPhoneNumber, parentAddress, parentEmail } = req.body;
    let errors = [];

    // check require fields
    if (!firstName || !surName || !otherName || !birthdate || !nationality || !state || !lga || !entranceExamCentre || !entryClass || !parentName || !parentAddress || !parentPhoneNumber || !parentEmail) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    if (errors.length > 0) {
        console.log(errors)
        res.render('admission', {
            errors,
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
        // validation passed
        applliedAdmisssion.findOne({ firstName: firstName, surName: surName, otherName: otherName, parentEmail })
            .then(user => {
                if (user) {
                    // user exist
                    console.log('This student has been registered')
                    errors.push({ msg: 'This ward has applied for this admission' })
                    res.render('admission', {
                        errors,
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
                            req.flash('success_msg', 'Your admission details has been submitted');
                            res.render('entranceExam', {
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

const PORT = process.env.PORT || 7070;

app.listen(PORT, console.log('Server started in ' + process.env.NODE_ENV + ' mode on port ' + PORT));