"Use strict"; // Treat all js code as a newer version

//alert("Hi")// We are using node js not a broswers

let myName="Suvarna"
let age=28
let isSoftwareEngineer=true
let state;
let city=null;

console.log(typeof myName);
console.log(typeof age);
console.log(typeof state);
console.log(typeof city);
// number => 1233 
// string => "" 
// boolean => true/ false
// undefined => undefined
// null => null 

// Symbol => Unique id 

let id=Symbol('123');// 
let anotherId=Symbol('123');

console.log(id==anotherId);//false

let bigNumber=12313245678788n
console.log(typeof bigNumber)// bigInt
