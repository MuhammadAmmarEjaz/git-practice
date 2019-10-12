const Fastify = require('fastify');
const path = require ('path');
const Autoload = require('fastify-autoload');
const uuid = require('uuid/v4');


const createRequestId = () => uuid();

const createServer = (options) => {
    const { logSeverity } = options
        const server = Fastify({
            ignoreTrailingSlash:true,
        logger : {
            genReqId : createRequestId,
            level : 'info'
        }
    });

    server.register(Autoload,{
        dir : path.join(__dirname,'api','routes')
    })


// start the server
server.listen(9000, (err) => {
    if (err) {
        server.log.error(err);
        console.log(err);
        process.exit(1);
    }
    server.log.info('Server Started');
});    
}

module.exports = {createServer};


