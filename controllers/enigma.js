var enigma = require('../models').enigma;

function enigmaIndex (req, res) {
	enigma.findAll().then((enigmas) => {
		let find = false;
		for (var i = 0; i < enigmas.length; i++) {
			if (req.url === '/' + enigmas[i].url && req.method === 'GET') {
				find = true;
				if (enigmas[i].fist_time_visited == null) {
					enigmas[i].fist_time_visited = Date.now();
					enigmas[i].save();
				}
				res.render('partials/' + enigmas[i].type, enigmas[i].getInfo);
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

function verify (req, res) {
	// console.log(req.body.url);
}
// export function
module.exports = {
	index: index,
	verify: verify,
	enigmaIndex: enigmaIndex
};
