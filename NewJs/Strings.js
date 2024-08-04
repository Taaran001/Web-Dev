const name = "okok"
const repoCount = 50

// console.log(name+ repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const GName = new String(`areyyy`)
console.log(GName[0]);
console.log(GName.__proto__);

console.log(GName.length);
console.log(GName.toUpperCase());
console.log(GName.charAt(2));
console.log(GName.indexOf('y'));

const NString = GName.substring(0,3)
console.log(NString)

const AString = GName.slice(-8,9)
console.log(AString);

const newString = "             achaaaa"
console.log(newString)
console.log(newString.trim())

const url = "https://www.google.com"
console.log(url.replace('.', ','))
console.log(url.includes('goo'))
console.log(url.split('.'));