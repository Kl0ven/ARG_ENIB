module.exports = function sendErr (req, res, err) {
    console.log(err);
    res.status(418).render('error', { layout: false });
};
