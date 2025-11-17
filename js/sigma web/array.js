let arr=[1,2,4,5,7]
// console.log(arr);
// console.log(typeof arr); //object
// console.log(arr.length);


// console.log(typeof arr.toString());
    // String

// console.log(arr.join(" and "));
    // 1 and 2 and 4 and 5 and 7

/*

========================================= Methods ==============================================
1. push(value) :    add element in the last in the main obj
2. pop():           remove last element 
3. unshift(value):  add in the starting and changes the index of every element by 1
4. shift():         remove the first element 
5. includes(vlaue): if in the array returns true else false
6. index(value):    if present then returns the index of that element else returns -1
7. join():          convert array into single string 

8. slice(index 1, index 2): index 1-> starting index(include)
                            index 2-> ending index(excluded)  - do not change in the main obj
9. splice(index 1, index 2): index 1-> starting index(include)
                            index 2-> ending index(included)  -  change in the main obj (remove the objects which comes in the range)
    splice(index 1, index 2,n elements): it removes the element from index1 to index2 and n elements in that place in the main arr
    a=[1,2,3,4,5]
    a.splice(1,3,55,66,77,88) -> [2,3,4]
    then, a->[1,55,66,77,88,5] 

10. concat(datatype): returns a new array do not change in the main abj
arr.concat(arr)

11. [... array {n no}]: returns new array or concat ararys element wise -> spread method
12. flat(depth)

13. Array.isArray(array): returns true or false(ture if array)
14. Array.from(datatype): convert the given datatype(obj) into   array 
                          it do not convert the obj into array by default -> []
                          u have to tell either u wants an array of keys or values
                          ex- Array.from("Hitesh") -> ["H","i","t","e","s","h"]


15. Array.of(datatype1, datatype2, datatype3): convert into array

16.arr.sort() -> sort
17. arr.reverse() -> it reverses the array

*/  

delete arr[3]
console.log(arr);
    //[1, 2, 4, empty, 7]
console.log(arr[3]);
    //undefined


/*
Looping through array

1.forEach loop -> 

*/
let a=[1,93,5,6,88]
a.forEach((value,index,arr)=>{
    console.log(value,index,arr);
    }
)
// 1 0 (5) [1, 93, 5, 6, 88]
// 93 1 (5) [1, 93, 5, 6, 88]
// 5 2 (5) [1, 93, 5, 6, 88]
// 6 3 (5) [1, 93, 5, 6, 88]
// 88 4 (5) [1, 93, 5, 6, 88]

// for of loop
for (const element of a) {
    console.log(element);
}
// 1
// 93
// 5
// 6
// 88

// ============= Map ==================
// creates a new array by performing some operation on each ele
let newa=a.map((e,index,arr)=>{
    return e**2
})
console.log(newa);
    //[1, 8649, 25, 36, 7744]

// =======================Filter===============
const greaterThanSeven =(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(newa.filter(greaterThanSeven));
    //[8649, 25, 36, 7744]

// ===================== Reduce ==================
// reduce array to a single element
const red = (a,b)=>{
    return a*b
}
console.log(a.reduce(red));
    //245520

