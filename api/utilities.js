const express = require('express')
const router = express.Router()
const bodyparser = require('body-parser');

const urlEncodedParser = bodyparser.urlencoded({extended: false});


var utils = require('./utils.js');

// GET method to return the list of events
// The function queries the tbl_events table for the list of events and sends the response back to client
router.post('/punnify', urlEncodedParser, function (req, res) {
    var inputText = req.body.sentence; //"The quick brown fox jumped over the lazy dog!";
    var ipa = utils.convertToIPA(inputText);
    var replaced = utils.replacePuns(ipa);
    var result = utils.convertToText(replaced);
    console.log("Result is:",result);
    res.json({
        'result': result
    });
});

// POST method to insert details of a new event to tbl_events table
router.post('/contact', urlEncodedParser, function (req, res) {
			
});

module.exports = router;