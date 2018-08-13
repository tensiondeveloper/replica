const mongo = require('mongoose');
const { Schema } = mongo;


const rate =   new Schema({
    id:String,
    title : String

})

module.exports = mongo.model('articles',rate);