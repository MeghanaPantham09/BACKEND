// let n=5;
// for(let i=1;i<n;i++){
//     console.log("hello",i);
// }
// console.log("bye..!!");

// let args = process.argv;

//  for(let i=2;i<args.length;i++){
//     console.log("hello to",args[i]);
//  }

// const someval=require("./math");
// console.log(someval.summ(8,8));
// console.log(someval.mull(8,8));
// console.log(someval.Pi);
// console.log(someval.M);

//  const fru=require("./Fruits");
//  console.log(fru[0].name);
import {sum,PI}from"./math.js";
console.log(sum(1,2));
console.log(PI);
import {generate} from "random-words";
console.log(generate());