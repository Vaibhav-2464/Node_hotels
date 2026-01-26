const mongoose = require ('mongoose')

const mongoURL = 'mongodb://localhost:27017/hotel'

mongoose.connect(mongoURL)
 .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

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