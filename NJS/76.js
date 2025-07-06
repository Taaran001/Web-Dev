// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000)
//     })
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.text()
      console.log(data);
}

async function main() {
console.log("loading");
console.log("something else");
console.log("Load data");
let data = await getData()

    console.log(data);
    console.log("done");
}
main()
// data.then((data) => {
//     console.log(data);
//     console.log("done");
// })
