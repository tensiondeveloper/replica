const Joi = require('joi');
const User = require('../../db/models/Users')


exports.register = async (ctx) =>{
    
    const { body } = ctx.request;
   
    const schema = Joi.object({
        displayName: Joi.string().regex(/^[a-zA-Z0-9ㄱ-힣]{3,12}$/).required() ,
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(30)
        

    });

    const result = Joi.validate(body,schema);

    if(result.error){
        console.log('asdf')
        console.log(result.error)
        ctx.status = 400;
        return;
    }
    console.log('1')
    
    const {displayName,email,password}  = body;
    try{
        console.log('2')
        const user = await User.localRegister({
            displayName,email,password
        });
        console.log('check2' + user)
        ctx.body = user;


       
    }catch(e){
        console.log('500 error' + e)
        ctx.throw(500)
    }
}