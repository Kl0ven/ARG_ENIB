const app = module.exports = require('express')();
let enigmaController = require('../controllers/enigma');
let winnerController = require('../controllers/winner');
let argController = require('../controllers/arg');

/* GET home page. */
app.get('/', enigmaController.index);

app.post('/verify', enigmaController.verify);

app.post('/savewinner', winnerController.saveWinner);

app.get('/E8FA58F5583E9B42D382255A72AC3BE99BDA351D142D90DE62FED0465FD637C6609AA2DD79AE8DB1B68E65CA3DBEFFF39CE7703F204005B1A5D94FC194D8DD51', enigmaController.endPage);

app.get('/503297AB82C66970C90EA68C336AD24537C580CF4BE1C39750E25E71E8AE218D48510C0166ED4AEB55BD3DC07E8E5BDCD58DDCFF9CEBD9830C629E3796633D20', argController.index);

app.post('/CDDB32DBE1A524A9501D5446B29523B16CCA8D9B0700749B5C645AB63C0C0112E93CA8FC50D5EE35045D7896ED9595B0F2A23033077D375A12214CFF15FDBB38', argController.resestAntiCheatId);
app.all('*', enigmaController.enigmaIndex);
