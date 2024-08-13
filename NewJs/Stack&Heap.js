// Stack and Heap is a memory


//  Stack (Primitive) , Heap (Non-Primitive)

let myYT = "okokok"
let YT = myYT // It is Primitive so it is stack
YT = "acha"

console.log(myYT);
console.log(YT);

let one = {  // It is Non-Primitive 
    ok : 21,
    upi: "one@one"
}

let two = one

two.ok = 123;

console.log(one.ok)
console.log(two.ok)
