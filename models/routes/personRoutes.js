const express = require('express'); 
const router = express.Router();
const Person = require('../Person');


//POST route to add a person
router.post('/', async (req,res)=>{
    try{
         req.body.work = req.body.work.toLowerCase();
        const data = req.body  // Assuming the request body contains person data



    // create a new person document using mongoose model
    const newPerson = new Person(data);


    // save the new person data to the database
     const response = await newPerson.save();
     console.log("Data Saved");
     res.status(200).json(response);
    }

    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});

    }

})

//GET to get data of person

 router.get('/', async (req,res)=>{

    try{
        const data= await Person.find();
          console.log("Data fetched");
     res.status(200).json(data);


    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});

    }

 })

 //Passing a parameterlike localhost:3000/person/:work
 
 
  router.get('/:workType', async  (req,res)=>{
     try{
 const workType = req.params.workType;
 if( workType=='waiter' || workType== 'chef' || workType=='manager'){
     const Response = await Person.find({work:workType});
     console.log('respons fetched');
     res.status(200).json(Response);
 }
 else{
     res.status(404).json({error:'Invalid work type'});
 }
     }
 
     catch(err){
 console.log(err);
  res.status(500).json({error:'Internal server error'});
     }
  })


  router.put('/:id', async (req,res)=>{
    try{
const personId = req.params.id;
const updatedPersonData = req.body;

const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
    new: true, // Return the updated document
      runValidators: true, // Run Mongoose validation

})
if(!response){
    return res.status(404).json({error: 'Person not found'});
}
console.log('data updated');
res.status(200).json(response);
    
  }
  catch(err){
console.log(err);
  res.status(500).json({error:'Internal server error'});
    }
}
)


// Delete parameter

router.delete('/:id', async (req, res)=>{
    try{
const personId = req.params.id;
const response = await Person.findByIdAndDelete(personId);
if(!response){
    res.status(404).json({error: ' person not found'});
}
console.log('Data deleted')
res.status(200).json({message: ' person removed succsfully'});

    }
catch(err){
console.log(err);
  res.status(500).json({error:'Internal server error'});
}

})
 

 module.exports = router;