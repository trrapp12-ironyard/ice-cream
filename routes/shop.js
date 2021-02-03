const path = require('path')//step 1 require express

const express = require('express');

const rootDir = require('../util/path')
//step 2 create router object
const router = express.Router();
//step 4 build routers
router.get('/shop', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views' , 'shop.html'))
});
//step 3 export routers
module.exports = router;
//step 5 go to app.js file and import modules
