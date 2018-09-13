var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');


var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var restaurantsRouter = require('./routes/restaurants');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 9000);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(session({ resave: true,
    saveUninitialized: true,
    secret: 'uwotm8' }));


app.post('/login', loginRouter.PostLogin);
app.get('/logout', loginRouter.getLogout);
app.post('/signup', signupRouter.signup);
app.get('/getRestaurants', restaurantsRouter.fetchRestaurants);

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

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
