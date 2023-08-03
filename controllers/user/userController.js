const user = require("../../db/models/index").User
module.exports = {
    async showAll (req,res){
        res.render("user/users", {users: await user.findAll()})
    },
    async addUserGet(req,res){
        return res.render("user/addUser");
    },
    async addUserPost(req,res){
        await user.create(req.body) 
        return res.redirect("/users") 
    },
    async editUserGet(req,res){
        const userr = await user.findOne({where: {id:req.query.id}})
        return res.render("user/editUser",{user: userr})
    },
    async editUserPost (req,res){
        await user.update(req.body, { where: {id:req.body.id}})
        return res.redirect("/users")
    },
    async deleteUser (req,res){
        await user.destroy({where: {id:req.query.id}})
        return res.redirect("/users")
    },
    async activeness(req,res){
        const myUser = await user.findOne({where: {id:req.query.id}}) 
        const active = myUser.status === "active" ? "inactive" : "active"
        await user.update({status:active},{where: {id:myUser.id}})
        return res.redirect("/users")
    }

}