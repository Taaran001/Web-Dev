
// class Rectangle {
//    constructor(width, height, color) {
// 	    this.width = width;
// 	    this.height = height;
// 	    this.color = color;
//    }

//    area() {
// 	   const area = this.width * this.height;
// 		 return area;
//    }

//    paint() {
// 			console.log(`Painting with color ${this.color}`);
//    }

// }



// class Circle {
//     constructor(radius, color) {
//         this.radius = radius
//         this.color = color
//     }
//     Carea(){
//         const area = 3.14 * (this.radius ** 2)
//         return area
//     }
//     Cpaint(){
//         console.log(`Colour of circle is ${this.color}`);
//     }
// }






// const rect = new Rectangle(2, 4, "red")
// const area = rect.area();
// const paint = rect.paint();
// console.log(area)

// const nrect = new Rectangle(45, 44, "blue")
// const narea = nrect.area()
// const npaint = nrect.paint()
// console.log(narea);




// const circle = new Circle(4,"pink")
// const Carea = circle.Carea()
// console.log(Carea)
// const color = circle.Cpaint()




// const now = new Date(); // Current date and time
// console.log(now.toISOString()); // Outputs the date in ISO format
// console.log(now.getFullYear()); // Outputs the date in ISO format
// console.log(now.getMonth()); // Outputs the date in ISO format

// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('name'));











// callbacks - functions passed as arguments to other functions
// const now = new Date()
// setTimeout(() => {
//     console.log(now.getDate())
// }, 2000);




// promises - a way to handle asynchronous operations
// function setTimeoutPromisified(ms) {
//   let p = new Promise(resolve => setTimeout(resolve, ms));
//   return p
// }

// function callback() {
// 	console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback)



// function waitFor5S(resolve) {
//     console.log(resolve);
//     setTimeout(resolve,3000);
// }
// function main() {
//     console.log("main");
// }

// waitFor5S(main)


// function setTimeoutPromisified(ms) {
//   return new Promise(waitFor5S);
// }

// function callback() {
// 	console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback)



// function random(resolve) {
//     setTimeout(resolve, 2000)
// }

// let p = new Promise(random)
// function callback() {
//     console.log("primise done!!!!!!!");
// }
// p.then(callback)














// ASSIGNMENT////////////////////////////////////////////////////////////////////////////////////////////
// let counter = 0
// const updateCounter = ()=>{
//     counter++
//     console.log(counter);
// }
// setInterval(updateCounter, 1000); // couninous update every 1 second





// let c = 0
// const updater = ()=>{
//     c++
//     console.log(c);
//     setTimeout(updater, 1000);
// }
// updater()
