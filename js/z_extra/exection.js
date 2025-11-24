/*
JS Execution context

1.global execution context ->refers this which in browser refers window obj
what is gec of browser -> window obj
variable environment,scope chain,this keyword    stores 

2. Fuction / functional ex ->
    two phase mai run hota hai
    1. memory creation phase / creation phase
        variable yah function ko memory milti hai
        ex: let val1 =10
            let val2 =5
            function addnum(n1,n2){
            let total = n1+n2
            return total 
            }
            let result1 = addnum(val1,val2)
            let result2 = addnum(3,4)

            step 1- global execution allocates to this
            step 2- memory phase - memory di gyi aur value di jati undefined aur function ki definition store hoti
            step 3- execution phase - ab value jati variable mai aur function toh already ho chuka jitni bar functon execute hote dubara exe context banta aur step 1,2 functton ke liye run hota jitni baar call hoga   




3. eval ec
*/




// js ka runtime environment --- scope chain ,global execution,function excution,  ...  ...............


// =========================================== JavaScript Runtime ================================================================== b
// A JavaScript runtime is an environment that enables the execution of JavaScript code. It consists of various components working together to facilitate the execution of JavaScript applications. The runtime environment determines what global objects your program can access and can also impact how it runs.

// Components of JavaScript Runtime

// ============================================ JavaScript Engine ===================================================================

// The core of a JavaScript runtime is the JavaScript engine. A JavaScript engine is a computer program that executes JavaScript code by translating human-readable JavaScript code into machine-readable instructions that the computer's hardware can execute. Examples of JavaScript engines include Google's V8 engine, which powers Google Chrome and Node.js.

// ============================================= Web APIs ============================================================================

// In the context of web browsers, JavaScript runtimes come with Web APIs that provide additional functionalities beyond the core JavaScript language. These APIs include interactions with the Document Object Model (DOM), XMLHttpRequest (for making HTTP requests), timers, and more
// 1
// . These APIs enable JavaScript to interact with the browser environment and handle tasks like manipulating the webpage structure, handling user events, and making network requests
// 1
// .

// ============================================= Callback Queue and Event Loop ===================================================

// Asynchronous operations in JavaScript, such as handling user input or making network requests, utilize callback functions. These functions are placed in a queue known as the callback queue, awaiting execution. The event loop takes callback functions from the callback queue and puts them into the call stack for execution
// 1
// .

// ============================================= Browser vs. Node.js Runtime Environment =================================================

// --------------------- Browser's Runtime Environment

// In a browser's runtime environment, JavaScript code has access to the window object, which provides access to a huge amount of data and functionality relating to the open browser window
// 3
// . Applications created for and executed in the browser are known as front-end applications
// 3
// .

// -------------------- Node.js Runtime Environment

// The Node.js runtime environment was created to execute JavaScript code without a browser, enabling programmers to create full-stack (front-end and back-end) applications using only JavaScript
// 2
// . Node.js provides access to features unavailable in a browser, such as access to the server's file system, database, and network
// 3
// . For example, the process object in Node.js contains data relating to the JavaScript file being executed