const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const {notesStorage}  = require("../../db/db.json");


// router.get('/api/notes',(req, res) =>{
//   //send the json data for notes with res.json
//    res.json(notesStorage);
// });

router.delete('/notes/:id',(req, res) =>{
  //remove the note with this id from the json data and resave the file
});

router.put('/notes/:id',(req, res) =>{
  //update the note with this id and resave the file
});

router.post('/notes',(req, res) =>{
  //create a new note with the req.body values and save it to the file
  const newNote = createNote(req.body, notesStorage);
   res.json(newNote);

});

function createNote(body) {
  const newNote = body;
  const updatedNotes = [];
  fs.readFile(path.join(__dirname, "../db/db.json", 'utf-8'), notes => {
    updatedNotes = [ ...notes, newNote ];
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(updatedNotes, null, 2)
    );
   
  });
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
