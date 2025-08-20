// if
// <, >, <=, >=, ==, !=, ===, !==

const balance = 1000

if (balance < 500){
    console.log("Less than 500")
}else if (balance < 750){
    console.log("Less than 750")
}else if(balance < 900){
    console.log("Less than 900")
}else{
    console.log("Less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("Default");
        break;
}

const  userEmail = ""
if (userEmail) {
    console.log("Got user mail");
}else if(userEmail.length === 0){
    console.log("Don't have mail");
}

// falsy values 
// false, 0, -0, BigInt - 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

const empty = {}

if (Object.keys(empty).length === 0){
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10

console.log(val1);

// Terniary Operator

const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80");