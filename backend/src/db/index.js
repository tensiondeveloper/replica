const{
    MONGODB_URI:MONGODB_URI
} = process.nav;

const mongo = require('mongoose');

module.exports = (function(){
    mongo.Promise = global.Promise;

    return{
        connect(){
            mongo.createConnection(mongodbURI,{
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