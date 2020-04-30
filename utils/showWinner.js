const winner = require('../models').winner;
// const Winner = require('../models').winner;
const sequelize = require('../models').sequelize;

function display () {
    return winner.findAll({
        order: ['date']
    }).then(data => {
        for (const e of data) {
            console.log(data[e].dataValues);
            // if (data[e].dataValues.first_time_visited != null) {
            // console.log('first_time_visited in france = ' +
            // data[e].dataValues.first_time_visited.toLocaleDateString('fr-FR') + ' ' +
            // data[e].dataValues.first_time_visited.toLocaleTimeString());
            // }
        }
        sequelize.close();
    });
}

display();
