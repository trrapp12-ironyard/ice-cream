//third party package express. Express will handle parsing server requests
const express = require('express');
//import body parser
const bodyParser = require('body-parser');
//create express app.  Express outputs a function with will build an object.  We have to instantiate that object to build the app
const app = express();
//import personal middleware with router objects we made in our admin.js file
const adminRoutes = require('./routes/admin.js');

const shopRoutes = require('./routes/shop.js');

const indexRoutes = require('./routes/index.js')
//this is middle ware to parse the body for POST requests.  It will not work on files or JSON.  Notice we are using the app object now and using dot notation to call the needed methods
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).send(<h1>404: page not Found</h1>)
})

app.listen(8080);
