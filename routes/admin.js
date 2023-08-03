const cookieparser = require('cookie-parser');

const express = require("express");
// const { render } = require("ejs");
const app = express()
const session = require("express-session")
const expressLayouts = require("express-ejs-layouts")

require('dotenv').config()
const port = process.env.ADMIN_PORT

const userController = require("../controllers/user/userController")
const productController = require("../controllers/product/productController")
const ctrl = require("../controllers/admin/adminController")
const middleware = require("../middleware/adminSession")

const db = require("../db/models/index");
// const { sequelize } = require('../db');
// const product = require("../db/models/product")

// App Setup
app.set('views', "../views")
app.set('view engine', 'ejs')

app.use(expressLayouts)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(express.static("../public"));


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    admin: "",
    isLoggedIn: false
}));
app.get("/login", (req,res)=>{res.render("util/login")})
app.post("/login", ctrl.postAdminLogin, (req,res)=>{res.render("util/index")})

app.use(middleware.isLoggedIn)

app.get("/dashboard",(req,res)=>{res.render("util/dashboard2")})
app.get("/blank", (req,res)=>{res.render("util/blank")})
app.get("/signup", (req,res)=>{res.render("util/signup")})
app.get("/index", (req,res)=>{res.render("util/index")})
app.get("/template", (req,res)=>{res.render("util/template")})



app.get("/404", (req,res)=>{res.render("misc/404")})
app.get("/500", (req,res)=>{res.render("misc/500")})
app.get("/charts", (req,res)=>{res.render("misc/charts")})
app.get("/forgot-password", (req,res)=>{res.render("misc/forgot-password")})
app.get("/forms", (req,res)=>{res.render("misc/forms")})
app.get("/icons", (req,res)=>{res.render("misc/icons")})
app.get("/permissions", (req,res)=>{res.render("misc/permissions")})
app.get("/roles", (req,res)=>{res.render("misc/roles")})
app.get("/settings", (req,res)=>{res.render("misc/settings")})
app.get("/tables", (req,res)=>{res.render("misc/tables")})
app.get("/ui-alerts", (req,res)=>{res.render("misc/ui-alerts")})
app.get("/ui-badges", (req,res)=>{res.render("misc/ui-badges")})
app.get("/ui-buttons", (req,res)=>{res.render("misc/ui-buttons")})
app.get("/ui-cards", (req,res)=>{res.render("misc/ui-cards")})
app.get("/ui-date-time-picker", (req,res)=>{res.render("misc/ui-date-time-picker")})
app.get("/ui-tabs", (req,res)=>{res.render("misc/ui-tabs")})


// Users
app.get("/users", userController.showAll)
app.get("/addUser",userController.addUserGet)
app.post("/addUser", userController.addUserPost)
app.get("/editUser",userController.editUserGet)
app.post("/editUser", userController.editUserPost)
app.get("/activateUser", userController.activeness)
app.get("/deleteUser", userController.deleteUser)

// Products
app.get("/products", productController.showAll)
app.listen(port, ()=>{console.log(`http://localhost:${port}`)})