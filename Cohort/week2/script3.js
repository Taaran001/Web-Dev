// function setTimeoutPromisified(duration) {
//     return new Promise(function (resolve){
//         setTimeout(resolve, duration)
//     })
// }

// function callback() {
//     console.log("done");
// }
// setTimeoutPromisified(1000).then(callback)




// function callback() {
//     console.log("okkokok");
// }
// setTimeout(function (){
//     console.log("hi");
//     setTimeout(function () {
//         console.log("hello");
//         setTimeout(function () {
//             console.log("hello there");
//         }, 5000);
//     }, 3000);
// }, 1000);





//promise chaining
// setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//      return setTimeoutPromisified(3000).then(function(){
//         console.log("hello");
//         return setTimeoutPromisified(5000).then(function(){
//             console.log("hello there");
//         })
//     })
// })
// console.log("outside");








// async && await

function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
	await setTimeoutPromisified(1000);
	console.log("hi");
	await setTimeoutPromisified(3000);
	console.log("hello");
	await setTimeoutPromisified(5000);
	console.log("hi there");
}
solve();
console.log("donee");
