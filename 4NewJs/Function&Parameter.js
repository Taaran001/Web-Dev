
function add(num1, num2){
    return num1+num2; 
}

const result = add(2,3)
console.log(result)


function login(username = "lol"){
    if(!username){
        console.log("Enter a Username");
        return
    }
    return `${username} logged in`
}

console.log(login("okok"))


function calculate(val1, vale2, ...num1){
    return num1 
}
console.log(calculate(200,300,100,201,30502,4,20402,2))

const user = {
    name :"lolllol",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Name is ${anyobject.name} & price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    name: "acha",
    price: 499
})

const Arr = [200, 300, 400, 600]

function ReturnSecValue(getArr){
    return getArr[1]
}
console.log(ReturnSecValue(Arr));

const chai = () => {
    let username = "achaxd"
    console.log((this));    
}

chai()

const addition = (num1,num2) => {
    return num1+num2
}
console.log(addition(1,2));


const addit = (num1,num2) => (num1+num2)
console.log(addit(1,2));