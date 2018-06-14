const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session');
// const passport = require('passport');
// const Auth0Strategy = require('passport-auth0');
// const massive = require('massive');
// const con = require('./controller');


// const aws = require('aws-sdk');
const chalk = require('chalk');
require('dotenv').config();

const {
    SERVER_PORT,
    // SESSION_SECRET,
    // DOMAIN,
    // CLIENT_ID,
    // CLIENT_SECRET,
    // CALLBACK_URL,
    // CONNECTION_STRING,


    // AWS_ACCESS_KEY_ID,
    // AWS_SECRET_ACCESS_KEY,
    // BUCKET,
} = process.env;

const app = express();

// massive(CONNECTION_STRING).then( (mySQLDatabase) =>{
//     console.log(chalk.bgYellow(chalk.black('Database Has Connected')));
//     app.set('db', mySQLDatabase)
// })

app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json());



// app.use('/s3', require('react-s3-uploader/s3router')({
//     bucket: "MyS3Bucket",
//     region: 'us-east-1', //optional
//     signatureVersion: 'v4', //optional (use for some amazon regions: frankfurt and others)
//     headers: { 'Access-Control-Allow-Origin': '*' }, // optional
//     ACL: 'private', // this is default
//     uniquePrefix: true // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
// }));


// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/index.html`);
// });

// app.get('/upload', (req, res) => {
//     upload(req.query).then(url => {
//         res.json({ url: url });
//     }).catch(e => {
//         console.log(e);
//     });
// });

// aws.config.update({
//     accessKeyId: AWS_ACCESS_KEY_ID,
//     secretAccessKey: AWS_SECRET_ACCESS_KEY
// });

// function upload(file) {
//     const s3 = new aws.S3();
//     const params = {
//         Bucket: BUCKET,
//         Key: file.filename,
//         Expires: 60,
//         ContentType: file.filetype
//     };
//     return new Promise((resolve, reject) => {
//         s3.getSignedUrl('putObject', params, (err, url) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(url);
//         });
//     });
// }



app.listen(SERVER_PORT, () => { console.log(chalk.bgGreen.black(`This server is ON! ${SERVER_PORT}`)) });