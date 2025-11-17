//     in js functions are first class citizens
//                         |               |
//                         |_______________|
//                                 |
//                                 |_________> variables


function sayMyName(){
    console.log("P");
    console.log("A");
    console.log("R");
    console.log("T");
    console.log("H");
    process.stdout.write("Is");
    process.stdout.write(" World!");
}
// sayMyName()
/*
P
A
R
T
H
Is World![Function: sayMyName]
*/

// refrence -> variable name
//() -> execution

const k =sayMyName //stored in the variable
console.log(k); //[Function: sayMyName]

function add2no(n1,n2){
    console.log(n1+n2);
}

// add2no()   ->NaN
add2no("4",6)  //46
add2no(3,"a") //3a
// both are doing string concatination becoz no are converted into string
add2no(3,null) //3


function login(user){
    if(!user){ // if we pass a string it is true and convert in false
        console.log("Please enter a username");
        return
        
    }
    return `${user} just logged in`
}

// default value

function login1(user ="Parth" ){
    
    return `${user} just logged in`
}
// console.log(login());
    // undefined just logged in
// console.log(login(""));
//  just logged in  

// console.log(login("kk"));


// ============================= =======================
// dont know the no of parameter
// ... rest/spread operator

function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(200,400,5000));
    // [ 200, 400, 5000 ]


const user ={
    username : "Parth",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)
    //username is Parth and price is 199


const arr =[200,500,600]
function returnSecond(getArray){
    return getArray[1]
}
console.log(returnSecond(arr)) //500





//======================= Arrow function=====================



// arrow is used instead of function keyword and instead of putting earlier than parantheses like function keyword it is used after ()

// const addTwo =function(num1,num2){
//     return num1+num2
// }

const addTwo =(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(3,4)); //7

const addTwo1 =(num1,num2)=> num1+num2; 
 // implicit use  not use return keyword

const addTwo2 =(num1,num2)=> (num1+num2); 
// implicit use  not use return keyword with()


// uses () -> no need of return keyword
// uses {} ->  need of return keyword

// return a obj  - use ()

const returnobj =(num1,num2) =>({username:"parth"})
console.log(returnobj(3,4));
    //{ username: 'parth' } 




// ======================================== Callback function =================
// function as a parameter pass krna function ko
const a = function(){
    return "ab";
}
const printer = function(fn){
    console.log(fn());
}
printer(a)   //ab