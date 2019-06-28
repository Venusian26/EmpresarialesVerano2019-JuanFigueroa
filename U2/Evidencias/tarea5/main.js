var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/cine')

//Modelo

var Pelicula = mongoose.model('Pelicula2',schema,'pelicula2');


var pelicula =new Pelicula({
    title: 'Avengers',
    author: 'No se',
    body:' Ciencia ficcion',
    meta: 10
});

pelicula.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0)
});