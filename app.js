var minify = require('express-minify');
var uglifyEs = require('uglify-es');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');

var Router = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({
	extname: 'hbs',
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, '/views/layouts/'),
	partialsDir: path.join(__dirname, '/views/partials/')
}));
app.set('view engine', 'hbs');

if (process.env.NODE_ENV === 'production') {
	app.use(minify({
		uglifyJsModule: uglifyEs
	}));
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(Router);
module.exports = app;
