const{
    MONGODB_URI:MONGODB_URI
} = process.env;

const mongo = require('mongoose');

module.exports = (function(){
    mongo.Promise = global.Promise;

    return{
        connect(){
            mongo.createConnection(MONGODB_URI,{
                useNewUrlParser:true
            }).then(
                () =>{
                    console.log("MONGODB CONNECT!")
                }
            ).catch(e=>{
                console.log("MONGODB ERROR : "+ e)
            })  
        }
    }
})