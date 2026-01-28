require('dotenv').config();
const mongoose = require ('mongoose')


//const mongoURL = process.env.MONGODB_URL_LOCAL
console.log('MONGO URL:', process.env.MONGODB_URL); 

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB Server Error', err));

  const db=mongoose.connection;

db.on('connection',()=>{
    console.log('Connected To MongoDB Server');
});

db.on('disconnection',()=>{
    console.log('Dis-Connected To MongoDB Server');
});
db.on('error',(err)=>{
 console.error(' MongoDB Server Error', err);   //Here they use error in console and also at end err
});



module.exports=db;