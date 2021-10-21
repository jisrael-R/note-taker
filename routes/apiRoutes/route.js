const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const {notesStorage}  = require("../../db/db.json");


// router.get('/api/notes',(req, res) =>{
//   //send the json data for notes with res.json
//    res.json(notesStorage);
// });

router.delete('/api/notes/:id',(req, res) =>{
  //remove the note with this id from the json data and resave the file
});

router.put('/api/notes/:id',(req, res) =>{
  //update the note with this id and resave the file
});

router.post('/notes',(req, res) =>{
  //create a new note with the req.body values and save it to the file
  const newNote = createNote(req.body, notesStorage);
   res.json(newNote);

});

function createNote(body, notes){
  const newNotes = body;
  notes.push(newNotes);
   fs.writeFileSync(
      path.join(__dirname,"../../db/db.json"),
      JSON.stringify({notes},null,2)
    );
    return newNotes;

}




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