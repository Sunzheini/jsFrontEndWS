let a = 5
let b = 8

if (b > a) {
    console.log(b)
}


// ---------------- //
function solve(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber)
}

solve(5, 4)


// ---------------- //
function solve2(name, age) {
    let output = `My name is ${name} and age is ${age}`;
    console.log(output);
}

solve2('Daniel', 20);


// ---------------- //
function solve3(grade) {
    console.log(grade.toFixed(2));
}

solve3(4.44242);    //4.44, returns a rounded string!


// ---------------- //
let isTrue = true;
let empty = null;
let unknown = undefined; //ne deklarirana promenliva


// ---------------- //
function solve4() {
    //for (let index = 0; index < 5; index++) {     let has block scope, use this!
    for (var index = 0; index < 5; index++) {
    }
    console.log(index)
}

solve4();


// ---------------- //
// arithmetic operators: +, -, *, /, %, **
console.log(Math.floor(7/3))    // 2


let num = 1;                //number sluji za int i float
let name = 'Daniel';
let output = name + num;
console.log(output);        // Daniel1
console.log(typeof output);  // string

let arr = [];   // array
let obj = {};   // object


// ---------------- //
console.log(1 == '1');      // sravnqva stoinostta,     true
console.log(1 === '1');     // sravnqva stoinostta i tipa,    false
console.log(3 != '3');
console.log(3 !=='3');


// ---------------- //
let first = 7;
if (5 <= first && first <= 20) {
    console.log('blahblah')
} else {
    console.log('gg')
}


// ---------------- //
let named = 'Daniel'
switch (named) {
    case 'Daniel':
        console.log(named);
        break;

    default:
        console.log('default');
        break;
}


// ---------------- //
// ! - not, && - AND, || - OR


// ---------------- //
let i = 1
while (i <= 5) {
    console.log(i);
    i++;
}


// ---------------- //
// arrays are like lists in python: no fixed lenght and diff types inside

let numbersArray = [10, 20, 'hello'];
console.log(`Lenght is: ${numbersArray.length}`);
// console.log(numbersArray[-1])       // doesnt work!

let numbersArray2 = [1, 2, 3];
let [firstN, secondN, thirdN, fourthN] = numbersArray2; // unpacking
console.log(firstN)     // 1
console.log(fourthN)    //undefined

let numbersArray3 = [1, 2, 3, ...[4, 5, 6]];
console.log(numbersArray3)  // (6) [1, 2, 3, 4, 5, 6]



// ---------------- //
function solve5(name, ...otherParams) {     // like: *args
    console.log(name);
    console.log(otherParams);   // (3) ['Maxi', 'is', 'noob']

    for (const el of otherParams) {     // like: for item in list, but cant change the items!
        console.log(el);
    }
}

solve5('Daniel', 'Maxi', 'is', 'noob')


// ---------------- //
let numbersArray4 = [1, 2, 3, 4, 5, 6];
let output4 = numbersArray4.join(', ');     // like python
console.log(output4);


// ---------------- //
// .pop()   pop
// .push()   append
// .shift()   popleft
// .unshift()   appendleft

// .reverse()
// .join(', ')
// .map((num) => num * 2)
// .filter((num) => num % 2 === 0)
// nqma insert, a se polzva splice


// ---------------- //
// sort()
function listOfNames(namesArray) {
    return [...namesArray]                                  // zapazva originalniq masiv
        .sort((aName, bName) => aName.localeCompare(bName)) // names ascending
        .map((el, index) => `${index + 1}.${el}`)
        .join('\n')
}
listOfNames(["John", "Bob", "Christina", "Ema"])
console.log(listOfNames(["John", "Bob", "Christina", "Ema"]))


myArray.sort((aNumber, bNumber) => aNumber - bNumber) // numbers ascending


// ---------------- //
let numbersArray5 = [1, 2, 3, 4, 5, 6];
console.log(numbersArray5.slice(1));        // vzima ot 1 natatyk
console.log(numbersArray5.slice(1, 3));     // (2) [2, 3]
console.log(numbersArray5.splice(0, 2));     // (2) [1, 2] are deleted
console.log(numbersArray5.splice(0, 2));     // (2) [0, 2, ...toInsert] substitutes elements

numbersArray5.forEach((num) => {        // another method of iteration
    console.log(num);
})


// ---------------- //
// .split(', ')
// .includes()  // returns true or false


// ---------------- //
let text1 = 'Hello' + ', MF'
console.log(text1.indexOf('llo'));  // index of substring is: 2
console.log(text1.substring(0, 3))  // returns substring from index 0 to index 2
console.log(text1.replace('He', 'Gd'))  // replaces He with Gd 1 time only

string7 = '*'.repeat(4)
console.log(string7)        // ****


// Day 2
// ---------------- //
myString = String(myNumber)


// ---------------- //
// .indexOf()
//if (templateArray[i].indexOf('*') !== -1)  // ako * ne e vytre vryshta -1!


// ---------------- //
'abc'.charCodeAt(0) // check the 0 index of the string and returns 97 from ASCI


// Day 3
// ---------------- //
printStars(4)       // moje da se izvikva predi deklaraciqta
function printStars(n) {
    console.log("*".repeat(n))
}


// prisvoqvane na funkciq kym promenliva
const printStars2 = function (n) {
    console.log("*".repeat(n))
}
printStars2(3)


function multiplyNumbers(params) {
    let sum = 1
    for (let i = 0; i < params.length; i++) {
        sum += params[i]
    }
    sum = sum ** 3        // !
    return sum
}
console.log(multiplyNumbers([5, 6, 7, 8]))


console.log(Number.isInteger(4))    // true


// first class functions:
// we pass them as arguments to another function,
// or they are returned by other functions,
// or they are assigned to a variable


function multF(value) {
    return value * 2
}
let numbers = [1, 2, 3, 4, 5, 6, 7]
let newNumbers = numbers.map(multF)     // !
console.log(newNumbers)


let increment = x => x + 1      // lambda f
console.log(increment(4))


// Day 4
// ---------------- //
function smallestOfThree(firstNum, secondNum, thirdNum) {
    return Math.min(firstNum, secondNum, thirdNum)      // ! min
}


//         let temp = String.fromCharCode(i)       // ! fromCharCode


let revArray = [...myString].reverse()   // ! string to array.reverse


// new Array(3)    // empty * 3
// new Array(7).fill(7)    // [7, 7, 7, 7, 7, 7, 7]
// new Array(7).fill(new Array(7).fill(7)) // matrix


// Day 5
// ---------------- //


// ------- objects
let person = {
    name: 'Daniel',
    age: 20,
    height: 181,
    'my grades': [4, 5, 6],      // '' kogato ima space v imeto
    info: {seven: 5, eight: 9},
    sayHello: function () {
             return `${this.name} ${this.age}`   // this == self
    },
    anotherFunc() {    // po kratko deklarirane
         this.age -= 2  // mojem da promenqme systoqnieto na propertitata
    },
}


// person['lastName'] = 'Zorov'        // dobavqne na novo property
//let person3 = {firstName, lastName, age}    // moje i taka vyv funkciq poluchavashta tezi parametri

// console.log(person.lastName)        // dostypvane s .
// console.log(person['my grades'])     // dostypvane s []

// delete person.lastName              // triene


// tuple v js e masiv s 2 elementa


// console.log(Object.keys(person5))    // [ 'firstName', 'lastName', 'age', 'sayHello' ]
// console.log(Object.values(person5))  // [ 'Daniel', 'Zorov', 29, [Function: sayHello] ]
// console.log(Object.entries(person5)) //  [['firstName', 'Daniel' ], ...]
//
// for (const key of Object.keys(person5)) {
//     console.log(person5[key])
// }
//
// for (const [key, value] of Object.entries(person5)) {
//     console.log(`${key} ${value}`)
// }


// JSON, obekt v koito kliuchovete trqbva da sa v ""

// let jsonString = JSON.stringify(personJson)      // pravi na json (slaga "", maha funkciite)
// let personObjAgain = JSON.parse(jsonString)      // pak na object


// .hasOwnProperty(name) - proverqva ima li takova property


// za da sortirame pyrvo go pravim na masiv s .entries

// const entries = Object.entries(people) // [[],[],[]]
// let sortedByName = entries.sort(
//     (personA, personB) => {
//         let personAName = personA[0]
//         let personBName = personB[0]
//         return personAName.localeCompare(personBName)
//     }
// )


// ------- Classes
class Student {
    constructor(name, age, grades) {
        this.name = name
        this.age = age
        this.grades = grades;
    }
    sayHello() {
        console.log(`${this.name} says hi`)
    }
}

const studentOne = new Student('Daniel', 19, [1, 2, 3])
studentOne.sayHello()


// day 6 - make









