const express = require('express'); 
const router = express.Router();
const menuItem=require('../menuItem');


//POSt for menu items

router.post('/', async (req,res)=>{
try{
const Data=req.body

const newmenu = new menuItem(Data);

const Response = await newmenu.save();
console.log('Data Saved')
res.status(200).json(Response);
}
catch(err){
console.log(err);
        res.status(500).json({error:"Internal server error"});
}
})


//For tast parameters like we did in person for work type

router.get('/:tasteType', async (req,res)=>{
try{
const tasteType = req.params.tasteType;
if(tasteType=='sweet' || tasteType=='spicy' || tasteType=='salty'){
const response = await menuItem.find({taste:tasteType});
console.log('response fetched');
res.status(200).json(response);
}

else{
    res.status(404).json({error:'invalid taste type'});
}
}
catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});

}
}
)

//GET for menuItem

router.get('/',async (req,res)=>{
    try{
const Data = await menuItem.find();
console.log("Data Fetched");
res.status(200).json(Data);
    }

    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal error"});

    }
})

 module.exports = router;