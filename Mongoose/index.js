const mongoose = require('mongoose');


main().then(()=>{
    console.log("connection is done.")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema =new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User",userSchema);


User.findByIdAndDelete('69c51b6133190a22fd86204d',{returnDocument:"after"}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});


// User.findOneAndDelete({name:"Eve"},{returnDocument:"after"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.deleteMany({age:{$gt:45}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// User.findByIdAndUpdate("69c51cdb96fbc7c5068901ac",{age:100},{returnDocument:"after"})
// .then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


// Inserting One

// const user1 = new User({name:"Adam",email:"adam@yahoo.in",age:48});
// const user2 = new User({name:"Eve", email:"eve@gmail.com",age:28});

// user1.save();
// user2.save().then((res)=>{
//     console.log(res);
// })
// .catch(err=>
//     {console.log(err);
//     });

// inserting many users

// User.insertMany([
//     {name:"Tony",email:"tony@gmail.com",age:50},
//     {name:"Peter",email:"peter@gmail.com",age:90},
//     {name:"Bruce",email:"bruce@gmail.com",age:60},
// ]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err);
// })

// User.findById("69c51cdb96fbc7c5068901ac").then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })