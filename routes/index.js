const app = module.exports = require('express')();
let enigmaController = require('../controllers/enigma');
let winnerController = require('../controllers/winner');

/* GET home page. */
app.get('/', enigmaController.index);

app.post('/verify', enigmaController.verify);

app.post('/savewinner', winnerController.saveWinner);

app.get('/E8FA58F5583E9B42D382255A72AC3BE99BDA351D142D90DE62FED0465FD637C6609AA2DD79AE8DB1B68E65CA3DBEFFF39CE7703F204005B1A5D94FC194D8DD51', enigmaController.endPage);

app.all('*', enigmaController.enigmaIndex);
