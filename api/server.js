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

module.exports = server;
