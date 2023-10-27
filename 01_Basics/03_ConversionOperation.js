let score="33sasas";

// console.log(typeof score);
// console.log(typeof(score));

let ValueInNum=Number(score);
// console.log(typeof ValueInNum);
// console.log(ValueInNum);

// Conversion points
//"33" => 33 convert to numbers
//"33abc"=> NaN => Not a Number
//true=>1; false=>0

//let isLoggedIn=1;
let isLoggedIn="SUvarna";
let checkLoggedIn=Boolean(isLoggedIn);
// console.log(checkLoggedIn);
// console.log(typeof checkLoggedIn);

// Boolean 
//1=> true; 0=>false
//"" => true
//"Suvarna" => NaN

let SomeNumber=33;
let strNumber= String(SomeNumber);
// console.log(strNumber);
// console.log(typeof strNumber);
//33=> as a string
//string
//*********************** Operations ************************************* */
let num1,num2,num3;
num1=num2=num3=2+2;
// console.log(num3);// output=>4

// console.log(1+"2");// output=>12
// console.log("1"+2+2);// output=>122
// console.log(1+2+2);// output=>5
// console.log(1+2+"2");// output=>32

let gameCounter=100;
++gameCounter;
// console.log(gameCounter);
//*********************** Conversion **************************************
console.log("3" > 2);//true
console.log(2 >"3");//false
console.log(2=="2");//true
console.log(undefined ==0);//false
console.log(undefined >0);//false
console.log(undefined <0);//false

console.log(2===2);//true
console.log("2"===2);//false