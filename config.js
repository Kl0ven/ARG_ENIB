var config = {};
config.port = process.env.PORT || 8080;
config.tmpfile = './public/tmp/';
config.locale = {
	supportedLanguages: ['fr'],
	defaultLanguage: 'en'
};
module.exports = config;
