var exp=require('express');
var ap=exp();
var mong=require('mongoose');
mong.connect("mongodb://127.0.0.1:27017/cse_c",(err)=>{
if(err)
console.log("DB is not connected");
else
console.log("Connected"); });
const ns=new mong.Schema({
name:String,
age:Number,
phno:Number,
cell:String
});
var mod=new mong.model("records",ns);
var data=new mod();
data.save();
mod.find({name:'Anil'},function(err,data) {
if(err) {console.log(err);}
else console.log("first function call:",data);
});