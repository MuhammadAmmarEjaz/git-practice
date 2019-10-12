const nconf = require('nconf');
const server = require('./server');
const { loadSetting } = require('./config/configurationAdapter');
const { MongoConnect } = require('./api/mappers/db');

const appSettingPath = process.env.APP_SETTINGS_FILE_PATH;


loadSetting({ appSettingPath })
    .then(() =>{
        nconf.set('db.mongodb.uri','mongodb://localhost/node_api');
        const mongoURI = nconf.get('db.mongodb.uri');
        MongoConnect.connectMongo(mongoURI);
        const serverOptions = {
            logSeverity : nconf.get('logSeverity'),
            
        }
        console.log(serverOptions);
        server.createServer(serverOptions);
    })
    .catch((err)=>{
        console.log(err);
    })
