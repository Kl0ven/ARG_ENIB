
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');
var Router = require('./routes/index');
const obfuscator = require('./utils/obfuscator');
const config = require('./config');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({
	extname: 'hbs',
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, '/views/layouts/'),
	partialsDir: [path.join(__dirname, '/views/partials/'), path.join(__dirname, '/views/enigma/')]
}));
app.set('view engine', 'hbs');

if (config.env !== 'development') {
	console.log('using minify');

	app.use(obfuscator({
		src: `${__dirname}/public/`,
		version: 'prod'
	}));
}
console.log(`${__dirname}/public`);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(Router);
module.exports = app;
