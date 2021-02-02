// const http = require('http');
// const fs = require('fs');
// const port = 8080;
//
// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type' : 'text/html'})
//   fs.readFile('index.html', function (error, data) {
//     if (error) {
//       res.writeHead(404)
//       res.write('Error: File Not Found')
//     } else {
//       res.write(data)
//     }
//     res.end()
//   })
// })
//
// server.listen(port, function (error) {
//   if (error) {
//    console.log('there was an error: ' + error)
//  } else {
//    console.log("server is listening on port: " + port)
//  }
// })


//third party express
const express = require('express');
//import body parser
const bodyParser = require('body-parser');
//create express app
const app = express();
//this is middle ware to parse the body for POST requests.  It will not work on files or JSON
app.use(bodyParser.urlencoded({extended: false}));

//add middleware here by calling the use() method
app.use('/add-product', (req, res, next) => {
  res.send('<form action="/product" method="POST"><input type="text" name="title" <button type="submit">Add Product</button></form>')
})

app.use('/', (req, res, next) => {
  next();
})

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  res.send()
})

app.listen(8080);
