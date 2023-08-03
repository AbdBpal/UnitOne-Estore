const { where } = require("sequelize")
const db = require("../../db/models/index")
const session = require("express-session")
module.exports = {
    async postAdminLogin(req,res,next){
        const {username, password} = req.body
        console.log(req.body)
        if(!(username&&password)){ return res.send(`Necessary Parameters Not Provided \n Got:${req.body}`)}
        const user = await db.User.findOne({where: {username:username, role:"admin"}})
        if(user){
            if(user.password===password){ 
                console.log("authenticated\n")
                res.session = req.session
                res.session.admin = user.id
                res.session.isLoggedIn = true
                return res.redirect("/dashboard") }
        }
        return res.send("Wrong Email or Password")
    },
    // async 
}