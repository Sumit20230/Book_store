const express=require('express');
const app=express.Router();
const books=require('./models/bookmodel');





app.post('/books',async(req,res)=>{
const {name,year,author}=req.body;
if(!name || !year || !author)
return res.send({message:'something is misssing'});
try{
const data= new books({name,year,author});
data.save();
return res.status(200).json(data);
}catch(e){
    console.log(e);
    return res.send({message:"vgdghfsfsfd"});
}
})
app.get('/books',async(req,res)=>{
  const data= await books.find({});
  try{
      return res.status(200).json(data);
  }
  catch(e)
  {
    console.log(e);
    return res.send({message:"No data"});
  }
})
app.get('/books/:id',async(req,res)=>{
    const {id}=req.params;
    const data= await books.findById(id);
    try{
        return res.status(200).json(data);
    }
    catch(e)
    {
      console.log(e);
      return res.send({message:"No data"});
    }
  })
  app.put('/books/:id',async(req,res)=>{
    try{
     const id=req.params.id;
     const data= await books.findByIdAndUpdate(id,req.body);
     if(!data)
     return  res.status(500).send({message:"errotr"})
     return res.status(200).json(data);

    }catch(e)
    {
        console.log(e);
       return  res.status(500).send({message:"error"})
    }
  })
  app.delete('/books/:id',async(req,res)=>{
    try{
    const id=req.params.id;
     const data= await books.findByIdAndDelete(id);
     
     return res.status(200).send("deleted successfully");

    }catch(e)
    {
        console.log(e);
       return  res.status(500).send({message:"error"})
    }
  })
 
  module.exports=app;