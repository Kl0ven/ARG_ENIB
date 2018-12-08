const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
	var Enigma = sequelize.define('enigma', {
		name: { type: Sequelize.STRING, allowNull: false },
		enigma_text: { type: Sequelize.STRING, allowNull: false },
		url: { type: Sequelize.STRING, allowNull: false },
		type: Sequelize.ENUM('GEO', 'FLAG'),
		latA: Sequelize.FLOAT,
		longA: Sequelize.FLOAT,
		latB: Sequelize.FLOAT,
		longB: Sequelize.FLOAT,
		flag: Sequelize.STRING,
		fist_time_visited: Sequelize.DATE,
		delay_to_int: Sequelize.INTEGER,
		hint: Sequelize.STRING
	}, {
		underscored: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
			}
		}
	});
	return Enigma;
};
