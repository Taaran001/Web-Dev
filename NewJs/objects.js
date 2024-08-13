const mySym = Symbol("key1")

const JsUser = {
    name: "okok",
    "full name": "okok singh",
    [mySym]: "mykey1",
    age: 18,
    location: "delhi",
    email: "okok@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser.mySym);

JsUser.email = "acha@email.com"
console.log(JsUser)

// Object.freeze(JsUser)
// JsUser.name = "acha"
// console.log(JsUser);




JsUser.greeting = function(){
    console.log("Hello JsUser")
}
JsUser.greeting2 = function(){
    console.log(`Hello JsUser, ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());


// const user = new Object()
const user = {}

user.id = "123abc"
user.name = "haha"
user.isLoggedIn = false


console.log(user);

const Ruser = {
    email: "lala@email.com",
    fullname:{
        userfullname:{
            firstname: "lala",
            Lname: "singh"
        }
    }
}

console.log(Ruser.fullname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

const obj = {obj1, obj2}
const Mobj = Object.assign({}, obj1,obj2 )

console.log(obj);
console.log(Mobj);

const MMobj = {...obj1, ...obj2}
console.log(MMobj);


const users = [
    {
        id: 1,
        email: "lala@email.com"
    },
    {
        id: 1,
        email: "lala@email.com"
    },
    {
        id: 1,
        email: "lala@email.com"
    },
    {
        id: 1,
        email: "lala@email.com"
    },
    {
        id: 1,
        email: "lala@email.com"
    },

]

users[1].email
console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'));




const course = {
    course: "free course",
    price: "free",
    Instructor: "noone"
}

const {Instructor: Builder} = course

console.log(Builder);













const uzer = {
    username: "xdxd",
    price: 999,

    welcome: function(){
        console.log(`${this.username}, Welcome`);
        console.log(this);
    }

}

uzer.welcome()
uzer.username = "lalala"
uzer.welcome()


console.log(this);


function lol(){
    let username = "lollol"
    console.log(this.username);
}
