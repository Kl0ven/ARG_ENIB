const antiCheatId = require('../models').antiCheatId;
const Op = require('../models').Sequelize.Op;

function resestAntiCheatId (fireDate) {
    antiCheatId.destroy({
        where: {
            created_at: { [Op.lt]: new Date(new Date() - 12 * 60 * 60 * 1000) }
        }
    }).then(() => {
        antiCheatId.count().then(c => {
            console.info('deleting antiCheatId @ ' + fireDate);
        }).catch(e => {
            console.error('error while deleting antiCheatId', e);
        });
    }).catch(e => {
        console.error('error while deleting antiCheatId', e);
    });
}

module.exports = resestAntiCheatId;
