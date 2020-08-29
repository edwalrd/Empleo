'use strict'

const mongoose = require('mongoose');
const app = require('./app');

require('dotenv').config();


mongoose.set('useFindAndModify', false);


mongoose.Promise = global.Promise;

mongoose.connect(process.env.ConexionBD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {


    app.listen(process.env.Port , ()=>{

        console.log('Server running in http://localhost:' + process.env.Port );
    })

}).catch(err => {

    console.log("error la conexion con la basde de dato fallo" + " " + err);
})