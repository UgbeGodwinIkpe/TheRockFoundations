const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../auth');

// welcom page
router.get('/', (req, res) => res.render('welcome'));

// Accessing user's Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
    res.render('dashboard', {
        name: req.user.name,
        title: req.user.title
    }));

module.exports = router;