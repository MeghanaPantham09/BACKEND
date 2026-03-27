const mongoose = require('mongoose');


main()
.then(()=>{
    console.log("connection is done.")
})
.catch(err => 
    console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    author:String,
    price:{
        type:Number,
    },
    Discount:{
        type:Number,
        Default:0,
    }

});

const Book = mongoose.model("Book",bookSchema);

let book1= new Book({
    title:"Gone Girl",
    author:"Meghana Pantham",
    price:"399",
})

book1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


Book.findByIdAndUpdate("69c55748f007727ceb6d87f7",
    {
    price:-500
}).then((res)=>{
    console.log(res);
}).catch((err)=>{
console.log(err);
})