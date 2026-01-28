const express = require('express')
const app = express()
const db =require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT =process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello world')
})

app.post('/items',(req,res)=>{
    res.send('Okay bhidu')
})




 // import the router files

  const personRoutes= require('./models/routes/personRoutes');
  app.use('/person',personRoutes);

 // import the router files for menuItems

  const menuRoutes=require('./models/routes/menuRoutes');
  app.use('/menuItem', menuRoutes);

app.listen(PORT, ()=>{
    console.log('Listning to port 3000....')
})