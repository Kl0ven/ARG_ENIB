var enigma = require('../models').enigma;

function enigmaIndex (req, res) {
	enigma.findAll().then((enigmas) => {
		let find = false;
		for (var i = 0; i < enigmas.length; i++) {
			// find object
			var fn = module.exports[enigmas[i].type];
			// is object a function?
			if (typeof fn === 'function' && req.url === '/' + enigmas[i].url && req.method === 'GET') {
				find = true;
				if (enigmas[i].fist_time_visited == null) {
					enigmas[i].fist_time_visited = Date.now();
					enigmas[i].save();
				}
				fn(req, res, enigmas[i]);
				break;
			}
		}
		if (!find) {
			res.status(404).send('404 page not found ');
		}
	});
}
function index (req, res, next) {
	res.render('partials/index', {});
}
function flag (req, res, e) {
	res.render('partials/flag', e.getInfo);
}

function geo (req, res, e) {
	res.render('partials/geo', e.getInfo);
}

function verify (req, res) {
	// console.log(req.body.url);
}
// export function
module.exports = {
	index: index,
	flag: flag,
	geo: geo,
	verify: verify,
	enigmaIndex: enigmaIndex
};
