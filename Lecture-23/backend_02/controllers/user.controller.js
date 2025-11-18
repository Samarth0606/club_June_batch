const UserModel = require("../models/User.model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

async function register(req,res){
    try{
        const {fullName,email,password } = req.body;
        const data = await UserModel.findOne({email})
        if(data){
            return res.status(409).json({"message":"User Already Exists"})
        }else{
            const newUser = await UserModel.create({
                fullName,
                email,
                password: bcrypt.hashSync(password, 12), 
            })
            res.status(201).json({newUser})
        }
    }
    catch(err){
        return res.status(500).json({"error while creating User": err})
    }
}
async function login(req,res){
    try{
        const {email,password} = req.body;
        let data = await UserModel.findOne({email})
        if(!data){
            return res.status(409).json({"message":"User Doesnot Exists"})
        }
        let validPassword = bcrypt.compareSync(password, data.password); 
        if(!validPassword){
            return res.status(403).json({"message":"Invalid User Details"})
        }
// JWT (JSON WEB TOKEN)
        const token = jwt.sign( {id: data._id} , 'SECRETKEY');
        console.log(token , "token");
        
        return res.status(200).json({
            user: {
                email: data.email,
                fullName: data.fullName,
                password: data.password
            },
            accessToken: token
        })
    }
    catch(err){
        return res.status(500).json({"error while logging in User": err})
    }
}

module.exports = {register, login}