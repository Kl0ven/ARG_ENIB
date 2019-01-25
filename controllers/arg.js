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
					let firstId = 1;
					let tmp = [];
					for (var i = 0; i < w.length; i++) {
						if (w[i].enigma_id !== firstId) {
							dataWinner.push({list: tmp, length: tmp.length, enigma_id: firstId});
							tmp = [];
							firstId = w[i].enigma_id;
						}
						tmp.push({
							id_enigma: w[i].enigma_id,
							name: w[i].name,
							date: w[i].date
						});
					}
					console.log(dataWinner);
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

function getInfos (req, res) {
	enigma.findOne({
		where: {id: req.body.id}
	}).then(e => {
		res.send(Object.assign({status: true}, e.getInfoModif));
	}).catch(e => {
		sendErr(req, res, e);
	});
}

function saveInfos (req, res) {
	enigma.findOne({
		where: {id: req.body.id}
	}).then(e => {
		let keyWordExclude = ['id', 'type'];
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
		for (var key in req.body) {
			if (keyWordExclude.indexOf(key) === -1) {
				if (req.body.hasOwnProperty(key)) {
					e[key] = req.body[key];
				}
			}
		}
		e.save().then(() => {
			res.send({status: true});
		}).catch((e) => {
			console.log('error in saveInfos while saving ', e);
			res.send({status: false});
		});
	}).catch(e => {
		console.log('error in saveInfos while querying', e);
		res.send({status: false});
	});
}

function getData (req, res) {
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
					let firstId = 1;
					let tmp = [];
					for (var i = 0; i < w.length; i++) {
						if (w[i].enigma_id !== firstId) {
							dataWinner.push({list: tmp, length: tmp.length, enigma_id: firstId});
							tmp = [];
							firstId = w[i].enigma_id;
						}
						tmp.push({
							id_enigma: w[i].enigma_id,
							name: w[i].name,
							date: w[i].date
						});
					}
					console.log(dataWinner);
					res.send({enigmas: dataEnigma, winners: dataWinner, pending: c, session: d});
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
