const router = require('koa-router');
const api = new router();
const sample = require('../db/models/sample')
const db = require('../db');



api.get('/:dbname', (ctx, next,req) => {


    console.log("1")
    
    sample.find(function(err, samples){
        console.log("2")
        if(err) return res.status(500).send({error: 'database failure'});
        
         console.log(samples)
         ctx.body = 'GET ' + ctx.request.path +"\n nameParam : "+ ctx.params.dbname;
     })()
     ctx.body = 'GET ' + ctx.request.path +"\n nameParam : "+ ctx.params.dbname;
});

api.post('/:dbname',  (ctx, next,req) => {
    
   
    // var rate = new Rate();
    // rate.id = ctx.body.id;
    // rate.pwd = ctx.body.pwd;
    // rate.name = ctx.body.name;
    // book.save(function(err){
    //     if(err){
    //         console.error(err);
    //         res.json({result: 0});
    //         return;
    //     }

    //     res.json({result: 1});

    // });
    ctx.body = 'GET ' + ctx.request.path +"\n nameParam : "+ ctx.params.dbname + "\nparametar : " +ctx.request.query.id;
});
api.delete('/:dbname', (ctx, next,req) => {
    ctx.body = 'delete ' + ctx.request.path +"\n nameParam : "+ ctx.params.dbname;

});
api.put('/:dbname', (ctx, next,req) => {
    ctx.body = 'put ' + ctx.request.path +"\n nameParam : "+ ctx.params.dbname;




});


module.exports = api;