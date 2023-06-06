let mystring="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(mystring.length);
console.log(mystring[0]);
console.log(mystring[mystring.length-2]);
//upper to lower case
let lower=mystring.toLowerCase();
console.log(lower);
// lower to upper case
let upper=lower.toUpperCase();
console.log(upper);
// slice , it is going  to divide into two equal parts
 let newstring=mystring.slice(13);
 console.log(newstring);
