const product = require("../../db/models/index").Product
module.exports = {
    async showAll(req,res){
        res.render("product/products2", {products: await product.findAll()})
    }
}