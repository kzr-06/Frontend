// treat all JS code as newer code

// alert("hello") // we are using nodejs not browser
// console.log(typeof null)==object
// console.log(typeof undefined)==undefined



// ================== Primitve datatypes =====================

// number -->2^53
// bigInt
// String
// boolean
// null(also stand vlaue)
// undefined
// symbol (for uniquness)


// typeof 123        // "number"
// typeof 10n        // "bigint"
// typeof "str"      // "string"
// typeof true       // "boolean"
// typeof undefined  // "undefined"
// typeof Symbol()   // "symbol"
// typeof null       // "object"   // historic JS quirk
// typeof {}         // "object"
// typeof []         // "object"
// typeof function() // "function"




// ======================= non-primitive/refrence value ========================

// object
// array
// functions


// ============== conversion =========
// let a ="";
// let b=Number(a)
// console.log(typeof a)
// console.log(a)
// console.log(typeof b)
// console.log(b)

// "33" -   string 33 number 33
// "33abac" - string 33abc  number NaN(not a number)
// "abac" - string abc number NaN(not a number)
// true/false - boolean true/false number 1/0
// undefined - undefined undefined number NaN

// boolen
// 1 - true
// 0 - false
// empty string - false
// filled string - ture

// =================== operation ======================

// 1. +/-/% *
// (str1 +str2) concatinate
// (str1 + no1 +no2) - string concatinate
// (no1 + no2 +str1) - add starting  two only then concinate str
// basically first arg ke acc keh sakte if more than two 
// +true - 1
// true+ - error
// +"" - 0

// 2.comparision
// "2" > 1 = true
// "02" > 1 = true
// null > 0 = false
// null == 0 = false
// null >= 0 = true
// "2" === 2 = false    (also checks datatype)


