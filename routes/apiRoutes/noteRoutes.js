const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    const results = notes;
    res.json(results); 
});
router.post('/notes', (req, res) => {
    if(notes){
        req.body.id = notes.length.toString();
    }
    else {req.body.id = 0}
    res.json(createNewNote(req.body, notes));
});
router.delete('/notes/:id', async (req, res) => {
    const { id } = req.params
    notes = await deleteNote(id, notes);
    res.json(notes);
});

module.exports = router;