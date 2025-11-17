 let score =0
 if(true){
    let score =10
    console.log(score);
    
 }
 console.log(score);
 

// let name='Alice'
// let name='Bob'
// console.log(name);


const isOdd = (n) => (n % 2 === 1);
console.log(isOdd(9));

const greet=(n) => "Hello, "+n+"!"
// const greet=(n) => `Hello, ${n}!`
console.log(greet('k'));

const add=(a,b)=>a+b
console.log(add(7,6));

const isEven=(n) => n%2===0
console.log(isEven(7));

const user1 = 'Kesar'
const points = 120
const msg = `Hey ${user1}, 
you have ${points} points`
console.log(msg);

const user={
    username:"parth",
    price: 999,
    age:19,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        
        
    }
}

// user.welcomeMessage // nothing
// user.welcomeMessage();
// user[welcomeMessage()];
user.birthYear=2025-user.age
user.year=function(){
    return `Hi i was born in ${this.birthYear}`}

console.log(user)
console.log(user.year())
const {username,age}=user   // object destructure
console.log(username)


const rollno = [1,2,3,4,5,6,7,8,9,10]
const rollno1 = [11,12,13,14,15,16,17,18,19,20]
const[,second,,,fifth] = rollno  // array destructuring
const[one,two,...rest] = rollno  // rest operator (use at last)
console.log(second,fifth);       
console.log(one);
console.log(two);
console.log(rest);

// const result =rollno.concat(rollno1)

let result =[...rollno,...rollno1]  // spread operator
console.log(result);

result =[rollno,...rollno1]  // spread operator
result =[rollno,rollno1]
console.log(result);

// ============================== Asyncronous JS ================================================

console.log('before');

setTimeout(()=>console.log('this is setTimeOut function'),10);
console.log('after')
console.log('1')
console.log('2')
console.log('3')
console.log('4')
console.log('6')
console.log('7');

// let count =0;
// const timer = setInterval(() => {
    //     console.log('hi'+count);
    //     count++;
    
    // },10) //delay
    
    let count =10;
    const timer = setInterval(() => {
        console.log(count);
        count--;
        if(count<1){
            setTimeout(()=>console.log('Bomb'),1000);
        
        clearInterval(timer);
        }
    },1000) //delay