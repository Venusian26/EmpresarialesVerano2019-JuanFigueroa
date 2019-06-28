var mongoose = require('mongoose'); //importando el modulo

module.exports = new mongoose.Schema({
    title:{
        type: String,
        required:true
        },
    author: {
        type: String,
        required: true
        },
    body:{
        type: String,
        required:true
        },
    
    date: {
        type: Date,
        default: Date.now
        },
    hidden:{
        type:Boolean,
        default:false
        },
    meta:{
        votes: Number
        
        }});