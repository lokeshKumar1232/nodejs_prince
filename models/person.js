const mongoose = require('mongoose')

const personalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
    },
    work:{
        type:String,
        emum:["chef","waiter","manager"],
        required:true,
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
    },
    salary:{
        type:Number,
        required:true
    }
})
const person=mongoose.model('person',personalSchema)
module.exports = person