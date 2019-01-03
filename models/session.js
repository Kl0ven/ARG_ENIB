const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
	var Session = sequelize.define('Session', {
		sid: {
			type: Sequelize.STRING,
			primaryKey: true
		},
		expires: Sequelize.DATE,
		data: Sequelize.STRING(50000)
	});
	return Session;
};
