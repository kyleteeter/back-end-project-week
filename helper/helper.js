const db = require('../data/dbConfig.js');

module.exports = {
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