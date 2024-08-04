// for loops

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5){
        console.log("This is 5");
    }
    console.log(element);
    
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop: ${j}`);
        console.log(i + "*" + j + ' = ' + i*j);
        
    }    
}

let Arr = ["flash", "superman", "batman"]
for (let i = 0; i < Arr.length; i++) {
    const element = Arr[i];
    console.log(element);
}




// break and continue

for (let i = 0; i < 10; i++) {
    if (i===5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`i = ${i}`);    
}


for (let i = 0; i < 10; i++) {
    if (i===5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`i = ${i}`);    
}







console.log(`WHILE LOOPS`);
let a = 0
while (a <= 10) {
    console.log(`a = ${a}`);
    a+=2
}


ok = 0
while (ok < Arr.length) {
    console.log(`Hero is ${Arr[ok]}`);
    ok+=1
}


let score = 1
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);





console.log("HIGH ORDER");

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`char is ${greet}`);
}



console.log("MAPS");

const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('Fr', "France")
map.set('IN', "India")
console.log(map);

for (const [key, value] of map) {
    console.log(key,':', value);
}

const Obj = {
    g1 : "valo",
    g2 : "pecify",
    g3 : "bgmi"
}
console.log("For in loop");

for (const key in Obj) {
   console.log(key,Obj[key]);
}
const lang = ['js','rb','py','java','cpp']
for (const key in lang) {
    console.log(key, ':', lang[key]);
}



let code = ['js','rb','py','java','cpp']
code.forEach(element => {
    console.log(element);
});

function print(key){
    console.log(key);
}

code.forEach(print)

code.forEach((item, index, arr) => {
    console.log(item, index, arr);
});


const coding = [
    {
        langName: "JavaScript",
        langFileName: "JS"
    },
    {
        langName: "python",
        langFileName: "python"
    },
    {
        langName: "Java",
        langFileName: "Java"
    }
]

coding.forEach(i => {
    console.log(i.langName, i.langFileName);
})






console.log("Filter map and reduce");

const nums = [1,2,3,4,5,6,7,8,9,10]
const newNum = nums.filter((num) => {
    return num >4
})
console.log(newNum);

const newNums = []
newNum.forEach( (num) => {
    if(num >4){
        newNums.push(num)
    }
} )
console.log(newNums);


const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNumss = myNums.map ((num) => {return num+10})
console.log(newNumss);