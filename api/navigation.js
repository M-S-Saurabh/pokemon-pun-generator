const express = require('express')
const router = express.Router()
const path = require('path');

router.get('/', function (req, res) {
    ;
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
})

// GET method route for the events page.
// It serves contacts.html present in client folder
router.get('/contacts', function (req, res) {
    //Add Details
    if (req.session.user) {
        res.sendFile(path.join(__dirname, '..', 'public/contacts.html'));
    } else {
        res.redirect(302, '/login');
    }
});

module.exports = router;