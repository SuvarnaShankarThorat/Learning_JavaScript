const account_Id=12345
let accountEmail="Suvarna@google.com"
var accountPassword="Suvarna@02"
accountCity="Pune"
let accountState;
/*
  Prefer do not use Var becoz of issue in block scope and function scope
*/

//account_Id=1222 //Not allowed
console.log(account_Id);
console.table([account_Id,accountEmail,accountPassword,accountCity,accountState])