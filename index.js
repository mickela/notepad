const express = require('express');
const cors = require('cors')
const router = require('./routes/index');
const db = require('./model/db');

const app = express();
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
db.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

// app.use(cors());
app.set('view engine', 'pug')
app.disable('x-powered-by');
app.listen( process.env.PORT || 3000, ()=> console.log('Server started on port 3000'));
app.use('/', router);