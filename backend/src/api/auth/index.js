const Router = require('koa-router');
const auth = new Router();
const authCtrl = require('../auth/auth.ctrl')
const User = require('../../db/models/Users')

// auth.get('/', (ctx) => {
//     const user = User.memberShow();
//     console.log(user)


//     ctx.body = 'api/auth IN';
// })



// auth.get('/', (ctx,req,res) =>{
//     ctx.body = "??";
//     const user =  User.find();
//    console.log(user)
   
// });



//회원가입 url
auth.post('/register',authCtrl.register);

//모든회원을 보여주는 url
auth.get('/showUser',authCtrl.showUser);
auth.post('/locallogin',authCtrl.localLogin);



module.exports = auth;