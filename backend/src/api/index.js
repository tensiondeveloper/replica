const router = require('koa-router');
const api = new router();
const rate = require('../db/models/SchemaAdd')
api.get('/:dbname', (ctx, next,req) => {


    
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