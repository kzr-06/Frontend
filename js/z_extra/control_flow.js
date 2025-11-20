/*
falsey values:-
false,0,-0,BigInt 0n,"",null,undefined,NaN

truely values:-
"0",'false'," ",[],{},function(){}


false == 0/""/'   ->true
*/




// Nullish Coalescing operator(??): null defined

let val;
val =5??10
console.log(val);
    //5
val2 = null?? 10
console.log(val2);
    //10

val = undefined ?? 15;
console.log(val);
 // 15

val = null??undefined
console.log(val);
// undefined


val = undefined??null
console.log(val);
// null

val = undefined??null ?? 10
console.log(val);
    // 10


 // Ternary oerator : condition ? value if condition true :value if condition false   

// ========================== SWITCH STATEMENT ============================================

// let day = 3;
// switch (day) {
//   case 1: console.log("Monday"); break;
//   case 2: console.log("Tuesday"); break;
//   case 3: console.log("Wednesday"); break;
//   default: console.log("Invalid day");
// }    case 3


// let day = 3;
// switch (day) {
//   case 1: console.log("Monday"); 
//   case 2: console.log("Tuesday"); 
//   case 3: console.log("Wednesday"); 
//   default: console.log("Invalid day");
// } //case 3 and default

