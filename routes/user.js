const express= require('express')
const bodyParser = require('body-parser')
const Freelancer= require('../model/database')
const path= require('path')
const { query } = require('express')
const router = express.Router()
router.use(bodyParser.json())

router.use('/freelancer', (req, res, next)=>{
    res.sendFile(path.join(__dirname,'../','public','freelancer.html'))
    const name= req.body.name
    const email= req.body.email
    const phone= req.body.phone
    const password = req.body.password
    const skills= req.body.skills
    const freelancerData= new Freelancer({name:name,email:email, phone:phone, password:password, skills:skills})
    freelancerData.save().then(request=>{
        console.log("Uploaded Successfully")
    }).catch(err=>{
        console.log(err)
    })
})


module.exports = router