const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
	var Enigma = sequelize.define('enigma', {
		name: { type: Sequelize.STRING, allowNull: false },
		enigma_text: { type: Sequelize.STRING, allowNull: false },
		url: { type: Sequelize.STRING, allowNull: false },
		type: Sequelize.ENUM('geo', 'flag', 'eval'),
		latA: Sequelize.FLOAT,
		longA: Sequelize.FLOAT,
		latB: Sequelize.FLOAT,
		longB: Sequelize.FLOAT,
		flag: Sequelize.STRING,
		first_time_visited: Sequelize.DATE,
		delay_to_hint: { type: Sequelize.INTEGER, allowNull: false },
		hint: { type: Sequelize.STRING, allowNull: false },
		custom_js: Sequelize.STRING,
		custom_html: Sequelize.STRING,
		custom_css: Sequelize.STRING,
		end_text: { type: Sequelize.STRING, allowNull: false }
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
			first_time_visited: function () {
				return this.getDataValue('first_time_visited');
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
			end_text: function () {
				return this.getDataValue('end_text');
			},
			time_before_hint: function () {
				let time = {};
				let day = this.getDataValue('delay_to_hint');
				if (this.first_time_visited != null && typeof this.first_time_visited !== 'undefined') {
					let date = new Date(this.first_time_visited);
					let timeRemaining = date.setDate(date.getDate() + day) - Date.now();
					if (timeRemaining > 0) {
						time.percent = 1 - (timeRemaining / (day * 24 * 3600 * 1000));
						time.remaining = timeRemaining;
					} else {
						time.percent = 100;
						time.remaining = 0;
					}
				} else {
					time.percent = 0;
					time.remaining = day * 24 * 3600 * 1000;
				}
				return time;
			},
			name: function () {
				return this.getDataValue('name');
			},
			id: function () {
				return this.getDataValue('id');
			},
			getInfo: function () {
				let result = {
					name: this.getDataValue('name'),
					enigma_text: this.getDataValue('enigma_text'),
					custom_html: this.getDataValue('custom_html'),
					custom_js: this.getDataValue('custom_js'),
					custom_css: this.getDataValue('custom_css'),
					number: this.getDataValue('id')
				};

				if (this.first_time_visited != null && typeof this.first_time_visited !== 'undefined') {
					let date = new Date(this.first_time_visited);
					let day = this.getDataValue('delay_to_hint');
					if (date.setDate(date.getDate() + day) < Date.now()) {
						result.hint = this.getDataValue('hint');
					}
				}
				return result;
			}
		},
		setterMethods: {
			first_time_visited: function (value) {
				this.setDataValue('first_time_visited', value);
			}
		}
	});
	return Enigma;
};
