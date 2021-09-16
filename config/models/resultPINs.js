const mongoose = require('mongoose');
const resultPINs = new mongoose.Schema({
    resultCard: {
        PIN: {
            type: String,
            require: false
        },
        serial: {
            type: String,
            require: false
        }

    },
    date: {
        type: Date,
        default: Date.now
    }
});

const PIN = mongoose.model('PIN', resultPINs);

module.exports = PIN;