const express = require('express');

const Router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send('<h1>The "Add Product" Page</h1>');
})

router.get('/product', (req, res, next) => {
  console.log(req.body)
  res.send('<h1>The "Add Product" Page</h1>');
})

module.exports = Router;
