module.exports = {
    isLoggedIn(req,res,next){
        // console.log(req.session)
        if(!req.session?.isLoggedIn){return res.redirect("/login")}
        // console.log
        next()
    }
}