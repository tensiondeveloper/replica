const Joi = require('joi');
const User = require('../../db/models/Users')
const token = require('../../lib/token')
//회원 가입api 
exports.register = async (ctx) =>{
    
    const { body } = ctx.request;
   
    const schema = Joi.object({
        displayName: Joi.string().regex(/^[a-zA-Z0-9ㄱ-힣]{3,12}$/).required() ,
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30)
    });

    const result = Joi.validate(body,schema);

    if(result.error){
        ctx.status = 400;
        return;
    }

    
    const {displayName,email,password}  = body;
    try{
        const exists = await User.findByEmail(email);
        const exists_displyName = await User.findBydisplayName(displayName);

        if(exists){
            ctx.status = 409;
            ctx.body = {
                message : "email exists"
            }
           return;
        }
        if(exists_displyName){
            ctx.status = 409;
            ctx.body = {
                message : "displayName exists"
            }
            return;
        }

        const user = await User.localRegister({
            displayName,email,password
        });

        ctx.body = user;
       
    }catch(e){
        console.log('500 error' + e)
        ctx.throw(500)
    }
}
//회원 모두 불러오는 api
exports.showUser = async (ctx) =>{
   const exists = await User.find();
  ctx.body =exists;
}


exports.localLogin = async (ctx) =>{

    const { body } = ctx.request;

    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30)
    });
    console.log(body)
    const result = Joi.validate(body,schema);
    console.log(result)
    if(result.error){
        ctx.body = 400;
        return;
    }

    const { email , password } = body;

    try{   
        const user = await User.findByEmail(email);
        if(!user){
            //user not defiened
            ctx.body = 403;
            return;
        }
        console.log(password)
        const validated = user.validatePassword(password);


        if(!validated){
            //password wrong
            ctx.body = 403;
            return;
        }

        ctx.body = user;
        console.log('여긴들어와')
        const accessToken = await token.generateToken({
            _id: user._id,
            displayName : user.displayName
        },'user');

        ctx.cookies.set('access_token',accessToken,{
            httpOnly : true,
            maxAge :  1000 * 60 * 60 * 24 * 7
        });


        console.log(accessToken);
        

    }catch(e){
        ctx.body = 500 + e;
        return;
    }



}

