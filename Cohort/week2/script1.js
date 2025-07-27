/*
function sum(a,b) {
    return a +b
 }
let ans = sum("3","5")
let ans2 = sum("3",59)
let ans3 = sum(parseInt("4") , parseInt("5"))
let ans4 = sum(parseInt("3") , parseInt(10))
console.log(ans);
console.log(ans2);
console.log(ans3);
console.log(ans4);
*/


/*
function sum(n){
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}
let ans = sum(100)
console.log(ans);
*/


/*
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
*/


// const fs = require("fs")
// const data = fs.readFileSync("a.txt", "utf8")
// console.log(data);





// function sum(a,b) {
//     return a+b
// }
//  function doop(a,b,op) {
//     return op(a,b)
//  }

// console.log(doop(2,4,sum));




console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 1000);

console.log("Welcome to loupe.");


let c = 0
for (let i = 0; i < 10000000000; i++) {
    c +=1
}
console.log("Done!!!!");
