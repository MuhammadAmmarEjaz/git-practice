const nconf= require('nconf');
const request = require('request-promise-native');

// nconf.argv().file({file:'/home/amar/WorkSpace/my-own-fastify-practice/config/appSetting.json'});
nconf.set('app.externalAPITimeout','5000')
const externalTimeOut = nconf.get('app.externalAPITimeout');

console.log(externalTimeOut)
const getRequest = ({url,options}) =>request.get(url,{...options,timeout:externalTimeOut,json:true});

module.exports = {
    getRequest
}

