const jwt = require("jsonwebtoken");
require('dotenv').config();
const respond = require("../respond")
const db = require("../../db/models/index")

module.exports = {
    async login(req,res)
    {
    
    const {username, password} = req.body;
    const user =await db.User.findOne({where: {"username":username,"password":password}})
    
    if(user){
        const data = {
            "iss": "e-store",
            "sub": user.username,
            "name": user.name,
            "email": user.email,
            "role": user.role
          }

        const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10h' });
        const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
        res.cookie("refreshToken",refreshToken)

        const payload = {
            user:user,
            accessToken:accessToken,
            refreshToken:refreshToken
        }
        console.log("Bearer", accessToken) //easier way to get it
        return res.json(respond({code:202,payload:payload,message:"Login Successful"}))
    } else{
        return res.json(respond({status:"failed",code:401,message:"Invalid Credentials, no such user"}));
        }
    },

    async authToken(req,res){
        const accessToken = req.headers['authorization']?.split(" ")[1];
        if(!accessToken){
            return res.json(respond({code:401,status:"failed",message:"access token not provided"}));
        }
        
        jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
            if(err){ return res.json(respond({code:"401",status:'failed',error:err,message:"invalid access token"})) }
        })

        return res.json(respond({code:201,message:"Token Validated"}))

    },

    async refresh(req,res){
        const refreshToken = req.cookies?.refreshToken
        if (!refreshToken) {return res.json(respond({status:"failed",code:"400",message:"no refresh token"}))}
        
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err,decoded)=>{
        if(err){ return res.json(respond({error:err,code:"402",message:"Invalid Refresh Token"})) }
        
        delete decoded["iat"]
        delete decoded["exp"]
        const accessToken = jwt.sign(decoded, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });

        return res.json(respond({message:"Refresh Successful",payload:{accessToken:accessToken}}))

        })
    },

    async logout(req,res){
        res.header['authorization'] = "";
        res.clearCookie("refreshToken");
        return res.json(respond({message:"Logged Out"}))
    },

    async register(req,res){
        // console.log(req.body,"hi")
        const userData = req.body.user
        const added = await db.User.create(userData);
        return res.json(added.toJSON())

    }


}