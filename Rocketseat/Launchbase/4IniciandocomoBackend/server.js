const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req,res){
    const about = {
        avatarUrl: "https://avatars3.githubusercontent.com/u/40831841?s=460&v=4",
        name: "Vagner Nerves",
        role: "Analista/Desenvolvedor na LINX",
        description: 'Programador em Delphi - <a href="https://www.embarcadero.com/br/products/delphi" target="_blanck">Site do Delphi</a>, e estudando HTML, CSS e Javascript para se tornar um programador fullstack e garantir outro emprego como desenvolvedor web.  ',
        links : [
            {
                name: "GitHub", url: "https://github.com/VagnerNerves"
            },
            {
                name: "Youtube", url: "https://www.youtube.com/c/VagnerNervesOficial"
            },
            {
                name: "Linkedin", url: "https://www.linkedin.com/in/vagner-nerves-santos/"
            }
        ]
    }

    return res.render("about", { about })
})

server.get("/portifolio", function(req,res){
    return res.render("portifolio", { items: videos })
})

server.get("/video", function(req,res){
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send("video not found")
    }

    return res.render("video", { item : video })
})

server.listen(5000, function(){
    console.log('Server ir runing')
})