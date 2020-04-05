const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const Winner = sequelize.define('winner', {
        name: { type: Sequelize.STRING, allowNull: false },
        date: { type: Sequelize.DATE, allowNull: false }
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
    return Winner;
};
