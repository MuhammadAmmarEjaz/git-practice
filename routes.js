
async function routes(fastify,options){
  const database= fastify.mongo.db('bykea-dev');
  const collection = database.collection('trips');

  fastify.get('/search/:id',async(request,reply)=>{
    console.log(await collection.findOne({_id:request.params.id}))
    const data=await collection.findOne({_id:request.params.id});
    if(data===null){
      throw new Error('Invalid id')
    }
    return data;
  })
}

module.exports=routes;