const accountId = 101 // semicolon can be insert for good practice 
let accountEmail = "hello12@gmail.com"
var accountPass = "Hello123!@#"
let accountNum = 900000000;
accountCity = " KTM" // not preferred , global variable
let accountState = "Gandaki";
let accountName;
accountPass = "Nepal12345#%$";
accountNum = 102;
// const can't be change or re-assigned
// let and var are variable which values can be change later
/* Prefer not to use var because
of the issue in block scope and functional scope */
console.log("Printing one by one ::");
console.log(accountId);
console.log(accountEmail);
console.log(accountPass);
console.log(" Printing in table format :");
console.log([accountId, accountEmail, accountPass, accountState, accountName ]);
