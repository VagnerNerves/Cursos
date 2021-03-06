const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')


exports.index = function(req,res){
    return res.render("instructors/index", { instructors : data.instructors })
}

//show
exports.show = function(req,res){
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return (id == instructor.id)      
    })

    if (!foundInstructor) return res.send("Instructor not Found.")

    const instructor = {
        ...foundInstructor, //tudo que tem dento do objeto
        ager: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at)
    }

    return res.render("instructors/show", { instructor })
}

exports.create = function(req,res){
    return res.render("instructors/create")
}

//create
exports.post = function(req,res){
    //req.query
    //req.body

    const keys = Object.keys(req.body)

    for ( key of keys ) {
        //req.body.avatar_URL == ""
        if (req.body[key] == "") {
            return res.send('Preencha todos os campos')
        }
    }

    let { avatar_url, birth, name, services, gender } = req.body

    birth = Date.parse(birth);
    const created_at = Date.now();

    const id = Number(data.instructors.length + 1)

    //data.instructors.push(req.body);
    data.instructors.push({
        id,
        avatar_url,
        name,
        birth,
        gender,
        services,
        created_at
    })


    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Falha no arquivo.')

        return res.redirect("/instructors")
    })

    //return res.send(req.body)
}

//edit
exports.edit = function(req,res){
    const { id } = req.params

    const foundInstructor = data.instructors.find(function(instructor){
        return (id == instructor.id)      
    })

    if (!foundInstructor) return res.send("Instructor not Found.")

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth).iso
    }

    return res.render('instructors/edit', { instructor })
}

//put
exports.put = function(req,res){
    const { id } = req.body
    let index = 0

    const foundInstructor = data.instructors.find(function(instructor, foundIndex){
        if (id == instructor.id) {
            index = foundIndex
            return true
        }     
    })

    if (!foundInstructor) return res.send("Instructor not Found.") 
    
    const instructor = {
        ...foundInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.instructors[index] = instructor

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Falha no arquivo.')

        return res.redirect(`/instructors/${id}`)
    })
}

//Delete
exports.delete = function (req, res) {
    const { id } = req.body
    
    const filteredInstructors = data.instructors.filter(function(instructor){
        return instructor.id != id
    })

    data.instructors = filteredInstructors;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send('Falha no arquivo.')

        return res.redirect("/instructors")
    })
}