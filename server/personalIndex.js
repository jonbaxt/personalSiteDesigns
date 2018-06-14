const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session');
// const passport = require('passport');
// const Auth0Strategy = require('passport-auth0');
// const massive = require('massive');
// const con = require('./controller');
const chalk = require('chalk');
require('dotenv').config();

const {
    SERVER_PORT,
    // SESSION_SECRET,
    // DOMAIN,
    // CLIENT_ID,
    // CLIENT_SECRET,
    // CALLBACK_URL,
    // CONNECTION_STRING
} = process.env;

const app = express();

// massive(CONNECTION_STRING).then( (mySQLDatabase) =>{
//     console.log(chalk.bgYellow(chalk.black('Database Has Connected')));
//     app.set('db', mySQLDatabase)
// })

app.use(express.static(`${__dirname}/../build`));
app.use( bodyParser.json() );



app.listen(SERVER_PORT, ()=> { console.log(chalk.bgGreen.black(`This server is ON! ${SERVER_PORT}`))});