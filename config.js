var config = {};
config.port = process.env.PORT || 8080;
config.tmpfile = './public/tmp/';
config.env = process.env.NODE_ENV || 'development';
config.limiter = {
	windowMs: 10 * 60 * 1000, // 15 minutes
	max: 1 // limit each IP to 100 requests per windowMs
};
module.exports = config;
