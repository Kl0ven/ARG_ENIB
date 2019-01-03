var bCrypt = require('bcrypt-nodejs');

function hash (e) {
	return bCrypt.hashSync(e);
}

module.exports = hash;
