let arr = []
let num = 6
for (let i = 1; i < num+1; i++) {
    arr.push(i)
}
const red = ((a,b)=>{
    return a*b
})
console.log(arr.reduce(red))
