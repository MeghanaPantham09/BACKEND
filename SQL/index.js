const { faker } = require('@faker-js/faker');
const mysql =require("mysql2");
const express=require("express");
const app =express();
const path=require("path");
const methodOverride=require("method-override");
const { v4: uuidv4 } = require('uuid');


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const connection =mysql.createConnection({
    host:"localhost",
    user:'root',
    database:"MEGHANA",
    password:'ajaypantham@5044'
});

let  getRandomUser =()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(),
   faker.internet.email(),
     faker.internet.password(),
  ];
}

// try{
// connection.query(q,[data],(err,result)=>{
//     if(err) throw err;
//   console.log(result);
// })
// }catch(err){
//     console.log(err);
// }

//home route
app.get("/",(req,res)=>{
  let q = " SELECT COUNT(*) FROM `user`";
  try{
connection.query(q,(err,result)=>{
    if(err) throw err;
let count = result[0]["COUNT(*)"];
  console.log(count);
  res.render("home",{count});
})
}catch(err){
    console.log(err);
    res.send("some error in DB");
}
})


//show route
app.get("/user",(req,res)=>{
  let q= `SELECT * FROM user`;
  try{
connection.query(q,(err,users)=>{
    if(err) throw err;
res.render("showusers.ejs",{users})
  // res.send(result);
})
}catch(err){
    console.log(err);
    res.send("some error in DB");
}
})


//Edit Route 
app.get("/user/:id/edit",(req,res)=>{
  let {id} = req.params;
  let q=`SELECT * FROM user WHERE Id='${id}'`;
  try{
connection.query(q,(err,result)=>{
    if(err) throw err;
   let user = result[0];
res.render("edit.ejs",{user});
})
}catch(err){
    console.log(err);
    res.send("some error in DB");
}
})

//update route
app.patch("/user/:id",(req,res)=>{
  let {id} = req.params;
  let {password:formpass,username:newUsername}=req.body;
  let q=`SELECT * FROM user WHERE Id='${id}'`;
  try{
connection.query(q,(err,result)=>{
    if(err) throw err;
   let user = result[0];
   if(formpass!=user.password){
res.send("Wrong password");}
else{
  let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
  connection.query(q2,(err,result)=>{
    if(err )throw err;
    res.redirect("/user");
  });
}
})
}catch(err){
    console.log(err);
    res.send("some error in DB");
}
})

//add new user
app.get("/users",(req,res)=>{
  res.render("adduser.ejs");
})
app.post("/users",(req,res)=>{
 
  let {username,password,email}=req.body;
   let id = uuidv4();
  let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;
  try{
connection.query(q,(err,result)=>{
    if(err) throw err;
  console.log("query working");
  res.redirect("/user");
})
}catch(err){
    console.log(err);
}
});

app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE Id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("del.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

    
 app.listen(8080,()=>{
  console.log("server is listening to the port 8080");
 })

