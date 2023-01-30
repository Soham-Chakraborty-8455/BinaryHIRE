const express= require('express')
const bodyParser = require('body-parser')
const Freelancer= require('../model/database')
const path= require('path')
const { query, request } = require('express')
const router = express.Router()
router.use(bodyParser.json())

router.get('/freelancer', (req, res, next)=>{
    res.sendFile(path.join(__dirname,'../','public','freelancer.html'))
    
})

router.post('/freelancer', (req, res)=>{
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

Freelancer.findOne({name: "Soham Chakraborty" }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Result : ", docs);
    }
});

module.exports = router