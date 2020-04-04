const enigma = require('../models').enigma;
const winner = require('../models').winner;
const antiCheatId = require('../models').antiCheatId;
const sendErr = require('../utils/error');

function saveWinner (req, res) {
    antiCheatId.findOne({
        where: { id: req.body.idunique }
    }).then(aci => {
        if (aci == null) {
            sendErr(req, res, 'no result found in saveWinner function');
        } else {
            aci.destroy({ force: true }).then(() => {
                enigma.findOne({
                    where: { url: req.body.url.substring(1) }
                }).then(e => {
                    winner.create({ name: req.body.winnername, date: Date.now() }).then(w => {
                        e.addWinners(w).then(() => {
                            res.send({ name: req.body.winnername });
                        }).catch(err => {
                            sendErr(req, res, err);
                        });
                    }).catch(err => {
                        sendErr(req, res, err);
                    });
                }).catch(err => {
                    sendErr(req, res, err);
                });
            });
        }
    }).catch(err => {
        sendErr(req, res, err);
    });
}

// export function
module.exports = {
    saveWinner: saveWinner
};
