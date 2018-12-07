const config = require('./config.js');
const app = require('./app');
app.listen(config.port, () => {
	console.log(`app running on http://${config.host}:${config.port}`);
});
