const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const config = require('../config/config');
const db = {};


console.log(process.env.DATABASE_URL);
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    operatorsAliases: false,
    logging: (config.env === 'development') ? console.log : false
});

fs.readdirSync(__dirname)
    .filter(file =>
        (file.indexOf('.') !== 0) &&
        (file !== basename) &&
        (file.slice(-3) === '.js'))
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.enigma.hasOne(db.enigma, { as: 'Next' });
db.enigma.hasMany(db.winner, { as: 'Winners' });
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
