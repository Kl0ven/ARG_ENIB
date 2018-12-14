const app = module.exports = require('express')();
let enigmaController = require('../controllers/enigma');
let winnerController = require('../controllers/winner');

/* GET home page. */
app.get('/', enigmaController.index);

app.post('/verify', enigmaController.verify);

app.post('/savewinner', winnerController.saveWinner);

app.all('*', enigmaController.enigmaIndex);
