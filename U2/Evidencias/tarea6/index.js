var mongoose = require('mongoose');

var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/tarea6',function (err) {
 
    if (err) throw err;
  
    console.log('Conectado correctamente');
  
 });

var modelo = mongoose.model('Esquema',schema,'E1');
//consulta general
modelo.find({},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log('-------Consulta general---------');
    console.log(docs);
    
});

//consulta con parametro
modelo.find({title:'Modelo1'},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log('-------Consulta parametro---------');
    console.log(docs);
   
});

//UPDATE //Especifique el id
modelo.update({_id:'5d18f85d9e22b3438c91b99c'},{$set:{title:'Modelo01'}},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log('-------UPDATE---------');
    console.log(docs);
    process.exit(0);
});