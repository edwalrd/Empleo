const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

const credentials = require('../login-286603-533654b21e45.json');

const SCOPES = ['https://www.googleapis.com/auth/drive'];



const controlador = {

    saludo: (req, res) => {

        var fileId ='1BDR_CXxJ-644-KF3ZNyZvsv-fnI7WFql' ;
        const TOKEN_PATH = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNmMzMyYjNlOWI5MjhiZmU1MWJjZjRmOGRhNTQzY2M0YmQ5ZDQ3MjQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTY2MTgxNTM1NTIyLWExMmNvOWIwZTMxMHVlN3ZyNXFma2dqdGdicmdoNWZoLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTY2MTgxNTM1NTIyLWExMmNvOWIwZTMxMHVlN3ZyNXFma2dqdGdicmdoNWZoLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAyMzI1NDEwMzY3ODIyMTgxNTg3IiwiZW1haWwiOiJlZHdhbGxnQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiNUcxNXVrMkR3enpTaFh3bkNuc0pjQSIsIm5hbWUiOiJFZHdhbCBUZWphZGEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2dZc09UeFFfMldhX3JENGVsSmRrc0ZxaHM0QWUtalFQUzNMbTBUSkE9czk2LWMiLCJnaXZlbl9uYW1lIjoiRWR3YWwiLCJmYW1pbHlfbmFtZSI6IlRlamFkYSIsImxvY2FsZSI6ImVzLTQxOSIsImlhdCI6MTU5OTcxNjk4OCwiZXhwIjoxNTk5NzIwNTg4LCJqdGkiOiJiMWRhMWMyMzBlM2VlOWIxMTkzYTg4YzM3MWYzMWFkNjM5ZGM2YWRkIn0.lIK140GDaivqmdN45K9GCo4dUWHa4RZd5o5lIgDLoSdcXMK0BSsajWJO6zruolLR51YDxtGDjgJyVbo5uTMb1CesO8JwwsshQwQpK1Ym2IDQ1O5xWRtQOPthVY-GFBVqJuJimZPM3gYeebMe1YI-_6w5t7D2lmZgdyUmhrEQP64GVXlNkcu_u8e2O9BtJdBrktIxV_UMP502s61PYR5-Tf88q-5nt1x0RZxbz7-bsFChWTEfI5tGggbgyi2--l-gERMLLgBmMSHooKdkBmlNB7Ra_GcH8BJq8g5G7q0UW1QkX9QhOTdZhm42Kis3cXVCft-A8fLeBjr03TEJ6m0fcQ';

          const drive = google.drive({ version: 'v3', TOKEN_PATH });
            drive.files.get({ fileId: fileId, fields: '*' }, (err, res) => {
                if (err) return console.log('The API returned an error: ' + err);
                console.log(res.data); 
            });

        console.log('bien');
     
        return res.status(200).send('bien');
    }


}








module.exports = controlador;


