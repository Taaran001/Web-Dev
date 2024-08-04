let a = 300
if(true){
    let a = 10 
    const b = 20 
    console.log(a);
}

console.log(a);


function one(){
    const name = "okok"

    function two(){
        const site = "vscode"
        console.log(name);
    }
    // console.log(site);

    two()
}

one()


if(true){
    const name = "lollol"
    if(name === "lollol"){
        const site = " JS"
        console.log(name + site);
    }
    // console.log(site);
}

// console.log(name);




function addone(num){
    return num+1
}
addone(5)

const addTwo = function(num){
    return num+2
}
addTwo(5)
