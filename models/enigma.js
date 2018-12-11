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
		custom_html: Sequelize.STRING,
		custom_css: Sequelize.STRING
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
			custom_html: function () {
				return this.getDataValue('custom_html');
			},
			latA: function () {
				return this.getDataValue('latA');
			},
			latB: function () {
				return this.getDataValue('latB');
			},
			longA: function () {
				return this.getDataValue('longA');
			},
			longB: function () {
				return this.getDataValue('longB');
			},
			getInfo: function () {
				return {
					name: this.getDataValue('name'),
					enigma_text: this.getDataValue('enigma_text'),
					custom_html: this.getDataValue('custom_html'),
					custom_js: this.getDataValue('custom_js'),
					custom_css: this.getDataValue('custom_css')
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
