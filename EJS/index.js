const express= require("express");
let app =express();
const port =8080;
const path=require("path");

app.use(express.static(path.join(__dirname,"public/css")));  
app.use(express.static(path.join(__dirname,"public/js")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/home",(req,res)=>{
    res.send("home");
})
app.get("/rolldice",(req,res)=>{
    let dicevalue= Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{dicevalue:dicevalue});
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
const instaData=require("./data.json");
const data=instaData[username];
console.log (data);
if(data){
 res.render("instagram.ejs",{data});
}else{
    res.render("error.ejs");
}
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});