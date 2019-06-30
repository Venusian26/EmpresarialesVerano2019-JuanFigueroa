var mongoose = require('mongoose');

var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/tarea6',function (err) {
 
    if (err) throw err;
  
    console.log('Conectado correctamente');
  
 });

var modelo = mongoose.model('Esquema',schema,'E1');

//DELETE //Especifique ID del documento
modelo.findByIdAndRemove({_id:'5d18f85d9e22b3438c91b99c'},
function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log('-------DELETE---------');
    console.log(docs);
    process.exit(0);
});