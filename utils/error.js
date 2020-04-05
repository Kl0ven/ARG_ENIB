module.exports = function sendErr (req, res, err) {
    console.error(err);
    res.status(418).render('error', { layout: false });
};
