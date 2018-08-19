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
                subject   : 'User'
            },
            (error,token) =>{
                if(error) reject(error);
            resolve(token)
            }
        )
        }
    )
}

function decodeToken(token){
    return new Promise(
        (resolve,reject) =>{
            jwt.verify(token,jwt_secretKey,(error,decoded) =>{
                if(error) reject(error);
                resolve(decoded)
            })
        }
    )
}

exports.generateToken = generateToken;
exports.decodeToken = decodeToken;