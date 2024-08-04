const user = {
    name:"okok",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details");
        console.log(this);
        console.log(`Username: ${this.name}`);
    }

}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);




function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    // return this

    this.greeting = function(){
        console.log(`Welcome${this.username}`);
    }
}

const user1 = new User("lol", 12, true)
const user2 = new User("acha", 11, false)
console.log(user1);
console.log(user2.constructor);

