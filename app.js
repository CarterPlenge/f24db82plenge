var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var Boat = require("./models/boat");

// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
  await Boat.deleteMany();
  let instance1 = new
  Boat({Type:"Sail", width:10, height:15, length:35});
  instance1.save()
    .then(doc=>{ console.log("First object saved")})
    .catch(err=>{console.error(err)});

  let instance2 = new
  Boat({Type:"Row", width:3, height:3, length:12});
  instance2.save()
    .then(doc=>{ console.log("Second object saved")})
    .catch(err=>{console.error(err)});

  let instance3 = new
  Boat({Type:"Fishing", width:5, height:4, length:16});
  instance3.save()
    .then(doc=>{ console.log("Third object saved")})
    .catch(err=>{console.error(err)});
}

let reseed = true;
if (reseed) {recreateDB();}

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boatRouter = require('./routes/boat');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');
var boatRoutes = require('./routes/boat');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/boats', boatRouter);
app.use('/grid', gridRouter);
app.use('/selector', pickRouter);
app.use('/resource', resourceRouter);
app.use('/boats', boatRoutes);

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
