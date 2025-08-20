const myNums = [1,2,3,4,5,6,7,8,9,10] 
let newNums = myNums.filter( (num) => num> 4)
const newNum = myNums.filter( (num) => {
    return num > 4
})

const newNu = []
myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})

console.log(newNums);
console.log(newNum);










const nNum = myNums.map((num) => num+10)
console.log(nNum);

const NNums = myNums.map((num)=> num*10).map(num => num+1).filter((num)=> num >= 40)
console.log(NNums);









const num = [1,2,3]

const total = num.reduce(function (acc, currval) {
    console.log(`acc: ${acc} & currval: ${currval}`);
    return acc +currval
},0)

console.log(total);

const myTotal = num.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);


const shopping = [
    {
        itemName: "JS",
        price: 2999
    },
    {
        itemName: "PY",
        price: 4999
    },
    {
        itemName: "DSA",
        price: 6999
    },
    {
        itemName: "Cpp",
        price: 1999
    }
]

const totalP = shopping.reduce((acc, item)=>acc+item.price,0)
console.log(totalP);