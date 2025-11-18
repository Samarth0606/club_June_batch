const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');

function verifyToken(req,res,next){
    if(
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === "JWT"
    ){
        jwt.verify(
            req.headers.authorization.split(' ')[1], 
            'SECRETKEY',
            async function(err,verifyToken){
                if(err){
                    return res.status(403).json({message: "Invalid JWT token"})
                }
                // console.log(verifyToken.id, "verifyToken");
                const data = await UserModel.findById(verifyToken.id)
                // console.log(data , "data");
                req.user = data;     
                next();           
            }
        );
    }else{
        return res.status(404).json({message:"Token not found"})
    }
}

module.exports = verifyToken;