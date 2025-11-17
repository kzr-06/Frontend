/*

1.for (same as java )
2.while
3.do while
4. for of(iterator of object/string/array) : direct value aati
5. for in(): keys yah kehlo index aati hai 
6. for each :



*/
const arr=[1,2,3,4]
for (const i of arr) {
    console.log(i);
    // 1
    // 2
    // 3
    // 4
}
for (const i in arr) {
    console.log(i);
    // 0 1 2 3 : index
}


const greeting ="Hello future something "
for (const i of greeting) {
    console.log(i);
}
for (const i in greeting) {
    console.log(i);
    // 0 1 2 3......... : index
}



// ==================================================================================

const obj ={
    'game1':'spiderman',
    'game2':'GTA',
    game3:'racing'
}
// for (const key of obj) {
//     console.log(key);
//     // error it ie not iterable
// }

for (const key in obj) {
    console.log(key);
    // game1
    // game2
    // game3

    console.log(obj[key]);
    //spiderman
    //GTA
    //racing
}


// =========================== for each ====================
const coding=["js","ruby","java","cpp"]

//1.
coding.forEach( function (item){
    console.log(item);
//     js
//     ruby
//     java
//     cpp
}   )


//2.
coding.forEach( (item) => {
    console.log(item);
//     js
//     ruby
//     java
//     cpp
}   )

//3.
function printMe(item){
    console.log(item);
    
}
coding.forEach( printMe )
//     js
//     ruby
//     java
//     cpp


//4.
const values = coding.forEach( (item) => {
    console.log(item);
//     js
//     ruby
//     java
//     cpp
}   )
console.log(values); // undefined

const value = coding.forEach( (item) => {
    console.log(item);
//     js
//     ruby
//     java
//     cpp
    return item
}   )
console.log(value); // undefined



//6.
coding.forEach( (item,index,arr) =>{
    console.log(item,index,arr);
} )
// js 0 [ 'js', 'ruby', 'java', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'cpp' ]
// cpp 3 [ 'js', 'ruby', 'java', 'cpp' ]





const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"python"
    }
]


//1.
myCoding.forEach( (item) => {
    console.log(item);
})
// { languageName: 'javascript', languageFileName: 'js' }
// { languageName: 'java', languageFileName: 'java' }
// { languageName: 'python', languageFileName: 'python' }

//2.
myCoding.forEach( (item) => {
    console.log(item.languageName);
})
// javascript
// java
// python