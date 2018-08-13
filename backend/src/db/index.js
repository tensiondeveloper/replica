const{
    MONGODB_URI:MONGODB_URI
} = process.env;

const mongo = require('mongoose');
console.log(MONGODB_URI)
module.exports = (function(){
    mongo.Promise = global.Promise;
    return{
        abc(){
            console.log('들어오나 확인')  
         },
         
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
})()

