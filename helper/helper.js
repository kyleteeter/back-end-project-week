const db = require('../data/dbConfig.js');

module.exports = {
  deleteNote,
  editNote,
    insert,
    getById,
    getAll,
};

function getAll() {
    return db('notes');
  }

function insert(note) {
    return db('notes').insert(note);
}

function getById(id) {
  return db('notes').where('id', id);
}

function editNote(id, note) {
  console.log(`id: ${id}`)
  return db('notes').where('id', id).update({title: note.title, text: note.text})
}

function deleteNote(id) {
  return db('notes').where('id', id).del();
}