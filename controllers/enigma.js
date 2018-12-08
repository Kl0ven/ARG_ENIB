var enigma = require('../models').enigma;

function index (req, res) {
	enigma.findAll().then((enigmas) => {
		let find = false;
		for (var i = 0; i < enigmas.length; i++) {
			// find object
			var fn = module.exports[enigmas[i].type];
			// is object a function?
			if (typeof fn === 'function' && req.url === '/'+enigmas[i].url && req.method === 'GET') {
				find = true;
				fn(req, res);
			}
		}
		if (!find) {
			res.status(404).send('404 page not found ');
		}
	});
}

function flag (req, res) {
	res.send('flag');
}

function geo (req, res) {
	res.send('geo');
}
// export function
module.exports = {
	flag: flag,
	geo: geo,
	index: index
};
