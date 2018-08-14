const mongoose = require('mongoose');
const crypto = require('crypto');
const { Schema } = mongoose;
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

User.statics.localRegister = function({displayName , email,password}){
    console.log('1_2')
    console.log(this)
    const user = new this({
        displayName,
        email,
        password : hash(password)
    })
    console.log('check' +  user)
    return user.save();
};

module.exports = mongoose.model('User',User);