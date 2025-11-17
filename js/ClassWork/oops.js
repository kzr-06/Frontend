// const Person = function(name,age){
//     this.firstName = name;
//     this.age = age;
//     this.birthYear = 2025 - age ;

// };
// Person.prototype.introduce = function (){
//     console.log(`Hi, my name is ${this.firstName}  and i was born in ${this.birthYear}`);
// }



 // **  Cannot access classes before initialization  **
class Person{
    constructor(name,age){
        this.firstName=name
        this.age = age
        this.birthYear = 2025 - age
    }
    introduce(){
        console.log(`Hi, my name is ${this.firstName}  and i was born in ${this.birthYear}`);
    }
}


const me = new Person("Kesar",19)
me.introduce();