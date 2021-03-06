const enigma = require('../models').enigma;
const antiCheatId = require('../models').antiCheatId;
const isInRectangle = require('../utils/geo').isInRectangle;
const hash = require('../utils/hash');
const config = require('../config/config');
const math = require('mathjs');
const sendErr = require('../utils/error');

// this function catch every routes
function enigmaIndex (req, res) {
    // request every enigma to see if match exist
    enigma.findAll().then(enigmas => {
        let find = false;
        // seeking for the good url
        for (let i = 0; i < enigmas.length; i++) {
            // url found
            if (req.url === '/' + enigmas[i].url && req.method === 'GET') {
                find = true;
                // setting up first time visited variable
                if (enigmas[i].first_time_visited == null) {
                    enigmas[i].first_time_visited = Date.now();
                    enigmas[i].save();
                }
                // render page
                res.render('enigma/' + enigmas[i].custom_html, Object.assign(enigmas[i].getInfo, {
                    useAntiDebug: config.env !== 'development'
                }));
                break;
            }
        }
        // if not found retrun 404
        if (!find) {
            res.status(404).render('404', { layout: false });
        }
    });
}

// this function is use to render the main page
function index (req, res, next) {
    res.render('partials/index', { number: 0 });
}

// this function is use to verify the enigma if it find is it's call
// a special function for the type of enigma
function verify (req, res) {
    enigma.findOne({
        where: { url: req.body.url.substring(1) }
    }).then(e => {
        if (e == null) {
            sendErr(req, res, 'no result found in verify function');
        } else {
            const fn = module.exports[e.type + 'Verify'];
            // is object a function?
            if (typeof fn === 'function') {
                // call the specific verify function
                if (fn(req, res, e)) {
                    e.getNext().then(nextEnigma => {
                        if (nextEnigma != null) {
                            const t = new Date().toLocaleTimeString();
                            const id = hash(t + e.url);
                            antiCheatId.create({ id: id }).then(aci => {
                                res.send({ status: 1, text: e.end_text, url: nextEnigma.url, id: id });
                            }).catch(err => {
                                sendErr(req, res, err);
                            });
                        } else {
                            const t = new Date().toLocaleTimeString();
                            const id = hash(t + e.url);
                            antiCheatId.create({ id: id }).then(aci => {
                                res.send({
                                    status: 1,
                                    text: e.end_text,
                                    // eslint-disable-next-line max-len
                                    url: `3235385FE0FF3A081A579BFE8A4A6F1EBB1E732D014076748879B34AFAC8061B307B868ECA06CD814ED7D904E222B91F42666101B926D4EDBA95EF62065DAC67`,
                                    id: id
                                });
                            }).catch(err => {
                                sendErr(req, res, err);
                            });
                        }
                    }).catch(err => {
                        sendErr(req, res, err);
                    });
                } else {
                    res.send({ status: 0 });
                }
            }
        }
    }).catch(err => {
        sendErr(req, res, err);
    });
}

// this function verify a flag typed enigma
function flagVerify (req, res, e) {
    return e.flag.toLowerCase() === req.body.flag.toLowerCase();
}

// this function verify a geo typed enigma
function geoVerify (req, res, e) {
    return isInRectangle(e.latA, e.longA, e.latB, e.longB, req.body.Latitude, req.body.Longitude);
}

// this function verify a eval typed enigma
function evalVerify (req, res, e) {
    let v;
    try {
        v = math.eval(req.body.evalequation);
    } catch (error) {
        // console.error(error);
        return false;
    }
    if (v === parseInt(e.flag)) {
        const cara = e.caracters.sort(function (a, b) {
            return b.length - a.length;
        });
        let string = req.body.evalequation;
        for (const c in cara) {
            if (string.includes(cara[c])) {
                string = string.replace(cara[c], '');
            } else {
                return false;
            }
        }
        if (string === '') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function endPage (req, res) {
    res.render('partials/endPage', { number: 14 });
}
// export function
module.exports = {
    index: index,
    verify: verify,
    flagVerify: flagVerify,
    geoVerify: geoVerify,
    endPage: endPage,
    evalVerify: evalVerify,
    enigmaIndex: enigmaIndex
};
