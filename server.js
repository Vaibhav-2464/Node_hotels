const express = require('express')
const app = express()
const db =require('./db');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

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

app.listen(3000, ()=>{
    console.log('Listning to port 3000....')
})