const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const revenues = require("./data")

server.use(express.static('public'))

server.set("view engine","njk")

nunjucks.configure("views",{
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req,res){
    return res.render("index", { revenues })
})

server.get("/about", function(req,res){
    return res.render("about")
})

server.get("/revenue", function(req,res){
    return res.render("revenue", { revenues })
})

server.get("/recipes/:index", function (req,res){
    const recipeIndex = req.params.index;

    const revenue = revenues[recipeIndex]


    return res.render("recipes", { revenue })
})


server.listen(5000, function(){
    console.log("Server ir runin")
})
