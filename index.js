const express=require("express");
let app =express();
let port=8080;

 app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
 });
//  app.get('/',(req,res)=>{
//  res.send("Hello is a root path");
//  });
//  app.get('/apple',(req,res)=>{
//  res.send("hey it's a apple path");
//  });
//  app.get('/mango',(req,res)=>{
//    res.send("this is a mango path");
//  });
//  app.post("/",(req,res)=>{
//    res.send("this is the post ");
//  })

//  app.use((req,res)=>{
// res.send("sry Ur on the wrong path");
//  });

app.get('/:username/:id',(req,res)=>{
   let {username ,id} = req.params;
   console.log(`${id}`);
   res.send(`<h1>Hello welcome the username is  @${username}</h1>`);
});
app.get("/search",(req,res)=>{
let {q}=req.query;
if(!q){
   res.send(`no searched results`);
}else{
   res.send(`search results are ${q}`);
}
});