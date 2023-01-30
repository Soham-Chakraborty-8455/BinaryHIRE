const express= require('express')
const bodyParser = require('body-parser')
const Freelancer= require('../model/database')
const { query } = require('express')
const router = express.Router()
router.use(bodyParser.json())

router.use('/freelancer', (req, res, next)=>{
    Freelancer.findOne({name: "Soham Chakraborty" }, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Result : ", docs);
        }
    });
})

module.exports= router