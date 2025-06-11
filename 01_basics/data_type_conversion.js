let value = 30;
console.log(30);
console.log(typeof value);

let value1 = "30";  // every value mention or quoted inside double quote is consider as string compulsorily 
console.log("30");
console.log(typeof(value1));
// conversion string to number
let valueinNumber = Number(value1); // conversion done from string to number 
console.log("printing the value1 after conversion");
console.log(valueinNumber);
console.log(typeof(valueinNumber));


let value2 = "30abc";  // what about this ??
console.log("30abc");
console.log(typeof(value2));
// conversion string to number
let valueinNumber1 = Number(value2); // conversion done from string to number 
console.log("printing the value2 after conversion");
console.log(valueinNumber1);
console.log(typeof(valueinNumber1));
// "33" => 33
// "33hello" => NaN ( not a number)
// "true" => 1 ; "false" => 0
// null => 0
// undefined => NaN
// conversion from any value to boolean value/ logic 'T' / 'F'
let a = 1
let boolean = Boolean(a);
console.log(boolean);
console.log(typeof boolean);
 // 1 => true, 0 => false
 // "" => false
 // "string_value" => true
 // conversion value to string
 let num = 100;
 let str = String(num);
 console.log(typeof str);
 console.log(str);