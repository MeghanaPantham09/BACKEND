const mongoose=require("mongoose");
const Chat = require("./models/chat");

main().then(()=>{
    console.log("Connection Successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let Allchats=[
    {
        from:"neha",
        to:"preeti",
        msg:"HI preetie ,how are you?",
        created_at: new Date(),
    },
     {
        from:"meghana",
        to:"amoolya",
        msg:"Lets enjoy Life to the Fullest",
        created_at: new Date(),
    },
     {
        from:"Lucky",
        to:"Milky",
        msg:"Lets Take some Snaps",
        created_at: new Date(),
    },
     {
        from:"Balu",
        to:"Lucky",
        msg:"Can you please buy me Atomic Habits Book",
        created_at: new Date(),
    }

]

Chat.insertMany(Allchats);

