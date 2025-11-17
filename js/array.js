// const myArr = [1,2,3,4,5,true,"kesar"]
// store any type of datatype in single array
// console.log(myArr);      [1,2,3,4,5,true,"kesar"]

/* 

============== Shallow Copy ============================
It is a copy whose properties share the smae refrences(point to the same underlying values) as those of the source object from which the copy was made.
As a result, when you hange either the source or the copy, both are changed

-> there is no concept of negative index

*/
// const my = myArr  // shallow copy 
// my[0] = "k"
// console.log(myArr); //[ 'k', 2, 3, 4, 5, true, 'kesar' ]
// console.log(my);    // [ 'k', 2, 3, 4, 5, true, 'kesar' ]
 
// const myHeros = ["Shaktiman","naagraj"]
// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2); //[ 1, 2, 3, 4 ]
// console.log(myArr2[-2]); // undefined


/*

arr=[]
if(arr.length === 0){
    console.log("empty arr");
}   empty arr


obj={};
if(Object.keys(obj).length===0){
    console.log("empty obj");
}  empty obj


========================================= Methods ==============================================
1. push(value) :    add element in the last in the main obj and returns the length
2. pop():           remove last element and returns that no.
3. unshift(value):  add in the starting and changes the index of every element by 1 and returns the length
4. shift():         remove the first element  and returns that no.
5. includes(vlaue): if in the array returns true else false
6. index(value):    if present then returns the index of that element else returns -1
7. join():          convert array into single string 

8. slice(index 1, index 2): index 1-> starting index(include)
                            index 2-> ending index(excluded)  - do not change in the main obj
9. splice(index 1, index 2): index 1-> starting index(include)
                            index 2-> ending index(included)  -  change in the main obj (remove the objects which comes in the range)

10. concat(datatype): returns a new array do not change in the main abj
11. [... array {n no}]: returns new array or concat ararys element wise -> spread method
12. flat(depth)

13. Array.isArray(datatype): returns true or false
13. Array.from(datatype): convert the given datatype into array 
                          it do not convert the obj into array by default -> []
                          u have to tell either u wants an array of keys or values
                          ex- Array.from("Hitesh") -> ["H","i","t","e","s","h"]


14. Array.of(datatype1, datatype2, datatype3): convert into array

*/
const marvel_heroes = ["thor","Ironman", "spiderman"]
const dc_heroes = ["superman","flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); 
    //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3]);
     // [ 'superman', 'flash', 'batman'  ]

// console.log(marvel_heroes[3][1]);
     // flash

marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes.concat(dc_heroes)); 
    //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(marvel_heroes);
     //[ 'thor', 'Ironman', 'spiderman' ]

const all_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_heroes);
    //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_arr = [...arr]
// console.log(real_arr);
    // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 5 ] ] ]

const real_arr = arr.flat(Infinity)
// console.log(real_arr);
    //[ 1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]






// ==================================== Class ==========================================================

//it is a data structure/object that can store multiple values at a time 


const b =[1,2,3,4]
// const a =new Array(length/value)
const a =new Array(8).fill(0)    //[0,0,0,0,0,0,0,0]
a[9]=20
console.log(a)
//[0,0,0,0,0,0,0,0,<1 empty item>,20]

console.log(a[10])   // undefined


const z = [1,2,3,4,5,6,7]
z.unshift(9)
console.log(z)
const r = z.shift()
console.log(r);
console.log(z);



