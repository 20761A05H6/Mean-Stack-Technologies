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
nm.insertMany([
		{name:'swathi',age:19,phno:1234567890},
		{name:'madhu',age:19,phno:9876543210},
		{name:'aradhana',age:19,phno:9876123450},


]).then(function(){
	console.log("Data Inserted")
}).catch(function(error){
	console.log(error)
});
