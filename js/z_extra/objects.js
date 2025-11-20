/*
singleton - ek hi instance hota hai

objects can be defined through 
1. literals -> no singleton
2. constructor -> make singleton 

*/

// const jsUser ={} // Object declaration (literals)
// Object.create() -> constructor
// const jsuser = new Object() ->singleton

const jsUser1 ={
    name : "Kesar",
    "full_name" : "Kesar Agrawal",
    age : 18,
    locatin : "Shikohabad",
    isloggedIn: false,
    lastlogindays : ["Monday","Tuesday"]
} 
console.log(jsUser1.name);
console.log(jsUser1.full_name);
console.log(jsUser1["name"]);
console.log(jsUser1["full_name"]);

// ===========================================================================================================
// how to make symbol a key in object
const mySym = Symbol("key1")

const jsUser ={
    name : "Kesar",
    "full_name" : "Kesar Agrawal",
    age : 18,
    locatin : "Shikohabad",
    isloggedIn: false,
    lastlogindays : ["Monday","Tuesday"],

    [mySym] :"mykeys1"
} 
console.log(jsUser[mySym]);

jsUser.email = "kk" // add if not available else update
console.log(jsUser["email"]);

// Object.freeze(jsUser)
// jsUser.email = "ka"
// console.log(jsUser["email"]);  //kk
// does not change because we freeze it

jsUser.greeting = function(){
    console.log("Hello");
    
}
console.log(jsUser.greeting);  // [Function(anonymous)]
console.log(jsUser.greeting());  // Hello /n undefined

jsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`);
    
}
console.log(jsUser.greeting2());  // Hello Kesar /n undefined


const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name = "Kesar"
tinderUser.isloggedin = false


const regularUser ={
    email: "gp@gmail.com",
    fullname:{
        username:{
            firstname:"Parth",
            lastname:"Garg"
        }
    }
}
console.log(regularUser.fullname); //{ username: { firstname: 'Parth', lastname: 'Garg' } }
console.log(regularUser.fullname.username); //{ firstname: 'Parth', lastname: 'Garg' }


// ============================== Concate ===========================================================

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}


// const obj3 =Object.assign(obj1,obj2)
// const obj4 =Object.assign({},obj1,obj2) //  (target,source)
// console.log(obj3);
     //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj4); 
    //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj3 ={...obj1,...obj2} //spreading


const arr=[
    {
        name :"Parth",
        isin:true
    },
    {
        name :"Parth",
        isin:true
    },
    {
        name :"Parth",
        isin:true
    }
]
// console.log(arr[1].isin);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
    // [ 'id', 'name', 'isloggedin' ] -> returns array
console.log(Object.values(tinderUser));
    //[ '123abc', 'Kesar', false ]
console.log(Object.entries(tinderUser));
    //[ [ 'id', '123abc' ], [ 'name', 'Kesar' ], [ 'isloggedin', false ] ] ->returns array of array 
console.log(tinderUser.hasOwnProperty('isloggedin'));
    // true
console.log(tinderUser.hasOwnProperty('isLoggedin'));
    //false


const course={
    coursename: "js in hindi",
    price: 999,
    courseInstructor:"hitesh"
} 
const{courseInstructor} =course
    //{key} = object
const{coursename:cname} =course
    // {key :(As) variable name} = object

console.log(courseInstructor);
    // hitesh
console.log(cname);
    //js in hindi


// ================================================= JSON ===================================================
// json is like object without refrence name
// {
//     "name":"Parth",
//     "coursename":"json",
//     "price":"free"
// }

// [
//     {},
//     {},
// ]