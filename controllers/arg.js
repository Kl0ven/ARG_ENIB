const enigma = require('../models').enigma;
const antiCheatId = require('../models').antiCheatId;
const winner = require('../models').winner;
const session = require('../models').Session;
const Op = require('../models').Sequelize.Op;
const sendErr = require('../utils/error');

function index (req, res) {
	let dataEnigma = [];
	let dataWinner = [];
	enigma.findAll({order: ['id']}).then(e => {
		for (var i = 0; i < e.length; i++) {
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
				winner.findAll({order: ['enigma_id', 'date']}).then(w => {
					for (var i = 0; i < w.length; i++) {
						dataWinner.push({
							id_enigma: w[i].enigma_id,
							name: w[i].name,
							date: w[i].date
						});
					}
					res.render('analytics', {enigmas: dataEnigma, winners: dataWinner, pending: c, session: d, layout: false});
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

function resestAntiCheatId (req, res) {
	antiCheatId.destroy({
		where: {
			created_at: {[Op.lt]: new Date(new Date() - 1 * 60 * 60 * 1000)}
		}
	}).then(() => {
		antiCheatId.count().then(c => {
			res.send({status: true, count: c});
		}).catch(e => {
			sendErr(req, res, e);
		});
	}).catch(e => {
		sendErr(req, res, e);
	});
}

function getinfos (req, res) {
	console.log(req.body);
	res.send({status: false});
}
// export function
module.exports = {
	index: index,
	resestAntiCheatId: resestAntiCheatId,
	getinfos: getinfos
};
