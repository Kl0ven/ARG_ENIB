const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
	var Enigma = sequelize.define('enigma', {
		name: { type: Sequelize.STRING, allowNull: false },
		enigma_text: { type: Sequelize.STRING, allowNull: false },
		url: { type: Sequelize.STRING, allowNull: false },
		type: Sequelize.ENUM('geo', 'flag'),
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
		},
		getterMethods: {
			url: function () {
				return this.getDataValue('url');
			},
			type: function () {
				return this.getDataValue('type');
			},
			getInfo: function () {
				return {
					name: this.getDataValue('name'),
					enigma_text: this.getDataValue('enigma_text')
				};
			}
		}
	});
	return Enigma;
};
