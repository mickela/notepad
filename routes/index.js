const express = require('express');
const router = express.Router();
const Note = require('../model/model');


router.get('/', (req, res)=>{
    res.render('index');
})
router.get('/notes', (req, res)=>{
    // Find all notes
    Note.findAll().then(notes => {
        const note = JSON.stringify(notes, null, 4);
        console.log("All notes:", JSON.stringify(notes, null, 4));
        res.send(note)
    }).catch(err => console.log(err))
})

router.post('/newnote/', (req, res)=>{
    // Create a new note
    Note.create({ title: req.body.title, body: req.body.body }).then(note => {
        console.log("Note's auto-generated ID:", note.id);
    }).catch(err => console.log(err))
    res.redirect('/');

})
router.get('/newnote', (req, res)=>{
    res.render('newnote');
})

router.post('/delete', (req,res)=>{
    // delete note
    Note.destroy({
        where: {
            id: req.body.id
        }
    }).then(res => console.log('Successfully deleted note'))
    .catch(err => console.log(err))
    res.redirect('/');
})


module.exports = router;