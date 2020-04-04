const config = require('./config/config');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const hbs = require('express-handlebars');
const Router = require('./routes/index');
const obfuscator = require('./utils/obfuscator');
const helmet = require('helmet');
const user = require('./models').user;
const flash = require('connect-flash');
const db = require('./models').sequelize;
const robots = require('express-robots-txt');
const schedule = require('node-schedule');
const deleteACI = require('./utils/deleteAntiCheatId');
const app = express();

// protection against various attack vector
app.use(helmet());

function requireHTTPS (req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && config.env !== 'development') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

// force https
app.use(requireHTTPS);

// robots.txt
app.use(robots({ UserAgent: '*', Disallow: '/' }));

// session initilization
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// sequlize db for session id
const myStore = new SequelizeStore({
    db: db
});

// session secret
app.use(session({
    secret: 'Arg_Enib',
    store: myStore,
    resave: true,
    saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

require('./config/passport')(passport, user);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '/views/layouts/'),
    partialsDir: [path.join(__dirname, '/views/partials/'), path.join(__dirname, '/views/enigma/')]
}));
app.set('view engine', 'hbs');

// delete AntiCheatId older than 12 hours every 2 hours
schedule.scheduleJob('* */2 * * *', deleteACI);
// use flash message
app.use(flash());

// if on production
if (config.env !== 'development') {
    console.log('using minify');
    app.enable('trust proxy');
    app.use(obfuscator({
        src: `${__dirname}/public/`,
        version: 'prod'
    }));
} else {
    app.use(logger('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// setting static path
app.use(express.static(path.join(__dirname, 'public')));

// setting up routes using limiter
app.use(Router);

module.exports = app;
