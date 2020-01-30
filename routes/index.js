const express = require('express');
const router = express.Router();
const Note = require('../model/model');

router.use(express.static('public'));

router.get('/', (req, res)=>{
    res.render('index.html');
})

router.get('/notes', (req, res)=>{
    // Find all users
    Note.findAll().then(notes => {
        const note = JSON.stringify(notes);
      console.log("All users:", JSON.stringify(notes, null, 4));
      res.send(note)
    });
})

module.exports = router;