//ctrl d, alt 커서
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//라우트 폴더에서 끌어오는 과정
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//express 시작
const app = express();

// view engine setup
//set = 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//use = middleware 사용
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

//app: express를 담고, middleware를 사용한 상태
module.exports = app;
