const config = {};

config.port = process.env.PORT || 8080;
config.tmpfile = './public/tmp/';
config.env = process.env.NODE_ENV || 'development';
config.limiter = {
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 60 // limit each IP to 100 requests per windowMs
};
config.limitMessage = 'Too many requests for this ip, pls stop' +
    ':( </br> If you\'re not trying to DDoS,  please try again later. <3';

// loading .env if on developement
if (config.env === 'development') {
    const result = require('dotenv').config();
    if (result.error) {
        throw result.error;
    } else {
        console.info('.env loaded !');
    }
}

if (typeof process.env.SECRET_KEY === 'undefined') {
    throw new Error('No SERCRET_KEY');
}
config.SECRET_KEY = process.env.SECRET_KEY;
module.exports = config;
