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

exports.showUser = async (ctx) =>{
   const exists = await User.find();
  ctx.body =exists;
}


