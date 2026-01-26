const mongoose = require ('mongoose');

// Define the person schema
const PersonSchema= new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    work: {
        type:String,
        enum:[ 'waiter' , 'chef', 'manager'],
        required:true
    },
    mobile:{
        type: String,
        required:true
    },
    address:{
        type:String,

    },

    email: {
  type: String,
  unique: true,
  required: true,
  match: [/^\S+@\S+\.\S+$/, 'Invalid email address']
}
    ,
    salary:{
        type : Number,
        required:true
    }
});

//Create person model
const Person=mongoose.model('Person', PersonSchema);
module.exports= Person;