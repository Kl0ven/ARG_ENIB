/* eslint max-len: ["error", { "code": 300 }] */
function isLoggedIn (req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/455F388DFF873BF190F6EB28241FC340C50FBDDF292361AAC0F40B29D18EB574DA76D7ACF61469EF799CE3A9B3590F3AD829612220DA9A79C72C17FBA2B91314');
}
module.exports = isLoggedIn;
