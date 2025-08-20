function ok(name){
    console.log("Hey " + name + "u r nice!")
    console.log("Hey " + name + "u r good!")
}

ok("Okok")


function sum(a,b,c=3){
    // console.log(a+b)
    return a+b+c
}
result1 = sum(2,3)
result2 = sum(4,6)
result3 = sum(1,3,1)
console.log("sum is",result1)
console.log("sum is",result2)
console.log("sum is",result3)


const func1 = (x) =>{
    console.log("Arrow function", x)
}

func1(2)
func1(7)
func1(3)

const func = (a,b,c,d,e) =>{
    console.log((a+b+c+d+e)/5)
}

func(1,2,3,4,5)




arr = [1,2,3,4,5]

const newArr = arr.map((e)=>{
    return e**2
})
console.log(newArr);


const greaterThan7 = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(newArr.filter(greaterThan7))



let arr2 = [1,2,3,4,5]
const red = (a,b) =>{
    return a+b
}
console.log(arr2.reduce(red));


