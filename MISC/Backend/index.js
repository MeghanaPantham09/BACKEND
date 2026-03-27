const express=require("express");
let app = express();
const port = 8080;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,password} =req.query;
    res.send(`Standard GET response ${user} and password ${password}`);
});

app.post("/register",(req,res)=>{
  let {user,password}=req.body;
    res.send(`Standard post response  Welcome${user}!`);
});

app.listen(port,()=>{
    console.log(`Listening to the ${port}`);
});