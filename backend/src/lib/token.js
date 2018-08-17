const jwt = require('jsonwebtoken')
const {
    JWT_SECRET : jwt_secretKey

} = process.env;


function generateToken(payload){
    return new Promise(
        (resolve,reject)=> {
            jwt.sign(payload,jwt_secretKey,{
                issuer : 'replica.com',
                expiresIn : '7d',
                subject : 'User'
            },
            (error,token) =>{
                if(error) reject(error);
            resolve(token)
            }
        )
        }
    )


}

exports.generateToken = generateToken;