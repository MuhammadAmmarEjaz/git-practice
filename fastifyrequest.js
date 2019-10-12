 const fastify=require('fastify')({logger:true});
const rp = require('request-promise');


fastify.register(require('./our-db-connector'),{
  url:'mongodb://localhost:27017/bykea-dev'
})
  
 fastify.register(require('./routes'));
  let lat=35;
  let lng = 139
  const APIKEY="6394e6600a059532774210bddc8646a3"
  const options = {
    method: 'GET',
    "rejectUnauthorized": false,
    uri: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${APIKEY}`,
    json: true // Automatically stringifies the body to JSON
};
  fastify.get('/weatherapi',async (request,reply) => {
    const data = await rp(options);
    reply.send(data);
  })
  
  // Run the server!
  const start = async () => {
    try {
      await fastify.listen(5400)
      fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()