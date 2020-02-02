const express = require('express');
const router = express.Router();
const Note = require('../model/model');
const sequelize = require('sequelize');


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

router.get('/edit', (req, res)=>{
    // fetch note data and send to the view for edit
    const id = req.query.id;
    Note.findAll({ where: { id: id } })
    .then(res => JSON.stringify(res))
    .then(note => {

        let result = JSON.parse(note)[0];
        res.render('edit', { id: result.id, title: result.title, body: result.body })
    }).catch(err => console.log(err))

    
})
router.post('/edit', (req, res)=>{
    // update note
    Note.update({ title: req.body.title, body: req.body.body, updatedAt: new Date() }, {
        where: {
            id: req.body.id
        }
    }).then(res => console.log('updated note successfully'))
    .catch(err => console.log(err))
    res.redirect('/');
})

router.post('/search', (req, res)=>{
    // find matching title
    const Op = sequelize.Op
    let title = req.body.title;
    let result;
    Note.findAll({ where: { 
        title: {
            [Op.iRegexp]: title
        } 
    }})
    .then(data => {
        result = JSON.stringify(data);
        console.log(result)
        // res.send(result)
        blood = JSON.parse(result);
        console.log(blood);
        res.render('search', { result: blood, title: title })
        console.log(title)
    })
    .catch(err => console.log(err))
})

module.exports = router;