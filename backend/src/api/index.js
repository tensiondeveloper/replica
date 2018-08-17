const Router = require('koa-router');
const api = new Router();
const auth = require('./auth');


//회원부분
api.use('/auth',auth.routes());

api.get('/', (ctx) =>{
    ctx.body = '/Api Router IN'
});

module.exports = api;