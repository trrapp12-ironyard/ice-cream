//step 1 require express
const express = require('express');
//step 2 create router object
const router = express.Router();
//step 4 build routers
router.get('/', (req, res, next) => {
  res.send('<h1>Hellow from Express</h1>')
});
//step 3 export routers
module.exports = router;
//step 5 go to app.js file and import modules
