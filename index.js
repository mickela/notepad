const express = require('express');
const router = require('./routes/index');
const db = require('./model/db');

const app = express();

db.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});


app.disable('x-powered-by');
app.listen( process.env.PORT || 3000, ()=> console.log('Server started on port 3000'));
app.use('/', router);