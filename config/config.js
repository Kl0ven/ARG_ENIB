var config = {};
config.port = process.env.PORT || 8080;
config.tmpfile = './public/tmp/';
config.env = process.env.NODE_ENV || 'development';
config.limiter = {
	windowMs: 10 * 60 * 1000, // 15 minutes
	max: 100 // limit each IP to 100 requests per windowMs
};
config.limitMessage = 'Too many requests for this ip, pls stop :( </br> If you\'re not trying to DDoS,  please try again later. <3';
module.exports = config;
