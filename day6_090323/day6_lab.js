// 1
// function parseEmployees(input) {
//     let employeesObj = input        // ot masiv v obekt s .reduce
//         .reduce((data, employee) => {
//             data[employee] = employee.length
//             return data
//         }, {})
//
//     for (const key in employeesObj) {       // izpolzvane na for in
//         console.log(`Name: ${key} -- Personal Number: ${employeesObj[key]}`)
//     }
// }
//
// parseEmployees([
//         'Silas Butler',
//         'Adnaan Buckley',
//         'Juan Peterson',
//         'Brendan Villarreal'
//     ]
// )


// for of e za masivi, for in e za obekti


// 2
// function towns(textTable) {
//     for (const el of textTable) {
//         let [town, latitude, longitude] = el.split(' | ')
//         latitude = Number(latitude).toFixed(2)
//         longitude = Number(longitude).toFixed(2)
//         let currentObj = {town, latitude, longitude}
//         console.log(currentObj)
//     }
// }
//
// towns(['Sofia | 42.696552 | 23.32601',
//     'Beijing | 39.913818 | 116.363625']
// )


// 3
// function storeProvision(currentStock, orderedProducts) {
//     let combined = [...currentStock, ...orderedProducts]    // 2 masiva v 1
//
//     let store = {}
//
//     for (let index = 0; index < combined.length; index++) {
//         let prop = combined[index]
//         let value = Number(combined[index + 1])
//
//         if (index % 2 === 0) {
//             if (!(store.hasOwnProperty(prop))) {
//                 store[prop] = value
//             } else {
//                 store[prop] += value
//             }
//         }
//     }
//
//     for (const key in store) {
//         console.log(`${key} -> ${store[key]}`)
//     }
// }
//
// storeProvision([
//         'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//     ],
//     [
//         'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ]
// )


// 4
// function moviesParser(inputArray) {
//     let moviesArray = []
//     function addMovie(name) {
//         moviesArray.push({name})
//     }
//     function addDirector(name, director) {
//         let movie = moviesArray.find((m) => m.name === name)       // returns first object acc. to criteria
//         if (movie) {
//             movie.director = director
//         }
//     }
//     function addDate(name, date) {
//         let movie = moviesArray.find((m) => m.name === name)       // returns first object acc. to criteria
//         if (movie) {
//             movie.date = date
//         }
//     }
//
//     for (const arrayElement of inputArray) { // addMovie Fast and Furious
//         let currentArray = arrayElement.split(' ')  // [, , ,]
//         for (const stringEl of currentArray) {  // addMovie
//             if (stringEl === 'addMovie') {
//                 let movieName = currentArray.slice(1).join(' ')
//                 addMovie(movieName)
//                 break
//             } else if (stringEl === 'directedBy') {
//                 let indexOfSplitter = currentArray.indexOf('directedBy')
//                 let movieName = currentArray.slice(0, indexOfSplitter).join(' ')
//                 let directorName = currentArray.slice(indexOfSplitter + 1).join(' ')
//                 addDirector(movieName, directorName)
//             } else if (stringEl === 'onDate') {
//                 let indexOfSplitter = currentArray.indexOf('onDate')
//                 let movieName = currentArray.slice(0, indexOfSplitter).join(' ')
//                 let movieDate = currentArray.slice(indexOfSplitter + 1).join(' ')
//                 addDate(movieName, movieDate)
//             }
//         }
//     }
//
//     for (const movie of moviesArray) {
//         if (movie.hasOwnProperty('name') && movie.hasOwnProperty('date') && movie.hasOwnProperty('director')) {
//             console.log(JSON.stringify(movie))
//         }
//     }
// }
//
// moviesParser([
//         'addMovie Fast and Furious',
//         'addMovie Godfather',
//         'Inception directedBy Christopher Nolan',
//         'Godfather directedBy Francis Ford Coppola',
//         'Godfather onDate 29.07.2018',
//         'Fast and Furious onDate 30.07.2018',
//         'Batman onDate 01.08.2018',
//         'Fast and Furious directedBy Rob Cohen'
//     ]
// )
//
// moviesParser([
//         'addMovie The Avengers',
//         'addMovie Superman',
//         'The Avengers directedBy Anthony Russo',
//         'The Avengers onDate 30.07.2010',
//         'Captain America onDate 30.07.2010',
//         'Captain America directedBy Joe Russo'
//     ]
// )


// 5
// function inventory(inputArray) {
//     let heroes = []
//
//     for (const el of inputArray) {
//         let [name, level, items] = el.split(' / ')
//         level = Number(level)
//         heroes.push({name, level, items})
//     }
//
//     let sortedByLevel = heroes.sort(
//         (heroA, heroB) => {
//             return heroA.level - heroB.level
//         }
//     )
//
//     for (const hero of sortedByLevel) {
//         console.log(`Hero: ${hero.name}`)
//         console.log(`level => ${hero.level}`)
//         console.log(`items => ${hero.items}`)
//     }
// }
//
// inventory([
//         'Isacc / 25 / Apple, GravityGun',
//         'Derek / 12 / BarrelVest, DestructionSword',
//         'Hes / 1 / Desolator, Sentinel, Antara'
//     ]
// )
// inventory([
//         'Batman / 2 / Banana, Gun',
//         'Superman / 18 / Sword',
//         'Poppy / 28 / Sentinel, Antara'
//     ]
// )


// 6
// function wordsTracker(input) {
//     let occObj = {}
//
//     let search = input.slice(0, 1)[0].split(' ')   // ['this', 'sentence']
//     let items = input.slice(1)      // [, , , ]
//
//     for (const s of search) {
//         occObj[s] = 0
//
//         for (const i of items) {
//             if (i === s) {
//                 occObj[s] += 1
//             }
//         }
//     }
//
//     const entries = Object.entries(occObj) // [[],[],[]]
//     let sortedByOcc = entries.sort(
//         (itemA, itemB) => {
//             return itemB[1] - itemA[1]
//         }
//     )
//
//     for (const x of sortedByOcc) {
//         console.log(`${x[0]} - ${x[1]}`)
//     }
// }
//
// wordsTracker([
//         'this sentence',
//         'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
//     ]
// )
// wordsTracker([
//     'is the',
//     'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
// )


// 7
// function oddOccurrences(input) {
//     let occObj = {}
//     let toPrint = []
//     let inputArray = input.split(' ')
//
//     for (const el of inputArray) {
//         let newEl = el.toLowerCase()
//         if (!(newEl in occObj)) {
//             occObj[newEl] = 1
//         } else {
//             occObj[newEl] += 1
//         }
//     }
//
//     for (const key in occObj) {
//         if (occObj[key] % 2 !== 0) {
//             toPrint.push(key)
//         }
//     }
//
//     console.log(toPrint.join(' '))
// }
//
// oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')


// 8
// function piccolo(input) {
//     let cars = []
//
//     for (const line of input) {
//         let [direction, carNumber] = line.split(', ')
//
//         if (direction === 'IN' && !(cars.includes(carNumber))) {
//             cars.push(carNumber)
//         } else if (direction === 'OUT' && cars.includes(carNumber)) {
//             let index = cars.indexOf(carNumber)
//             cars.splice(index, 1)   // remove from array
//         }
//     }
//
//     let sortedByName = cars.sort(
//         (carA, carB) => {
//             return carA.localeCompare(carB)
//         }
//     )
//
//     if (sortedByName.length === 0) {
//         console.log('Parking Lot is Empty')
//     } else {
//         console.log(cars.join('\n'))
//     }
// }
//
// piccolo(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU']
// )
// piccolo(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA']
// )


// 9
// function makeADictionary(input) {
//     let dict = {}
//
//     for (const line of input) {
//         let currentObj = JSON.parse(line)       // {}
//
//         for (const key in currentObj) {
//             dict[key] = currentObj[key]
//         }
//     }
//
//     const entries = Object.entries(dict)
//     let sortedByName = entries.sort(
//         (termA, termB) => {
//             let termAName = termA[0]
//             let termBName = termB[0]
//             return termAName.localeCompare(termBName)
//         }
//     )
//
//     for (const sortedByNameElement of sortedByName) {
//         console.log(`Term: ${sortedByNameElement[0]} => Definition: ${sortedByNameElement[1]}`)
//     }
// }
//
// makeADictionary([
//         '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//         '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//         '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//         '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//         '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
//     ]
// )
// makeADictionary([
//         '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
//         '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
//         '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
//         '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
//         '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
//     ]
// )


// 10
class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type
        this.model = model
        this.parts = parts
        this.parts.quality = this.parts.engine * this.parts.power // !
        this.fuel = fuel
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);


















