const Router = require('koa-router');
const auth = new Router();
const authCtrl = require('../auth/auth.ctrl')


auth.get('/', (ctx) => {
    ctx.body = 'api/auth IN';
})


auth.post('/register',authCtrl.register);

module.exports = auth;