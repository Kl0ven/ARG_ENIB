const app = module.exports = require('express')();
const enigmaController = require('../controllers/enigma');
const winnerController = require('../controllers/winner');
const argController = require('../controllers/arg');
const authController = require('../controllers/authController');
const config = require('../config/config');
const rateLimit = require('express-rate-limit');
const isLoggedIn = require('../utils/auth');
const passport = require('passport');
const limiter = rateLimit(Object.assign(config.limiter, {message: config.limitMessage}));

/* GET home page. */
app.get('/', limiter, enigmaController.index);

// requet to verify anwser
app.post('/verify', limiter, enigmaController.verify);

// request to save winner
app.post('/savewinner', limiter, winnerController.saveWinner);

// endpage
app.get('/E8FA58F5583E9B42D382255A72AC3BE99BDA351D142D90DE62FED0465FD637C6609AA2DD79AE8DB1B68E65CA3DBEFFF39CE7703F204005B1A5D94FC194D8DD51', limiter, enigmaController.endPage);

// sign in
app.get('/455F388DFF873BF190F6EB28241FC340C50FBDDF292361AAC0F40B29D18EB574DA76D7ACF61469EF799CE3A9B3590F3AD829612220DA9A79C72C17FBA2B91314', limiter, authController.signin);

app.post('/signin', passport.authenticate('local-signin', {
	successRedirect: '/503297AB82C66970C90EA68C336AD24537C580CF4BE1C39750E25E71E8AE218D48510C0166ED4AEB55BD3DC07E8E5BDCD58DDCFF9CEBD9830C629E3796633D20',
	failureRedirect: '/455F388DFF873BF190F6EB28241FC340C50FBDDF292361AAC0F40B29D18EB574DA76D7ACF61469EF799CE3A9B3590F3AD829612220DA9A79C72C17FBA2B91314',
	failureFlash: true
}
));

if (config.env === 'development') {
	app.get('/signup', authController.signup);

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/503297AB82C66970C90EA68C336AD24537C580CF4BE1C39750E25E71E8AE218D48510C0166ED4AEB55BD3DC07E8E5BDCD58DDCFF9CEBD9830C629E3796633D20',
		failureRedirect: '/signup',
		failureFlash: true
	}
));
}
// logout
app.get('/logout', authController.logout);

// analytic
app.get('/503297AB82C66970C90EA68C336AD24537C580CF4BE1C39750E25E71E8AE218D48510C0166ED4AEB55BD3DC07E8E5BDCD58DDCFF9CEBD9830C629E3796633D20', limiter, isLoggedIn, argController.index);

// request reset AntiCheatId
app.post('/CDDB32DBE1A524A9501D5446B29523B16CCA8D9B0700749B5C645AB63C0C0112E93CA8FC50D5EE35045D7896ED9595B0F2A23033077D375A12214CFF15FDBB38', limiter, isLoggedIn, argController.resestAntiCheatId);

// request info on enigma
app.post('/E349C2FE2560FBBD0EC052DDF37F91BC0C26C3B209FBC9D2FE62C818BD4BFABD6372EE5253A17F91FE834D0F5B50663F2650F71EB45EF3FB14B7EE9F88B117BD', limiter, isLoggedIn, argController.getInfos);

// enigmas or 404
app.all('*', limiter, enigmaController.enigmaIndex);
