const express = require('express')
const router = express.Router() // routing purpose
const Student = require('../models/student') // model js file

// const bodyParser = require('body-parser')
// router.use(bodyParser.json());

router.get('/:id', async function(req,res){
    try{
        const student = await Student.findById(req.params.id)
        res.json(student)
    }catch(err){
        res.send('Error : ' + err)
    }
})


router.get('/', async function(req,res){
    // res.send('get send')
    // console.log('Get')
    try{
        const students = await Student.find()
        res.json(students)
    }catch(err){
        res.send('Error : ' + err)
    }
})

router.post('/',async function(req,res){
    // try {
    //     console.log(req.body);
    //     Student.create(req.body)
    // } catch (error) {
    //     console.log(error)
    // }
    const student = new Student({
        name : req.body.name,
        course : req.body.course,
        semester : req.body.semester,
        university : req.body.university
    })

    try{
         console.log(req.body);
         const stud = await student.save()
         res.json(stud)
    }catch(err){
        res.send('Error : ' + err)
    }
})

router.patch('/:id', async function(req,res){
    try{
        const student = await Student.findById(req.params.id)
        student.semester = req.body.semester
        const stud = await student.save()
        res.json(stud)
    }catch(err){
        res.send('Error : ' + err)
    }
})

router.delete('/:id', async function(req,res){
    try{
        const student = await Student.findById(req.params.id)
       // student.name = req.body.name
        const stud = await student.remove()
        res.json(stud)
    }catch(err){
        res.send('Error : ' + err)
    }
})

module.exports = router