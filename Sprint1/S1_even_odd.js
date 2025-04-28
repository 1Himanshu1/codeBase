// let num = prompt("Enter number"); alternative use const readline = require('readline');

// 1. Even-Odd numbers
// let num = 4;
// if (num%2==0){
//     console.log("The number is even.");
//     } 
//     else {
//         console.log("The number is odd.");
//     }

// 2. Prime

let num = 67;
let Prime = true;
// for (let i=2; i<num; i++){
//     if(num%i==0){
//         Prime = false;
//         break;
//     }
// }

// OR
for (let i=2; i<=Math.sqrt(num);i++){
    if(num%i==0){
        Prime = false;
    }
}


if(Prime){
    console.log("prime")
} else{
    console.log("Not prime")
}

// 3. Leap

let year = 2020;

if(year%4==0 && year%100!=0 || year%400==0){
    console.log("Leap");
}else{
    console.log("Not leap")
}