const myArr = [0,1,2,3,4,5,]
const myHero = ["shaktiman", 'naggraj']

const myArr2 = new Array(1,2,3,4)
console.log(myArr);

myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(9)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join()
console.log(myArr)
console.log(newArr)

console.log("A", myArr);
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr)
console.log((myn2));

const Mhero = ["thor","ironman","spiderman"]
const DChero = ["superman","flash","batman"]

Mhero.push(DChero)

console.log(Mhero)
console.log(Mhero[3][1])

allhero = Mhero.concat(DChero)
console.log(allhero);

const allNhero = [...Mhero, ...DChero]
console.log(allNhero)

const Arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const anoArr = Arr.flat(Infinity)
console.log(anoArr)


console.log(Array.isArray("ok"))
console.log(Array.from({name: "ok"}))
console.log(Array.from("ok"))

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3))

