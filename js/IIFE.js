// Immediately Invoked Function Expression ->IFEE

function chai(){
    console.log("DB Connected");
}
chai(); 
// what if global scope se pollute ho jaye

(function chai1(){
    //named ifee
    console.log("DB Connected");
})();
    // DB execution
    // there is no need to call ifee jaise co,plier vha pahuchega run ho jayega bina call ke
    // iske baad seicolin lagana needed hai kyuki end krna hota

// ()() pehla valadeclaration ke liye second one is for execution

(()=>{
    console.log("this is another");
})();
// this is another 


((name)=>{
    console.log(`this is another ${name}`);
})("parth sir");
//this is another parth sir