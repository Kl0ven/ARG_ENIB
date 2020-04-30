/* eslint max-len: ["error", { "code": 300 }] */
const app = module.exports = require('express')();
const enigmaController = require('../controllers/enigma');
const winnerController = require('../controllers/winner');
const argController = require('../controllers/arg');
const authController = require('../controllers/authController');
const config = require('../config/config');
const rateLimit = require('express-rate-limit');
const isLoggedIn = require('../utils/auth');
const passport = require('passport');
const limiter = rateLimit(Object.assign(config.limiter, { message: config.limitMessage }));

/* GET home page. */
app.get('/abcdefghijklmnopqrstu', limiter, enigmaController.index);

// requet to verify anwser
app.post('/verify', limiter, enigmaController.verify);

// request to save winner
app.post('/savewinner', limiter, winnerController.saveWinner);

// endpage
app.get('/3235385FE0FF3A081A579BFE8A4A6F1EBB1E732D014076748879B34AFAC8061B307B868ECA06CD814ED7D904E222B91F42666101B926D4EDBA95EF62065DAC67', limiter, enigmaController.endPage);

// sign in
app.get('/C4D814047712D944D86E786E9C93AE32672447AFE98220A8941109A3A87375E74F469CC5F4AA418E0A34BEB2E101F7FB367CAEE85BA288F3D77D285278E3C1AF', limiter, authController.signin);

app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/AECEC2A895196E561BEB44F935906315385F80DA128AE24269D8D2BBBCD0EEA4C7CDC065DB742C205145B58297A09A893547EADECA57634D07B7C345E3C47C93',
    failureRedirect: '/C4D814047712D944D86E786E9C93AE32672447AFE98220A8941109A3A87375E74F469CC5F4AA418E0A34BEB2E101F7FB367CAEE85BA288F3D77D285278E3C1AF',
    failureFlash: true
}
));

if (config.env === 'development') {
    app.get('/signup', authController.signup);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/AECEC2A895196E561BEB44F935906315385F80DA128AE24269D8D2BBBCD0EEA4C7CDC065DB742C205145B58297A09A893547EADECA57634D07B7C345E3C47C93',
        failureRedirect: '/signup',
        failureFlash: true
    }
    ));
}
// logout
app.get('/logout', authController.logout);

// analytic
app.get('/AECEC2A895196E561BEB44F935906315385F80DA128AE24269D8D2BBBCD0EEA4C7CDC065DB742C205145B58297A09A893547EADECA57634D07B7C345E3C47C93', limiter, isLoggedIn, argController.index);

// get analytics data
app.post('/DDC9EBAFBA3732B5CFC7DC252D39B9376101FE1C41F3309425F1490C0EF39694F154AE566E710DB990A47FDCF9523DAB6C8EC815538822AF1645776DFF4E1249', isLoggedIn, argController.getData);

// request info on enigma
app.post('/8E49843C86D4D2FE203B91B72460F13505E12BE3E4DF73E0104394FD89A5E54460BD25F9C0EF1EA4716E6D883278F4A70B15F77FAF0604DB11011153B7DC728A', limiter, isLoggedIn, argController.getInfos);

// save info on enigma
app.post('/30AA27976AC1E6883B0D70EA9F8B15135697940A6F86EF7204FC73E1654484AAF5F5A8A9F20FCE5D26BAA5102E1EE96D19FE69DFB812E6A226BEFCC7C55721DF', limiter, isLoggedIn, argController.saveInfos);

// enigmas or 404
app.all('*', limiter, enigmaController.enigmaIndex);
