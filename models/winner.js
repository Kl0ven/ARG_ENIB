const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
	var Winner = sequelize.define('winner', {
		name: { type: Sequelize.STRING, allowNull: false },
		date: { type: Sequelize.DATE, allowNull: false }
	}, {
		underscored: true,
		classMethods: {
			associate: function (models) {
				// associations can be defined here
			}
		}
	});
	return Winner;
};
