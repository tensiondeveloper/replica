const mongoose = require('mongoose');
const crypto = require('crypto');
const  Schema  = mongoose.Schema;
const { 
    PASSWORD_HASH_KEY : hashkey
} = process.env;


function hash (password){
    
    return crypto.createHmac('sha256',hashkey).update(password).digest('hex');    
}



const User = new Schema({
    displayName : String,
    email : String ,
    social : {
        google : {
            id : String,
            acceseToken : String,
        }
        ,
        naver : {
            id : String,
            acceseToken : String
        }
    },
    password : String,
    createAt : {
        type: Date,
        default : Date.now
    }
})



User.statics.findByEmail = function(email){
 
    return this.findOne({email}).exec();
}
User.statics.findBydisplayName = function(displayName){
    return this.findOne({displayName}).exec();
}

User.statics.localRegister = function({displayName , email,password}){
    

    const user = new this({
        displayName,
        email,
        password : hash(password)
    })
  
    return user.save();
};
User.static.memberShow = function(){
    return User.find();

   
}


User.methods.validatePassword = function(password){
    const hash_password = hash(password);
    return this.password === hash_password;
}


module.exports = mongoose.model('User',User);