const express=require("express");
const app = express();
const path=require("path");
const port = 8080;

app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData =require("./data.json");
    const Data=instaData[username];
   if(Data){
    res.render("instagram.ejs",{Data});
   }else{
     res.render("error.ejs");
   }
    
})
app.get("/",(req,res)=>{
    res.send("home.ejs");
});

app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval});
});


app.listen(port,()=>{
    console.log(`Listening on the port ${port}`);
});