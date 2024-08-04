const promisOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task is compelte");
        resolve()
    },1000)
})

promisOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async2 task is completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 consumed");
})

const promise3 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({name: "ok", email: "okok@gmail.com"})
    }, 1000);
})

promise3.then(function(user){
console.log(user);
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "okok", password: "123"})
        }else{
            reject('Error happen')
        }
    }, 1000);
})
promise4.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("Finally..."))


const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "JS", password: "123"})
        }else{
            reject('Error of JS happen')
        }
    }, 1000);
});

async function consume(){
    try{
        const response = await promise5
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consume()


async function users(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    }catch(error){
        console.log("Error");
    }
}
users()


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>console.log(error))




