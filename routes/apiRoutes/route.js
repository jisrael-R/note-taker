
const path = require('path');
const router = require('express').Router();
// const {
//     getNotes,
//     saveNote,
//     deleteNote}= require('../../public/assets/js/index');
const { notesStorage } = require("../../db/db.json");


// router.post('/api/notes', (req,res)=>{
//     const newNote = saveNote(req.body,notesStorage);
//     res.json(newNote);
// });





router.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname,'../../public/index.html'));
});
router.get('/notes',(req, res) =>{
    res.sendFile(path.join(__dirname,'../../public/notes.html'));
});
router.get('*',(req, res)=>{
  res.sendFile(path.join(__dirname,'../../public/index.html'));
});



module.exports= router;