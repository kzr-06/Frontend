
let myDate = new Date()
// console.log(myDate);    
    //2025-09-01T17:12:46.638Z

// console.log(myDate.toString());  
  //Mon Sep 01 2025 22:43:25 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString());  
    // Mon Sep 01 2025

// console.log(myDate.toISOString());  
    //2025-09-01T17:15:03.793Z

// console.log(myDate.toJSON());  
    //2025-09-01T17:15:03.793Z

// console.log(myDate.toLocaleString());  
    //21/9/2025, 10:46:33 pm

// console.log(myDate.toLocaleDateString());  
    //21/9/2025

// console.log(myDate.toLocaleTimeString());  
    // 10:46:33 pm

// console.log(typeof myDate);
    //object

let myCreateDate = new Date(2023,0,23) //(YYYY, MM, DD, H, M, S)

// console.log(myCreateDate.toDateString());
// Mon Jan 23 2023

let myCreateDate1 = new Date("2023-01-14") //(YYYY, MM, DD,)
let myCreateDate2 = new Date("01-14-2023") //( MM, DD,YYYY)


let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1756747446162 ->ms
// console.log(myCreateDate2.getTime()); //1673634600000 ->ms
// console.log(Math.floor(Date.now()/1000)); //1673634600000 ->s

let newDate = new Date()
// console.log(newDate.getMonth()); // counting starts from 0(jan)
// console.log(newDate.getMonth()+1); // counting starts from 1(jan)
// console.log(newDate.getDay()); // counting starts from 1(monday)

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}));  // Monday
