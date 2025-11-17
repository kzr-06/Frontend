// prompt is used show message in browser

let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter operation")

let random = Math.random()
let obj ={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
    "**":"*"
}
if(random > 0.2){
    alert(`The result is ${a} ${c} ${b}`)
}

else{
    c=obj[c]
    alert(`The result is ${a} ${c} ${b}`)
}

