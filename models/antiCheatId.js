const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
	var antiCheatId = sequelize.define('antiCheatId', {
		id: {type: Sequelize.STRING, allowNull: false, primaryKey: true},
		used: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false }
	}, {
		underscored: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
			}
		}
	});
	return antiCheatId;
};
