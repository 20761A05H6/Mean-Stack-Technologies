const express =require('express');
const app=express();
const mongoose =require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE_C",(err)=>{
if(err)
console.log("DB not connected error");
else
console.log("DB connected");
});
const ns=new mongoose.Schema({
name:String,
age:Number,
phno:Number
});

const nm=new mongoose.model("records",ns);
nm.deleteOne({name:'madhu'}).then(function(){
	console.log("Data Deleted")
}).catch(function(error){
	console.log(error)
});