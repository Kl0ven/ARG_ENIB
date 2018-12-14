var enigma = require('../models').enigma;
var antiCheatId = require('../models').antiCheatId;
const isInRectangle = require('../utils/geo').isInRectangle;
const hash = require('../utils/hash');

// this function catch every routes
function enigmaIndex (req, res) {
	// request every enigma to see if match exist
	enigma.findAll().then((enigmas) => {
		let find = false;
		// seeking for the good url
		for (var i = 0; i < enigmas.length; i++) {
			// url found
			if (req.url === '/' + enigmas[i].url && req.method === 'GET') {
				find = true;
				// setting up first time visited variable
				if (enigmas[i].fist_time_visited == null) {
					enigmas[i].fist_time_visited = Date.now();
					enigmas[i].save();
				}
				// render page
				res.render('enigma/' + enigmas[i].custom_html, enigmas[i].getInfo);
				break;
			}
		}
		// if not found retrun 404
		if (!find) {
			res.status(404).render('404', {layout: false});
		}
	});
}

// this function is use to render the main page
function index (req, res, next) {
	res.render('partials/index', {});
}

// this function is use to verify the enigma if it find is it's call
// a special function for the type of enigma
function verify (req, res) {
	console.log(req.body.url.substring(1));
	enigma.findOne({
		where: {url: req.body.url.substring(1)}
	}).then(e => {
		if (e == null) {
			sendErr(req, res, 'no result found in verify function');
		} else {
			var fn = module.exports[e.type + 'Verify'];
			// is object a function?
			if (typeof fn === 'function') {
				// call the specific verify function
				if (fn(req, res, e)) {
					e.getNext().then(nextEnigma => {
						if (nextEnigma != null) {
							let t = new Date().toLocaleTimeString();
							let id = hash(t + e.url);
							antiCheatId.create({id: id}).then(aci => {
								res.send({status: 1, text: e.end_text, url: nextEnigma.url, id: id});
							}).catch(err => {
								sendErr(req, res, err);
							})
						}
					}).catch(err => {
						sendErr(req, res, err);
					});
				} else {
					res.send({status: 0});
				}
			}
		}
	}).catch(err => {
		sendErr(req, res, err);
	});
}

// this function verify a flag typed enigma
function flagVerify (req, res, e) {
	return e.flag === req.body.flag;
}

// this function verify a geo typed enigma
function geoVerify (req, res, e) {
	return isInRectangle(e.latA, e.longA, e.latB, e.longB, req.body.Latitude, req.body.Longitude);
}

function sendErr (req, res, err) {
	console.log(err);
	res.status(418).send('oupsie');
}

// export function
module.exports = {
	index: index,
	verify: verify,
	flagVerify: flagVerify,
	geoVerify: geoVerify,
	enigmaIndex: enigmaIndex
};
