// what if i want to return something from loop here comes the role of filter , reduce, .map


// ===================== Maps ========================================

let no =[1,2,3,4,5,6,7,8,9,10]

let new_no = no.map( (num) => num+10 )
console.log(new_no);





// ================== FILTER =======================

let myNums = [1,2,3,4,5,6,7,8,9,10]

//1.
let newNums=myNums.filter( (num) => num>4 )
console.log(newNums);
//[ 5, 6, 7, 8, 9, 10 ]


//2.
let newNum=myNums.filter( (num) => {
    num>4  // ans is {}
    return num>4;
} )
console.log(newNums);
//[ 5, 6, 7, 8, 9, 10 ]


//3.
const Num =[]
myNums.forEach((num) => {
    if(num>4){
        Num.push(num)
    }
}
)
console.log(Num);
//[ 5, 6, 7, 8, 9, 10 ]


const books=[
    {title:'One',genre:'Non-fiction',publish:'1999',edition:'2004'},
    {title:'Two',genre:'fiction',publish:'1989',edition:'2006'},
    {title:'Three',genre:'History',publish:'1999',edition:'2002'},
    {title:'Four',genre:'Science',publish:'1993',edition:'2004'},
    {title:'Five',genre:'Adventure',publish:'1999',edition:'2009'},
    {title:'Six',genre:'History',publish:'1943',edition:'2010'},
    {title:'Seven',genre:'Science',publish:'1978',edition:'2002'},
    {title:'Eight',genre:'Romance',publish:'1994',edition:'2001'},
    {title:'Nine',genre:'Non-fiction',publish:'1991',edition:'2000'},
];

const userBooks=books.filter((bk) => bk.genre === 'History' && bk.publish === '1999' )

console.log(userBooks);




// ================= Chaining =============================================



no =[1,2,3,4,5,6,7,8,9,10]

new_no = no
        .map( (num) => num*10 ) //[10,20,30,40,50,60,70,80,90,100]
        .map( (num) => num+1 ) // [11,21,31,41,51,61,71,81,91,101]
        .filter( (num) => num>=40 ) //[41,51,61,71,81,91,101]
console.log(new_no);



// ================ Reduce =============================================

no=[1,2,3]


new_no=no.reduce( function (acc,currval) {
    return acc + currval
},0)

new_no = no.reduce( (acc,curr) => acc+curr , 0 )

let shoppingCart=[
    {itemName:'js', price:999},
    {itemName:'js', price:999},
    {itemName:'js', price:999},
    {itemName:'js', price:999},
]

const priceToPay = shoppingCart.reduce( (acc,obj) => acc+obj.price,0)
console.log(priceToPay)

