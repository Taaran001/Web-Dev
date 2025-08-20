
let age = 0;
let grace = 2; 

// age+=grace
console.log(age)

// console.log(age+grace)
// console.log(age*grace)
// console.log(age/grace)
// console.log(age-grace)
// console.log(age%grace)
// console.log(age**grace)

if(age>18){
    console.log("You can Drive")
}

if (age==18){
    console.log("You can drive")
}
if((age+grace)>18){
    
    console.log("You can Drive")
}
else if(age==0){
    console.log("Are u kidding?")
}
else{
    console.log("You can't drive")
}

let c = a > b? (a-b):(b-a)

/*
means:
if(a>b){
    let c = a-b;
}
else{
    let c = b-a;
}
*/