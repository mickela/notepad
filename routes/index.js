const express = require('express');
const router = express.Router();
const Note = require('../model/model');


router.get('/', (req, res)=>{
    res.render('index');
})
router.post('/newnote/', (req, res)=>{
    // Create a new user
    Note.create({ title: req.body.title, body: req.body.body }).then(note => {
        console.log("Note's auto-generated ID:", note.id);
    });

    console.log(req.body)
    res.redirect('/');
})

router.get('/newnote', (req, res)=>{
    res.render('newnote');
})


router.get('/notes', (req, res)=>{
    // Find all users
    Note.findAll().then(notes => {
        const note = JSON.stringify(notes, null, 4);
        console.log("All notes:", JSON.stringify(notes, null, 4));
        res.send(note)
    });
})


module.exports = router;