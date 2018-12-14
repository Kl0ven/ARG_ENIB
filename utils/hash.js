var crypto = require('crypto');

function hash (e) {
	return crypto.createHash('md5').update(e).digest('hex');
}

module.exports = hash;
