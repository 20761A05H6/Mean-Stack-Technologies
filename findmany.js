const express =require('express');
const app=express();
const mongoose =require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Database",(err)=>{
if(err)
console.log("DB not connected error");
else
console.log("DB connected");
});
const ns=new mongoose.Schema({
name:String,
age:Number,
Id:Number,
place:String
});
const nm=new mongoose.model("records",ns);
nm.find({'age':20},function(err,data){
	if(err){
		console.log(err);
	}
	else{
		console.log("First function call: ",data);
	}
	});