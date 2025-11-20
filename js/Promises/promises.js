const promise_One = new Promise(function(resolve,reject){
    // do async tasks 
    setTimeout(function(){
        console.log("Hiiiiiiiiiiiiiiiiiiiiiii");
        resolve()
    },1000)
})

promise_One.then(function(){
    console.log("Promise Consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hiiiiii");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise2 consumed");
    
})


const promise_Three = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Hii',email:'example@4321.google.com'})

    },1000)
})

promise_Three.then(function(user){
console.log(user);

})


const promise_Four = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'Kesar',password:"1234"})
        }
        else{
            reject('something fishy')
        }

    },1000)
})

promise_Four
    .then(function(user){
        console.log(user);
        return user.username;
})
    .then(function(username){
        console.log(username);
})
    .catch(function(error){
        console.log(error);
}).finally(()=>console.log("finaaly sab kuch ho gya")
)



const promise_Five = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'JS',email:'example@4321.google.com'})
        }
        else{
            reject("ERROR:  JS Something Went wrong")
        }

    },1000)
})

async function consumeFive(){
    try{
        const response = await promise_Five
    console.log(response);
    }catch(error){
        console.log(error);
        
    }
}

consumeFive()



// async function getAllUsers() {
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
    
//     }
//     catch(error){
//         console.log("E: ",error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>
console.log(data)
)
.catch((error)=>console.log(error)
)


