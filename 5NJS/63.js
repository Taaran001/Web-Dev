let arr = [1,3,5,7,3]
// console.log(arr)
// console.log(arr[3])
// console.log(arr.length)

// arr[1]=100
// console.log(arr, typeof(arr))
// console.log(arr.toString())
// console.log(arr.join("+"))
// console.log(arr.pop())
// console.log(arr.push(45))
// console.log(arr.shift())
// console.log(arr.unshift("haha"))
// console.log(arr.sort())

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(i)
// }

// arr.forEach(element => {
//     console.log(arr[element])
// });


// let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // }
    // for (const i in obj) {
        //     if (Object.prototype.hasOwnProperty.call(obj, i)) {
            //         const element = obj[i];
//         console.log(i, element)
//     }
// }



const a = [1,3,4,5,80];
let Narr = a.map((e)=>{
    return e
})
// console.log(Narr)

// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     Narr.push(element)
// }
// console.log(Narr)
// const great7 = (e)=>{
//     if (e>7) {
//         return true
//     }
//     return false
// }
// console.log(Narr.filter(great7))
const red = (a,b)=>{
    return a*b
}
console.log(a.reduce(red))
