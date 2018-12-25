var config = {};
config.port = process.env.PORT || 8080;
config.tmpfile = './public/tmp/';
config.env = process.env.NODE_ENV || 'development';
module.exports = config;
