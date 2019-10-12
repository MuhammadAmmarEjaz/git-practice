const nconf = require('nconf');
const server = require('./server');
const { loadSetting } = require('./config/configurationAdapter');

const appSettingPath = process.env.APP_SETTINGS_FILE_PATH;


loadSetting({ appSettingPath })
    .then(() =>{

        const serverOptions = {
            logSeverity : nconf.get('logSeverity'),
            
        }
        console.log(serverOptions);
        server.createServer(serverOptions);
    })
    .catch((err)=>{
        console.log(err);
    })
