var enigma = require('../models').enigma;
var antiCheatId = require('../models').antiCheatId;
// var winner = require('../models').winner;

function index (req, res) {
	let dataEnigma = [];
	enigma.findAll({order: ['id']}).then(e => {
		for (var i = 0; i < e.length; i++) {
			dataEnigma.push({
				name: e[i].name,
				id: e[i].id,
				first_time_visited: e[i].first_time_visited != null ? e[i].first_time_visited.toLocaleDateString('fr-FR') + ' ' + e[i].first_time_visited.toLocaleTimeString() : '-',
				remaining: e[i].time_before_hint,
				hold_update: e[i].first_time_visited == null || e[i].time_before_hint.remaining === 0,
				symbole: e[i].first_time_visited == null ? '-' : 'Done'
			});
		}
		antiCheatId.count().then(c => {
			res.render('analytics', {enigmas: dataEnigma, pending: c, layout: false});
		}).catch(e => {
			sendErr(req, res, e);
		});
	}).catch(e => {
		sendErr(req, res, e);
	});
}

function sendErr (req, res, err) {
	console.log(err);
	res.status(418).send('oupsie');
}

// export function
module.exports = {
	index: index
};
