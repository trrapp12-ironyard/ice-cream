//need to include a path library from express so it can figure our what path we are referring to when we serve up a file in .sendFile().  other wise it will think it is the file path on our computer
const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views', 'index.html'))
})

module.exports = router;
