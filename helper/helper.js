const db = require('../data/dbConfig.js');

module.exports = {
    insert,
    getAll,
};

function getAll() {
    return db('notes');
  }

  function insert(note) {
    return db('notes').insert(note);
}