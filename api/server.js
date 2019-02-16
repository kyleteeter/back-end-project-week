const express = require('express');
const cors = require('cors');
const db = require('../helper/helper.js');

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/notes', async (req, res) => {
  const notes = await db.getAll();

  res.status(200).json(notes);
});

server.get('/notes/:id', (req, res) => {
  const {id} = req.params;
  db.getById(id)
      .then(note => {
          res.json(note) 
      })
      .catch(err => res.status(500).json({err: `No note with id of ${id} exists.`}));
})


server.post('/notes', async (req, res) => {
    const noteData = req.body;
   console.log(noteData)
    if (noteData.title && noteData.text) {
      const ids = await db.insert(noteData);
      res.status(201).json(ids);
    } else {
      res.status(422).json({error: 'missing important information'})
    }
})

server.put('/notes/:id', async (req, res) => {
  const {id} = req.params;
  const note = req.body;
  console.log(note.title);
  if (note.title && note.text) {
      try {
          const updatedId = await db.editNote(id, note);
          console.log(updatedId);
          res.status(200).json(updatedId);
      }
      catch(error) {
          console.log(error);
          res.status(404).json({errorMessage: `No note found with id: ${id}.`});
      }
  }
  else {
      res.status(422).json(
          {errorMessage: 'This endpoint expects both a title and content in the note object.', 
          received: note }
      );
  }
});


server.delete('/notes/:id', (req, res) => {
    const {id} = req.params;
    db.deleteNote(id)
    .then(rowCount => {
        const success = `Successfully deleted note with id ${id}`
        res.status(201).json(success)
    }).catch(err => {
        res.status(500).json({err: 'Failed to delete note'})
    })
});


module.exports = server;
