const jwt = require('jsonwebtoken');


//esto es para generar el token

const generarJWT = (uid) => {

    return jwt.sign({ id: uid}, process.env.TOKEN_SECRET, {

        expiresIn: '12h'
    }
    );

}

module.exports = generarJWT;