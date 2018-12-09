const Enigma = require('../models').enigma;
// const Winner = require('../models').winner;
let sequelize = require('../models').sequelize;

function display () {
	return Enigma.findAll().then(data => {
		for (var e in data) {
			console.log(data[e].dataValues);
			if (data[e].dataValues.fist_time_visited != null) {
				console.log('first_time_visited in france = ' + data[e].dataValues.fist_time_visited.toLocaleDateString('fr-FR') + ' ' + data[e].dataValues.fist_time_visited.toLocaleTimeString());
			}
		}
		sequelize.close();
	});
}

display();
