// Include the express module
const express = require("express");

// Path module - provides utilities for working with file and directory paths.
const path = require('path');

const port = 9002;

// create an express application
const app = express();

var utilities = require('./api/utilities.js');
var navigation = require('./api/navigation.js');

// middle ware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// server listens on port 9002 for incoming connections
app.listen(process.env.PORT || port, () => console.log('Listening...'));

app.use('/', navigation);

app.use('/api', utilities);

// function to return the 404 message and error to client
/*app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render('error');
    res.send();
});*/