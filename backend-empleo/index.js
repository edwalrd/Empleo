'use strict'

const mongoose = require('mongoose');
const app = require('./app');

require('dotenv').config();


mongoose.set('useFindAndModify', false);


mongoose.Promise = global.Promise;

mongoose.connect(process.env.ConexionBD, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {

    console.log("Conexion con base de datos perfecta");

    app.listen(process.env.Port , ()=>{

        console.log('servidor corriendo en http://localhost:' + process.env.Port );
    })

}).catch(err => {

    console.log("error la conexion con la basde de dato fallo" + " " + err);
})