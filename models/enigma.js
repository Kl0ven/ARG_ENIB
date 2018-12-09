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
		delay_to_hint: Sequelize.INTEGER,
		hint: Sequelize.STRING,
		custom_js: Sequelize.STRING,
		custom_html: Sequelize.STRING
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
			fist_time_visited: function () {
				return this.getDataValue('fist_time_visited');
			},
			getInfo: function () {
				return {
					name: this.getDataValue('name'),
					enigma_text: this.getDataValue('enigma_text'),
					custom_html: this.getDataValue('custom_html'),
					custom_js: this.getDataValue('custom_js')
				};
			}
		},
		setterMethods: {
			fist_time_visited: function (value) {
				this.setDataValue('fist_time_visited', value);
			}
		}
	});
	return Enigma;
};
