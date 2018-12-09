const app = module.exports = require('express')();
let enigmaController = require('../controllers/enigma');

/* GET home page. */
app.get('/', enigmaController.index);

app.post('/verify', enigmaController.verify);

app.all('*', enigmaController.enigmaIndex);
