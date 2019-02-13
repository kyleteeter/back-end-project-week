const express = require('express');

const notes = require('../helper/helper.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/notes', async (req, res) => {
  const rows = await notes.getAll();

  res.status(200).json(rows);
});

server.post('/notes', async (req, res) => {
    const noteData = req.body;
   console.log(noteData)
    if (gameData.title && noteData.genre) {
      const ids = await games.insert(noteData);
      res.status(201).json(ids);
    } else {
      res.status(422).json({error: 'missing important information'})
    }

})

module.exports = server;