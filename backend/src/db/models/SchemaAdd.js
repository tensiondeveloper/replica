const mongo = require('mongoose');
const { Schema } = mongo;


const rate =   new Schema({
    id:String,
    pwd : String,
    name :String

})

module.exports = mongo.model('rate',rate);