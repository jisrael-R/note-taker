const path  = require('path');
const fs = require('fs');
const uuid = require('uuid');
const router = require('express').Router();





//api
router.get("/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../../db/db.json"), (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        res.json(notes);
    })
});


router.post("/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "../../db/db.json"), (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const createNewNote = req.body;
        createNewNote.id = uuid.v4();
        notes.push(createNewNote);

        const createNote = JSON.stringify(notes);
        fs.writeFile(path.join(__dirname, "../../db/db.json"), createNote, (err) =>{
            if (err) throw err;
        });
        res.json(createNewNote);
    });
});

router.delete("/notes/:id", function(req, res) {
    const noteID = req.params.id;
    fs.readFile(path.join(__dirname, "../../db/db.json"), (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        const notArr = notes.filter(item => {
            return item.id !== noteID
        });
        fs.writeFile('./db/db.json', JSON.stringify(notArr), (err, data) => {
            if (err) throw err; 
            res.json(notArr) 

        });
    });

});

module.exports = router;