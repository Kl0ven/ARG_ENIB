const enigma = require('../models').enigma;
const antiCheatId = require('../models').antiCheatId;
const winner = require('../models').winner;
const session = require('../models').Session;
const sendErr = require('../utils/error');

function index (req, res) {
    const dataEnigma = [];
    const dataWinner = [];
    enigma.findAll({ order: ['id'] }).then(e => {
        for (let i = 0; i < e.length; i++) {
            dataEnigma.push({
                name: e[i].name,
                id: e[i].id,
                first_time_visited: e[i].first_time_visited != null ? e[i].first_time_visited : '-',
                first_time_visited_null: e[i].first_time_visited == null,
                remaining: e[i].time_before_hint,
                hold_update: e[i].first_time_visited == null || e[i].time_before_hint.remaining === 0,
                symbole: e[i].first_time_visited == null ? '-' : 'Done'
            });
        }
        session.count().then(d => {
            antiCheatId.count().then(c => {
                winner.findAll({ order: ['enigma_id', 'date'] }).then(w => {
                    let firstId = 1;
                    let tmp = [];
                    for (let i = 0; i < w.length; i++) {
                        if (w[i].enigma_id !== firstId) {
                            if (tmp.length !== 0) {
                                dataWinner.push({
                                    list: tmp,
                                    length: tmp.length,
                                    rid: firstId - 1,
                                    enigma_id: firstId
                                });
                            }
                            tmp = [];
                            firstId = w[i].enigma_id;
                        }
                        tmp.push({
                            id_enigma: w[i].enigma_id,
                            name: w[i].name,
                            date: w[i].date
                        });
                    }
                    if (tmp.length !== 0) {
                        dataWinner.push({
                            list: tmp,
                            length: tmp.length,
                            rid: firstId - 1,
                            enigma_id: firstId
                        });
                    }
                    res.render('analytics', {
                        enigmas: dataEnigma,
                        winners: dataWinner,
                        pending: c,
                        session: d,
                        layout: false
                    });
                }).catch(e => {
                    sendErr(req, res, e);
                });
            }).catch(e => {
                sendErr(req, res, e);
            });
        }).catch(e => {
            sendErr(req, res, e);
        });
    }).catch(e => {
        sendErr(req, res, e);
    });
}

function getInfos (req, res) {
    enigma.findOne({
        where: { id: req.body.id }
    }).then(e => {
        res.send(Object.assign({ status: true }, e.getInfoModif));
    }).catch(e => {
        sendErr(req, res, e);
    });
}

function saveInfos (req, res) {
    enigma.findOne({
        where: { id: req.body.id }
    }).then(e => {
        const keyWordExclude = ['id', 'type'];
        if (req.body.type === 'geo') {
            keyWordExclude.push('flag');
        } else if (req.body.type === 'flag') {
            keyWordExclude.push('latA');
            keyWordExclude.push('longA');
            keyWordExclude.push('latB');
            keyWordExclude.push('longB');
        } else {
            keyWordExclude.push('flag');
            keyWordExclude.push('latA');
            keyWordExclude.push('longA');
            keyWordExclude.push('latB');
            keyWordExclude.push('longB');
        }
        for (const key in req.body) {
            if (keyWordExclude.indexOf(key) === -1) {
                if (req.body.hasOwnProperty(key)) {
                    e[key] = req.body[key];
                }
            }
        }
        e.save().then(() => {
            res.send({ status: true });
        }).catch(e => {
            console.error('error in saveInfos while saving ', e);
            res.send({ status: false });
        });
    }).catch(e => {
        console.error('error in saveInfos while querying', e);
        res.send({ status: false });
    });
}

function getData (req, res) {
    const dataEnigma = [];
    const dataWinner = [];
    enigma.findAll({ order: ['id'] }).then(e => {
        for (let i = 0; i < e.length; i++) {
            dataEnigma.push({
                name: e[i].name,
                id: e[i].id,
                first_time_visited: e[i].first_time_visited != null ? e[i].first_time_visited : '-',
                first_time_visited_null: e[i].first_time_visited == null,
                remaining: e[i].time_before_hint,
                hold_update: e[i].first_time_visited == null || e[i].time_before_hint.remaining === 0,
                symbole: e[i].first_time_visited == null ? '-' : 'Done'
            });
        }
        session.count().then(d => {
            antiCheatId.count().then(c => {
                winner.findAll({ order: ['enigma_id', 'date'] }).then(w => {
                    let firstId = 1;
                    let tmp = [];
                    for (let i = 0; i < w.length; i++) {
                        if (w[i].enigma_id !== firstId) {
                            if (tmp.length !== 0) {
                                dataWinner.push({
                                    list: tmp,
                                    length: tmp.length,
                                    rid: firstId - 1,
                                    enigma_id: firstId
                                });
                            }
                            tmp = [];
                            firstId = w[i].enigma_id;
                        }
                        tmp.push({
                            id_enigma: w[i].enigma_id,
                            name: w[i].name,
                            date: w[i].date
                        });
                    }
                    if (tmp.length !== 0) {
                        dataWinner.push({
                            list: tmp,
                            length: tmp.length,
                            rid: firstId - 1,
                            enigma_id: firstId
                        });
                    }
                    res.send({ enigmas: dataEnigma, winners: dataWinner, pending: c, session: d });
                }).catch(e => {
                    sendErr(req, res, e);
                });
            }).catch(e => {
                sendErr(req, res, e);
            });
        }).catch(e => {
            sendErr(req, res, e);
        });
    }).catch(e => {
        sendErr(req, res, e);
    });
}
// export function
module.exports = {
    index: index,
    getInfos: getInfos,
    saveInfos: saveInfos,
    getData: getData
};
