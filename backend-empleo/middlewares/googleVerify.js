const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.CLIENT_ID);

const SCOPES = ['https://www.googleapis.com/auth/drive'];

const googleVerify = async (token) => {

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,

    });

    const authUrl = client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });

    const payload = ticket.getPayload();
    const userid = payload['sub'];


    const { name, email, picture } = payload;

    return { name, email, picture };
}

module.exports = {

    googleVerify
}
