const Router = require('koa-router');
const api = new Router();
const auth = require('./auth');

api.use('/auth',auth.routes());

api.get('/', (ctx) =>{
    ctx.body = '/Api Router IN'
});

module.exports = api;