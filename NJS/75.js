// console.log("hello1");
// console.log("hello2");
// setTimeout(() => {
//     console.log("Hello 3");

// }, 100);

// console.log("Hello 4");



// const callback = (arg)=>{
//     console.log(arg);

// }

// const loadScript = (src, callback) => {
//     let sc = document.createElement("script");
//     sc.src = src
//     sc.onload = callback("ookok")
//     document.head.append(sc)
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)






let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("Not supporting")
    }
    else{
        setTimeout(() => {
            console.log("done");
            resolve("okok")
        }, 2000);

    }
})
let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("Not supporting 2")
    }
    else{
        setTimeout(() => {
            console.log("done 2");
            resolve("okok 2")
        }, 2000);

    }
})

let p3 = Promise.allSettled([prom1, prom2])

p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
