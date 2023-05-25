const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index')
var animalesRouter = require('./routes/animales')
var especiesRouter = require('./routes/especies')
var lugaresRouter = require('./routes/lugares')
var especiesXMLRouter = require('./routes/especiesXML')

app.use('/', indexRouter);
app.use('/animales', animalesRouter);
app.use('/especies', especiesRouter);
app.use('/lugares', lugaresRouter);
app.use('/especiesXML', especiesXMLRouter);
app.use('/lugares', lugaresRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

module.exports = app;