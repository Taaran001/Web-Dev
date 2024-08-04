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







const EId = 22
Email = "okok@gmail.com"
Password = "0123"
City = "Delhi"

console.table([EId, Email, Password, City]);