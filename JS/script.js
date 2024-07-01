// alert("Hello this is alert")

// console.log("Code is running...")
// console.log("Code is ok...")
// console.log("Code is nice...")

// var a = prompt("Enter your number")
// var isTrue = confirm("Arre you sure")
// if(isTrue){
//     console.log("sure..")
// }

// else{
//     console.log("Yess")
// }

// console.log("Your number is " + a)

// document.title = "Hello changing title from js"

// document.body.style.backgroundColor = "red"

console.log("Hey this is Js");

var a = 5; // var is global variable 
var b = 6;
var c = "OK";

console.log(a+b+c);
console.log(typeof a, typeof b, typeof c);

const d = 55; //we can not change value of constant 

let e = 38; // let is local variable and it is better than var

{
    let e = 30;
    var a = 10;
    console.log(a);
    console.log(e);
}

console.log(a)
console.log(e)


let x = "Okk bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

let o ={
    name: "acha",
    "job code": 5600
}
console.log(o)

o.salary="10cr";
console.log(o)