const mongoose = require('mongoose');
const StudentAdmission = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    surName: {
        type: String,
        required: true
    },
    otherName: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    lga: {
        type: String,
        required: true
    },
    entranceExamCentre: {
        type: String,
        required: true
    },
    entryClass: {
        type: String,
        required: true
    },
    parentName: {
        type: String,
        required: true
    },
    parentAddress: {
        type: String,
        required: true
    },
    parentEmail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const applliedAdmisssion = mongoose.model('applliedAddmisssion', StudentAdmission);

module.exports = applliedAdmisssion;