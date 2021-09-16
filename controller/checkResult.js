const mongoose = require('mongoose');
const Result = require('../config/models/stuResult');
const resultPINs = require('../config/models/resultPINs');
const checkResult = (req, res) => {
    const { regNumber, term, PIN, serial } = req.body;
    Result.findOne({ regNumber, term, resultCard: { PIN, serial } }, (err, resul) => {
        if (err) throw err;
        if (resul) {
            return res.render('resultsheet', {
                result: resul
            });
        } else {
            resultPINs.findOne({ resultCard: { PIN, serial } }, (err, resul) => {
                if (err) throw err;
                if (resul) {
                    Result.findOne({ regNumber, term }, (err, resul) => {
                        if (err) throw err;
                        if (resul) {
                            Result.updateOne({ regNumber, term }, { $set: { resultCard: { PIN, serial } } }, (err, resul) => {
                                console.log('updated')
                                if (err) throw err;
                                if (resul) {
                                    Result.findOne({ regNumber, term, resultCard: { PIN, serial } }, (err, resul) => {
                                        if (err) throw err;
                                        if (resul) {
                                            return res.render('resultsheet', {
                                                result: resul
                                            });
                                        }
                                    });
                                } else {
                                    req.flash('msg', 'No result found');
                                    return res.render('welcome', {
                                        msg: req.flash('msg'),
                                        error: ''

                                    });
                                }

                            });
                        } else {
                            req.flash('errors', 'Incorrect registration number inputed');
                            return res.render('welcome', {
                                errors: req.flash('errors'),
                                msg: ''

                            });

                        }
                    });
                    // 
                } else {

                    req.flash('errors', 'Wrong result card details inputed')
                    return res.render('welcome', {
                        msg: '',
                        errors: req.flash('errors')
                    });
                }
            });
        }
    });

}


module.exports = checkResult;