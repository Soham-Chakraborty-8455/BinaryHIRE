const mongoose= require("mongoose")
const express= require("express")

const schema= mongoose.Schema

const freelancerSchema= new schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    skills: {
        type: String,
        require: true
    }
}
)

module.exports= mongoose.model('Freelancers', freelancerSchema)