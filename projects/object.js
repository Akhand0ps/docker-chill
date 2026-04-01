//create objects


const person = {name:'akhand'};

person.great = function(){
    return `Hi I'm ${this.name}`;
}   

console.log(person.great());

/* delete person.great; //remove method
person.great(); //error dega
 */


const userProfile = {
    username: "akhand_Dev",
    email:"akhand@email.com",


    getprofile(){
        return `User: ${this.username}, Email: ${this.email}`
    }
}

// Object.freeze(userProfile); // kuch add /chnage nhi kr skte
//Object.seal(userProfile)// property add/remove nhi krte skte , just chnages kr skte ho
// Object.seal(userProfile)
userProfile.greet = function(){
    return `Hi I'm ${this.username}`;
}
console.log("greet: ",userProfile.greet());
console.log(userProfile.getprofile());



console.log("=====================");
//dot vs bracket notation

const obj = { 'first-name': 'Bob', age: 25 ,city:'kashmir'};
const key = 'city';
console.log(obj['first-name']); // 'Bob'
console.log(obj[key]); // 25


console.log("=====================");
//shallow vs deep copy

const original = {a: 1, b: {c: 2}};

// Shallow
const shallow = {...original};
shallow.b.c = 99; // original.b.c is now 99!

// Deep
const deep = JSON.parse(JSON.stringify(original));
deep.b.c = 100; // original.b.c stays 2

