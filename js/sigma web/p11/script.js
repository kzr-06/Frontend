let a=6
function fact(n){
    let arr = Array.from(Array(n+1).keys())
    console.log(arr.slice(1,));
    //[1,2,3,4,5,6]
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c);
       
}    
fact(a)