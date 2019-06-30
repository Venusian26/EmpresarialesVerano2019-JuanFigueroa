//importacion del modulo moongose
var moongoose = require('mongoose');
//importacion del schema de base de datos
var schema = require('./schema');

//Conexion y creacion de la base de datos
moongoose.connect('mongodb://localhost:27017/tarea6',function (err) {
 
    if (err) throw err;
  
    console.log('Conectado correctamente');
  
 });

//MODELO
//Se define el modelo acorde al esquema en mongo
var Modelo = moongoose.model('Esquema',schema,'E1');

//Se definen los atributos del modelo
var modelo = new Modelo({
    title:'Modelo1',
    author: 'Juan Figueroa',
    body:'Estudiante de ingenieria',
    comments:[
        {
            body:'Primer Modelo',
            date:'06/30/2019 04:11'
        }
    ]
    //los demas atributos se escribran por default
    //Acorde al schema
});

//Guardaremos el modelo en mongo
modelo.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0)
});