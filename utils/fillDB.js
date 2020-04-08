/* eslint max-len: ["error", { "code": 500 }] */
const Enigma = require('../models').enigma;
// const Winner = require('../models').winner;
const sequelize = require('../models').sequelize;
const data = require('../data/data');


sequelize.sync({ force: true }).then(function () {
    Enigma.bulkCreate(data).then(() => {
        return Enigma.findAll();
    }).then(function (enigmas) {
        console.log('c\'est good');
        const promise = [];

        for (let i = 0; i < enigmas.length - 1; i++) {
            promise.push(enigmas[i].setNext(enigmas[i + 1]));
        }
        Promise.all(promise).then(function () {
            display().then(() => {
                sequelize.close();
            }).catch(error => {
                console.log(error);
                sequelize.close();
            });
        }).catch(error => {
            console.log(error);
            sequelize.close();
        });
    }).catch(error => {
        console.log(error);
        sequelize.close();
    });
});

function display () {
    return Enigma.findAll().then(data => {
        data.forEach(element => {
            console.log(element.dataValues);
        });
    });
}
