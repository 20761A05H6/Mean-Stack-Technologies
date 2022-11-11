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
nm.insertMany([
		{name:'Akhila',age:19,Id:101,place:'chirala'},
		{name:'Nandu',age:20,Id:102,place:'perala'},
		{name:'pooja',age:20,Id:101,place:'Ramnagar'},


]).then(function(){
	console.log("Data Inserted")
}).catch(function(error){
	console.log(error)
});


