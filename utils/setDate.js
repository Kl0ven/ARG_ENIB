const Enigma = require('../models').enigma;
// const Winner = require('../models').winner;
let sequelize = require('../models').sequelize;

function display () {
	return Enigma.findAll({
		order: ['id']
	}).then(data => {
		let p = [];
		for (var e in data) {
			// console.log(data[e].dataValues);
			let today = new Date(Date.now());
			data[e].first_time_visited = new Date(today.setDate(today.getDate() - 3));
			p.push(data[e].save());
			if (data[e].dataValues.first_time_visited != null) {
				console.log('first_time_visited in france = ' + data[e].dataValues.first_time_visited.toLocaleDateString('fr-FR') + ' ' + data[e].dataValues.first_time_visited.toLocaleTimeString());
			}
		}
		Promise.all(p).then(function () {
			sequelize.close();
		});
	});
}

display();
