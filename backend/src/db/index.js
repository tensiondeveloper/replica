const{
    MONGODB_URI:MONGODB_URI
} = process.env;

const mongoose = require('mongoose');

console.log(MONGODB_URI)



module.exports = (function(){
    mongoose.Promise = global.Promise;
    return{
        connect(){
            mongoose.createConnection(MONGODB_URI,{
                useNewUrlParser:true
            }).then(
                () =>{
                    console.log("MONGODB CONNECT!")                  
                }
            ).catch(e=>{
                console.log("MONGODB ERROR : "+ e)
            })   
        }
    };
})();

