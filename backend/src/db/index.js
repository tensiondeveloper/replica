const mongoose = require('mongoose');
const{
    MONGODB_URI:MONGODB_URI
} = process.env;


module.exports = (function(){
    mongoose.Promise = global.Promise;
   
    return{
        connect(){
            // mongoose.createConnection(MONGODB_URI,{
            //     useNewUrlParser:true
            // }).then(
            //     () =>{
            //         console.log("MONGODB CONNECT!")                  
            //     }
            // ).catch(e=>{
            //     console.log("MONGODB ERROR : "+ e)
            // })   
            const db = mongoose.connection;
            db.on('error', console.error);
            db.once('open', function(){
                // CONNECTED TO MONGODB SERVER
                console.log("Connected to mongod server");
            });

            mongoose.connect(MONGODB_URI,{useNewUrlParser: true});

        }
    };
})();

