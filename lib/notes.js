const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )
    return note;
};
function deleteNote(id, notesArray) {
    for (let i = 0; i < notesArray.length; i += 1) {
        const note = notesArray[i];
        if (note.id === id) {
            notesArray.splice(i, 1);
            updateNote(notesArray);
            break;
        }
    }
}
function updateNote(notes) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes }, null, 2),
        (err) => {
            if (err) throw err;
            return true;
        }
    );
}

module.exports = { createNewNote, deleteNote, updateNote };