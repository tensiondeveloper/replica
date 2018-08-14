const mongoose = require('mongoose');
const { Schema } = mongoose;


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
    passWord : String,
    createAt : {
        type: Date,
        default : Date.now
    }
})


module.exports = mongoose.model('User',User);