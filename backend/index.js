//write basic express boliler plate code,
//write express.json middleware
const express=require("express");
const { createTodo, updateTodo } = require("./typs");
const { todo } = require("./db");
const app=express();
app.use(express.json());

app.post("/todo",async (req,res)=>{
  const criatepayload=req.body;
  const parsepayload=createTodo.safeParse(criatepayload);
  if(!parsepayload.success){
    res.status(411).json({
      msg:"you sent wrong input",
    })
    return;
  }
  //put it in mongo
await todo.create({
  title:criatepayload.title,
  description:criatepayload.description,
  complited:false
})
res.json({
  msg:"todo criated"
})
})

app.get("/todos", async function(req,res){
    const todos=await todo.find({});
    res.json({
      todos
    })
})

app.put("/complited",async function(req,res){
   const updatepayload=req.body;
   const parsepayload=updateTodo.safeParse(updatepayload);
  if(!parsepayload.success){
    res.status(411).json({
      msg:"you sent wrong input",
    })
    return;
  }
  await todo.update({
    _id:req.body._id
  },{
    complited:true
  })
res.json({
  msg:"Todo marksd as complited"
})
  })
app.listen(3000);


