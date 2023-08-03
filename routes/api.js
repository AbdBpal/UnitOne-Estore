const cookieparser = require('cookie-parser');
require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.API_PORT

// DB import
const db = require("../db/models/index")

// Controllers
const auth = require("../controllers/authController");

// Middleware
const roles = require("../middleware/roleCheck")

// App Setup
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());

app.post("/api/login",auth.login)

app.get('/api/refresh', auth.refresh)

app.get("/api/logout", auth.logout)

app.get("/api/page2",auth.authToken)

app.post("/api/register", auth.register)

app.listen(port,()=>{console.log(`http://localhost:${port}`)})