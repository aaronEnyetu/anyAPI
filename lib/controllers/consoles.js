const { Router } = require('express');
const Console = require('../models/Console');
const router = Router();


router
  .get('/:id', async (req, res) => {
    console.log('id param:', req.params.id); //eslint-disable-line
    const gameConsole = await Console.getById(req.params.id);
    console.log(console); //eslint-disable-line
    res.json(gameConsole);
  })
  .get('/', async (req, res) => {
    // console.log(cats);
    const consoles = await Console.getAll();
    const ids = consoles.map((console) => ({ id: console.id, name: console.name }));
    // console.log(ids);
    res.json(ids);
  });

module.exports = router;
