const config = require('./config/config');
const app = require('./app');
app.listen(config.port, () => {
    console.info(`app running on http://${config.host}:${config.port}`);
});
