
function signin (req, res) {
    res.render('signin', { layout: false, message: req.flash('error') });
}

function signup (req, res) {
    res.render('signup', { layout: false, message: req.flash('error') });
}

function logout (req, res) {
    req.session.destroy(function (err) {
        console.log(err);
        res.redirect('/');
    });
}
// export function
module.exports = {
    signin: signin,
    signup: signup,
    logout: logout
};
