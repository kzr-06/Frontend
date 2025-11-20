const user={
    username:"parth",
    price: 999,

    welcomeMessage:function(){
        console.log(`${username}, welcome to website`);
        
        
    }
}

// user.welcomeMessage // nothing
user.welcomeMessage();// parth, welcome to website
user.username="kesar"
user.welcomeMessage();// kesar, welcome to website



const user1={
    username:"parth",
    price: 999,

    welcomeMessage1:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

user1.welcomeMessage1();
/*parth, welcome to website
{
  username: 'parth',
  price: 999,
  welcomeMessage1: [Function: welcomeMessage1]
}*/

console.log(this); 
    //{}  ->global access mai koi obj nhi hai lekin browser mai aa rha hai which is window obj



// function chai(){
//     console.log(this);
// }

// chai(); // bahut kuch aya means function mai bahut predifne hota hai

function chai(){
    let username="parth"
    console.log(this.username);
}

chai(); // undefined (means this works only in obj not in function)


const chai = function (){
    let username="parth"
    console.log(this.username);
}

chai(); // undefined (means this works only in obj not in function)


const chai =  () => {
    let username="parth"
    console.log(this.username);
}

chai(); // undefined (means this works only in obj not in function)

const chai =  () => {
    let username="parth"
    console.log(this);
}

chai(); // {}
