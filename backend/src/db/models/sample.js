const mongo = require('mongoose');
const { Schema } = mongo;


const sample =   new Schema({
    id:String,
    name : String

})

module.exports = mongo.model('sample',sample);