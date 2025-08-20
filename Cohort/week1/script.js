/*
Variable

var favColor = "Black";
let height = 179.832;
const likePizza = true;

console.log(favColor); // Black
console.log(height); // 179.832
console.log(likePizza); // true
*/


/*
Functions

// Assignment #1
function sum(a,b) {
    sum = a +b
    return sum
}
a = 3
b = 4
console.log(sum(a,b));

// Assignment #2
function canVote(age) {
    if (age>=18) {
        return "You can vote"
    } else{
        return "You can't vote"
    }
}
age = 1
console.log(canVote(age));
*/


/*
If/Else

const num = 3435
if (num%2==0) {
    console.log("The number is even.");

}
else{
    console.log("The number is odd.");

}
*/


/*
Objects

Assignment #1
function greet(name) {
    console.log("Hello, " + user.name);
}
let user = {
	name: "Harkirat",
	age: 19
}
greet();
*/

/*
// Assignment #2
function greet(name) {
    console.log("Hello, " + user.name + " you are " + user.age + " you are " + user.gender);
}
let user = {
	name: "Harkirat",
	age: 19,
    gender: "male"
}
greet()
*/

/*
// Assignment #3
function greet(name) {
    console.log("Hello, " + user.name + " you are " + user.age + " you are " + user.gender);

    if (user.age>=18) {
        console.log("You can vote");

    }else{
        console.log("You can't vote");
    }
}
let user = {
	name: "Harkirat",
	age: 1,
    gender: "male"
}
greet()
*/

/*
// Array of Objects
let users = [
    {
    name: "Bharat",
    age: 21,
    gender: "male",
  },
  {
    name: "Priya",
    age: 22,
    gender: "female",
  },
  {
    name: "Rani",
    age: 15,
    gender: "female",
  },
  {
    name: "Deepak",
    age: 24,
    gender: "male",
  },
  {
    name: "Rahul",
    age: 17,
    gender: "male",
  },
]

function getEligibleUsers(age) {
    for (let i= 0; i<users.length; i++) {
        // console.log(users[i]);
        if (users[i].age >= 18 && users[i].gender == "male") {
            console.log((users[i]));
        }
    }
}
getEligibleUsers()
*/
