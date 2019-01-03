const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define('user', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		username: {
			type: Sequelize.TEXT
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		last_login: {
			type: Sequelize.DATE
		}
	}, {
		underscored: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
			}
		},
		getterMethods: {
			enigma_id: function () {
				return this.getDataValue('enigma_id');
			},
			name: function () {
				return this.getDataValue('name');
			},
			date: function () {
				return this.getDataValue('date');
			}
		}

	});
	return User;
};
