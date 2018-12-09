const app = module.exports = require('express')();
let enigmaController = require('../controllers/enigma');

/* GET home page. */
app.get('/', function (req, res, next) {
	res.render('partials/index', {});
});

app.all('*', enigmaController.index);
