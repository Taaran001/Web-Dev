let date = new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);

let mcdate = new Date(2023, 0, 23, 5, 3)
console.log(mcdate.toDateString());
console.log(mcdate.toLocaleString());

let ndate = new Date("2024-01-14")
console.log(ndate.toLocaleString());

let TimeStamp = Date.now()
console.log(TimeStamp);
console.log(mcdate.getTime());
console.log(Math.floor(Date.now()/1000));

let NewDate = new Date()
console.log(NewDate);
console.log(NewDate.getMonth() +1);
console.log(NewDate.getDay());

console.log(NewDate.toLocaleString('default', {
    weekday: "long",
}));