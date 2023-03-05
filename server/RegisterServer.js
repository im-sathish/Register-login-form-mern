const express=require('express');
const app=express();
const mongoose= require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Project')
const Register=mongoose.model('Register',{"Name":String,"Email":String,"Mobile":String,"Password":String});
app.use(express.json());
var cors = require('cors');
app.use(cors());

//register server

app.post("/register",async(req,res)=>{
    let body= req['body'];
    let Name = body['Name'];
    let Email= body ['Email'];
    let Mobile= body['Mobile'];
    let Password= body['Password'];
    console.log("in register",body);
    const userToInsert= new Register(
      {'Name': Name,'Email': Email,'Mobile':Mobile,'Password':Password});
      userToInsert.save();
      console.log(Name,Email,Mobile,Password);
      res.set("content-type","application/json");
      res.send({"message":"User is Registered"}); 
    })

    //log in server
    app.post("/login",async(req,res)=>{
    let body= req['body'];
    let Email= body ['Email'];
    let Password= body['Password'];
    const result = await Register.find({"Email":Email,"Password":Password});
    console.log(result);
    res.set("content-type","application/json");

    if(result.length ==1){
    res.send({"message":" LOGIN SUCCESSFULLY"}); 
    }else{
      res.send({"message":" LOGIN failure"});
    }
    //result.length >=0
    //if condition. if data exist return login sucess repons
    //else please proivide login details.
    console.log(Email,Password)
    
  })
    app.listen(8080)