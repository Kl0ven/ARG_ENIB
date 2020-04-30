/* eslint max-len: ["error", { "code": 300 }] */
function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/C4D814047712D944D86E786E9C93AE32672447AFE98220A8941109A3A87375E74F469CC5F4AA418E0A34BEB2E101F7FB367CAEE85BA288F3D77D285278E3C1AF');
}
module.exports = isLoggedIn;
