// ------- objects
// let person = {
//     name: 'Daniel',
//     age: 20,
//     height: 181,
//     'my grades': [4, 5, 6],      // '' kogato ima space v imeto
//     info: {seven: 5, eight: 9}
// }
//
// console.log(person.age)
//
// person['lastName'] = 'Zorov'        // dobavqne na novo property
// console.log(person.lastName)        // dostypvane s .
// console.log(person['my grades'])     // dostypvane s []
//
// delete person.lastName              // triene
//
//
// function personInfo(firstName, lastName, age) {
//     age = Number(age)
//     let person2 = {firstName: firstName, lastName: lastName, age: age}
//     let person3 = {firstName, lastName, age}    // moje i taka
//     return person2
// }
// console.log(personInfo('d', 'Z', 30))


// ------- metodi v obektite
// function personInfo2(firstName, lastName, age) {
//     age = Number(age)
//     let person4 = {
//         firstName: firstName,
//         lastName: lastName,
//         age: age,
//         sayHello: function () {
//             return `${this.firstName} ${this.lastName}`   // this == self
//         }
//     }
//     console.log(person4.sayHello())
//     return person4
// }
// console.log(personInfo2('m', 'Z', 11))


// tuple v js e masiv s 2 elementa


// ------- keys, values, entries
// let person5 = {
//     firstName: 'Daniel',
//     lastName: 'Zorov',
//     age: 29,
//     sayHello: function () {
//         return `${this.firstName} ${this.lastName}`
//     },
//     anotherFunc() {    // po kratko deklarirane
//         this.age -= 2  // mojem da promenqme systoqnieto na propertitata
//     },
// }
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


// ------- arrows in objects
// const compareNumbers = {
//     ascending: (a, b) => a - b,
//     descending: (a, b) => b - a,
// }
// console.log(compareNumbers.descending(4, 5))    // 1


// ------------------------------------------------------------------- //

// ------- JSON
// JSON, obekt v koito kliuchovete trqbva da sa v ""

// let personJson = {
//     firstName: 'Daniel',
//     lastName: 'Zorov',
//     age: 29,
//     fullName() {
//         return this.firstName + ' ' + this.lastName
//     },
// }
//
// // pravi na json (slaga "", maha funkciite)
// let jsonString = JSON.stringify(personJson)
// console.log(jsonString)
//
// // pak na object
// let personObjAgain = JSON.parse(jsonString)
// console.log(personObjAgain)


// ------------------------------------------------------------------- //

// ------- Associative Arrays
// const SETTINGS_PAGE = 'Settings Page'
//
// let openPage = {
//     [SETTINGS_PAGE]: function () {  // stoinostta na gornata prom e kliuch
//         console.log('Open Settings Page')
//     }
// }
//
// // .hasOwnOrioerty(name) - proverqva ima li takova property
//
// openPage['Settings Page']()     // Open Settings Page


// ------- Sort objects
// za da sortirame pyrvo go pravim na masiv s .entries

// let people = {
//     'Daniel': {age: 25, email: 'daniel.zorov@abv.bg'},
//     'Maxi': {age: 11, email: 'maxi.zorov@abv.bg'},
//     'Adi': {age: 2, email: 'adriana.zorova@abv.bg'},
// }
//
// const entries = Object.entries(people) // [[],[],[]]
// let sortedByName = entries.sort(
//     (personA, personB) => {
//         let personAName = personA[0]
//         let personBName = personB[0]
//         return personAName.localeCompare(personBName)
//     }
// )
//
// for (const [name, info] of sortedByName) {
//     console.log(name)
//     console.log(info)
// }

// ------------------------------------------------------------------- //
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




