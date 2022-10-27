const router = require('express').Router();
const { createNewNote, deleteNote, updateNote } = require('../../lib/notes');
const id = require('uuid');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    const results = notes;
    if (req.query) {
        res.json(results);
    }  else {
        res.send(404);
    }
});
router.post('/notes', (req, res) => {
    req.body.id = id.v4();
    const note = createNewNote(req.body, notes);
    res.json(note);
});
router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});
router.put('/notes/:id', (req, res) => {
    const result = updateNote(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

module.exports = router;