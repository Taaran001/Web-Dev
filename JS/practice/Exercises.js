

// let random = Math.random()
// let a = 2
// let b = 2
// let c = "*"

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**"
// }

// console.log(random);
// if (random<0.1) {

// } else {
//     c = obj[c]
// }


// let result = eval(`${a} ${obj[c]} ${b}`)
// console.log(result)








// const arr = [6,5,4,3,2,1]


// const fac = (n) => {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   };
//   console.log(fac(6));


// const red = (a,b)=>{
//     return a*b
// }
// console.log(arr.reduce(red))









// const box = document.getElementsByClassName('box')

// function getRandomColor(){
//     // a + R (a-b) --->
//     let val1 = Math.ceil(0+Math.random()*255);
//     let val2 = Math.ceil(0+Math.random()*255);
//     let val3 = Math.ceil(0+Math.random()*255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }

// Array.from(box).forEach(e => {
//     e.style.backgroundColor=getRandomColor()
//     e.style.Color=getRandomColor()
// })




document.getElementsByTagName("body")[0].style.backgroundColor = "Green"
document.getElementsByTagName("body")[0].style.fontSize = "30px"

const addItem = async (item) => {
    await randomDelay()
    let div = document.createElement("div")
    div.innerHTML = item
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}




let text = ["Initializing...", "Loading...", "Fetching...", "Processing...", "Done!"]
for (const i of text){
    addItem(i)
}
