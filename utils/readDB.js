const Enigma = require('../models').enigma;
const Winner = require('../models').winner;
const User = require('../models').user;
const sequelize = require('../models').sequelize;

function display () {
    return Enigma.findAll({
        order: ['id']
    }).then(data => {
        for (const e of data) {
            console.log(data[e].dataValues);
            if (data[e].dataValues.first_time_visited != null) {
                console.log('first_time_visited in france = ' +
                data[e].dataValues.first_time_visited.toLocaleDateString('fr-FR') + ' ' +
                data[e].dataValues.first_time_visited.toLocaleTimeString());
            }
        }
        Winner.findAll({ order: ['enigma_id', 'date'] }).then(w => {
            for (let i = 0; i < w.length; i++) {
                console.log(w[i].dataValues);
            }
            User.findAll().then(u => {
                for (let i = 0; i < u.length; i++) {
                    console.log(u[i].dataValues);
                }
                sequelize.close();
            });
        });
    });
}

display();
