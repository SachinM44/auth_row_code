const express = require("express");
const app =express();
const mongoose= require("mongoose");
const { string } = require("zod");
mongoose.connect("mongodb+srv://xxdev123:mahindra123@cluster0.uwvstmj.mongodb.net/");
const user = mongoose.model("user", {name:String,email:String,password:String});

app.post("/signin", async function(req,res){
  const username=req.body.username;
  const email=req.body.email;
  const password=req.body.password;
   
  const existUser= await user.findOne({name:string})
  if(existUser){
      return res.status(400).send("user already exist")
  }
});
const user1=new user1({
  name: name,
  email:email,
  password:password
});
user1.save();
res.send("usre created succsesfully")
app.listen(3400)