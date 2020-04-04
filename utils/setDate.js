const Enigma = require('../models').enigma;
// const Winner = require('../models').winner;
const sequelize = require('../models').sequelize;

function display () {
    return Enigma.findAll({
        order: ['id']
    }).then(data => {
        const p = [];
        for (const e of data) {
            // console.log(data[e].dataValues);
            const today = new Date(Date.now());
            data[e].first_time_visited = new Date(today.setDate(today.getDate() - 10));
            p.push(data[e].save());
            if (data[e].dataValues.first_time_visited != null) {
                console.log('first_time_visited in france = ' +
                data[e].dataValues.first_time_visited.toLocaleDateString('fr-FR') + ' ' +
                data[e].dataValues.first_time_visited.toLocaleTimeString());
            }
        }
        Promise.all(p).then(function () {
            sequelize.close();
        });
    });
}

display();
