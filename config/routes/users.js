const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const applliedAdmisssion = require('../models/Admission').applliedAdmisssion;
const { route } = require('.');


// router.use(express.static(__dirname + "./public/"));


// to render about page
router.get('/about', (req, res) => res.render('about'));
// to render management team page
router.get('/team', (req, res) => res.render('team'));

// Update handle
router.post('/edit', (req, res) => {
    const { title, name, email, phone_number, address } = req.body;

    let newvalues = { $set: { title: title, name: name, email: email, phone_number: phone_number, address: address } };
    User.updateOne({ _id: req.user._id }, newvalues, (err, res) => {
        if (err) throw err;
        console.log("1 document updated");
    });
    res.send('Records successfully updated');
});


// Admissions Handle
router.post('/admissions', (req, res) => {
    const { firstName, surName, otherName, birthdate, nationality, state, lga, examCentre, entryClass, parentName, parentPhoneNumber, parentAddress } = req.body;
    let errors = [];

    // check require fields
    if (!firstName || !surName || !otherName || !birthdate || !nationality || !state || !lga || !examCentre || !entryClass || !parentName || !parentAddress || !parentPhoneNumber) {
        errors.push({ msg: 'Please fill in all fields' });
    }

    if (errors.length > 0) {
        res.render('admission', {
            errors,
            firstName,
            surName,
            otherName,
            birthdate,
            nationality,
            state,
            lga,
            examCentre,
            entryClass,
            parentName,
            parentPhoneNumber,
            parentAddress
        });
    } else {
        // validation passed
        applliedAdmisssion.findOne({ FirstName: firstName, SurName: surName, Other_Name: otherName, parent_Name: parentName })
            .then(user => {
                if (user) {
                    // user exist
                    errors.push({ msg: 'This ward has already applied for this admission' })
                    res.render('admission', {
                        errors,
                        firstName,
                        surName,
                        otherName,
                        birthdate,
                        nationality,
                        state,
                        lga,
                        examCentre,
                        entryClass,
                        parentName,
                        parentPhoneNumber,
                        parentAddress
                    });
                } else {
                    const newWard = new Ward({
                        firstName,
                        surName,
                        otherName,
                        birthdate,
                        nationality,
                        state,
                        lga,
                        examCentre,
                        entryClass,
                        parentName,
                        parentPhoneNumber,
                        parentAddress
                    });

                    // save the user
                    newWard.save()
                        .then(user => {
                            req.flash('success_msg', 'Your admission details have been submitted successfully');
                            res.redirect('/users/addpicture')
                        })
                        .catch(err => console.log(err));
                }
            });

    }
});

// Login Handle
router.post('/login', (req, res, next) => {
    console.log(req.body);
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next)


});


module.exports = router;