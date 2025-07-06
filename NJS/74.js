// let btn = document.querySelector(".btn")
// btn.addEventListener("Clipboard", ()=>{
//     // document.querySelector(".box").innerHTML = "Clicked"
//     btn.innerHTML = "clicked"
// })
// document.addEventListener("keydown", (e)=>{
//     // document.querySelector(".box").innerHTML = "Clicked"
//     console.log(e.key);
// })





// document.querySelector(".container").addEventListener("click", (e)=>{
//     // document.querySelector(".box").innerHTML = "Clicked"
//     alert("container")
// })
// document.querySelector(".child").addEventListener("click", (e)=>{
//     // document.querySelector(".box").innerHTML = "Clicked"
//     alert("child")
// })
// document.querySelector(".children").addEventListener("click", (e)=>{
//     // document.querySelector(".box").innerHTML = "Clicked"
//     e.stopPropagation()
//     alert("children")
// })




function getRandomColor(){
    // a + R (a-b) --->
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 = Math.ceil(0+Math.random()*255);
    let val3 = Math.ceil(0+Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

// setInterval(() => {
//     document.querySelector(".children").style.background = getRandomColor()
// }, 500);

setTimeout(() => {
    document.querySelector(".children").style.background = getRandomColor() 
}, 3000);
