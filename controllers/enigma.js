var enigma = require('../models').enigma;

function index (req, res) {
	enigma.findAll().then((enigmas) => {
		let find = false;
		for (var i = 0; i < enigmas.length; i++) {
			// find object
			var fn = module.exports[enigmas[i].type];
			// is object a function?
			if (typeof fn === 'function' && req.url === '/' + enigmas[i].url && req.method === 'GET') {
				find = true;
				fn(req, res, enigmas[i]);
			}
		}
		if (!find) {
			res.status(404).send('404 page not found ');
		}
	});
}

function flag (req, res, e) {
	res.render('partials/flag', e.getInfo);
}

function geo (req, res, e) {
	res.render('partials/geo', e.getInfo);
}
// export function
module.exports = {
	flag: flag,
	geo: geo,
	index: index
};
