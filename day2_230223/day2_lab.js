// 1
// function solve(age) {
//     if (0 <= age && age <= 2) {
//         console.log('baby')
//     } else if (3 <= age && age <= 13) {
//         console.log('child')
//     } else if (14 <= age && age <= 19) {
//         console.log('teenager')
//     } else if (20 <= age && age <= 65) {
//         console.log('adult')
//     } else if (age >= 66) {
//         console.log('elder')
//     } else {
//         console.log('out of bounds')
//     }
// }


// 2
// function vacation(peopleCount, groupType, weekDay) {
//     let totalPrice

//     switch (groupType) {
//         case 'Students':
//             if (weekDay === 'Friday') {
//                 totalPrice = peopleCount * 8.45
//             } else if (weekDay === 'Saturday') {
//                 totalPrice = peopleCount * 9.80
//             } else if (weekDay === 'Sunday') {
//                 totalPrice = peopleCount * 10.46
//             }

//             if (peopleCount >= 30) {
//                 totalPrice -= 0.15 * totalPrice
//             }
//             break;
//         case 'Business':
//             if (peopleCount >= 100) {
//                 peopleCount -= 10
//             }

//             if (weekDay === 'Friday') {
//                 totalPrice = peopleCount * 10.90
//             } else if (weekDay === 'Saturday') {
//                 totalPrice = peopleCount * 15.60
//             } else if (weekDay === 'Sunday') {
//                 totalPrice = peopleCount * 16
//             }
//             break;
//         case 'Regular':
//             if (weekDay === 'Friday') {
//                 totalPrice = peopleCount * 15
//             } else if (weekDay === 'Saturday') {
//                 totalPrice = peopleCount * 20
//             } else if (weekDay === 'Sunday') {
//                 totalPrice = peopleCount * 22.50
//             }

//             if (10 <= peopleCount && peopleCount <= 20) {
//                 totalPrice -= 0.05 * totalPrice
//             }
//             break;
//     }

//     console.log(`Total price: ${totalPrice.toFixed(2)}`)
// }

// vacation(30, "Students", "Sunday")
// vacation(40,
//     "Regular",
//     "Saturday"
//     )


// 3
// function leadYear(year) {
//     if (year % 4 === 0 && year % 100 !== 0) {
//         console.log('yes')
//     } else if (year % 400 === 0) {
//         console.log('yes')
//     } else {
//         console.log('no')
//     }
// }

// leadYear(1984)
// leadYear(2003)
// leadYear(4)


// 4
// function printAndSum(start, end) {
//     sum = 0
//     myArray = []

//     for (let i = start; i <= end; i++) {
//         myArray.push(i)
//         sum += i
//     }

//     console.log(`${myArray.join(' ')}`)
//     console.log(`Sum: ${sum}`)
// }

// printAndSum(5, 10)
// printAndSum(0, 26)
// printAndSum(50, 60)


// 5
// function mTable(myNumber) {
//     for (let i = 1; i < 11; i++) {
//         let product = myNumber * i
//         console.log(`${myNumber} X ${i} = ${product}`)
//     }
// }

// mTable(5)
// mTable(2)


// 6
// function sumDigits(myNumber) {
//     myString = String(myNumber)
//     mySum = 0

//     for (const el of myString) {
//         mySum += Number(el)
//     }

//     console.log(mySum)
// }

// sumDigits(245678)
// sumDigits(97561)
// sumDigits(543)


// 7
// function charToString(c1, c2, c3) {
//     myString = ''
//     myString += c1
//     myString += c2
//     myString += c3
//     console.log(myString)
// }

// charToString('a',
// 'b',
// 'c'
// )
// charToString('%',
// '2',
// 'o'
// )
// charToString('1',
// '5',
// 'p'
// )


// 8
// function reversedChars(c1, c2, c3) {
//     myArray = []
//     myArray.push(c3)
//     myArray.push(c2)
//     myArray.push(c1)

//     result = myArray.join(' ')

//     console.log(result)
// }

// reversedChars('A',
// 'B',
// 'C'
// )
// reversedChars('1',
// 'L',
// '&'
// )


// 9
// function fruit(fruitType, grams, priceKg) {
//     console.log(`I need $${(grams * 0.001 * priceKg).toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruitType}.`)
// }

// fruit('orange', 2500, 1.80)
// fruit('apple', 1563, 2.35)


// 10
// function sameNumbers(myNumber) {
//     areNumbersSame = true
//     myString = String(myNumber)
//     partToCompare = myString[0]
//     sum = 0

//     for (const el of myString) {
//         if (el !== partToCompare) {
//             areNumbersSame = false
//         }
//         sum += Number(el)
//     }

//     if (areNumbersSame) {
//         console.log('true')
//     } else {
//         console.log('false')
//     }

//     console.log(`${sum}`)
//     }

// sameNumbers(2222222)
// sameNumbers(1234)


// 11
// function roadRadar(speed, area) {
//     switch (area) {
//         case 'motorway':
//             speedLimit = 130
//             if (speed <= speedLimit) {
//                 console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
//             } else {
//                 let difference = speed - speedLimit
//                 let status = ''
//                 if (difference <= 20) {
//                     status = 'speeding'
//                 } else if (difference <= 40) {
//                     status = 'excessive speeding'
//                 } else {
//                     status = 'reckless driving'
//                 }

//                 console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
//             }
//             break;
//         case 'interstate':
//             speedLimit = 90
//             if (speed <= speedLimit) {
//                 console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
//             } else {
//                 let difference = speed - speedLimit
//                 let status = ''
//                 if (difference <= 20) {
//                     status = 'speeding'
//                 } else if (difference <= 40) {
//                     status = 'excessive speeding'
//                 } else {
//                     status = 'reckless driving'
//                 }

//                 console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
//             }
//             break;
//         case 'city':
//             speedLimit = 50
//             if (speed <= speedLimit) {
//                 console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
//             } else {
//                 let difference = speed - speedLimit
//                 let status = ''
//                 if (difference <= 20) {
//                     status = 'speeding'
//                 } else if (difference <= 40) {
//                     status = 'excessive speeding'
//                 } else {
//                     status = 'reckless driving'
//                 }

//                 console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
//             }
//             break;
//         case 'residential':
//             speedLimit = 20
//             if (speed <= speedLimit) {
//                 console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
//             } else {
//                 let difference = speed - speedLimit
//                 let status = ''
//                 if (difference <= 20) {
//                     status = 'speeding'
//                 } else if (difference <= 40) {
//                     status = 'excessive speeding'
//                 } else {
//                     status = 'reckless driving'
//                 }

//                 console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
//             }
//             break;
//     }
// }

// roadRadar(40, 'city')
// roadRadar(21, 'residential')
// roadRadar(120, 'interstate')
// roadRadar(200, 'motorway')


// 12
// function cooking(number, ...operations) {
//     myResult = Number(number)

//     for (const el of operations) {
//         if (el === 'chop') {
//             myResult /= 2
//             console.log(`${myResult}`)
//         } else if (el === 'dice') {
//             myResult = Math. sqrt(myResult)
//             console.log(`${myResult}`)
//         } else if (el === 'spice') {
//             myResult += 1
//             console.log(`${myResult}`)
//         } else if (el === 'bake') {
//             myResult *= 3
//             console.log(`${myResult}`)
//         } else if (el === 'fillet') {
//             myResult -= myResult * 0.2
//             console.log(`${myResult}`)
//         }
//     }
// }

// cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
// cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')


//13
// function arrayRotation(myArray, nRotations) {
//     for (let i = 0; i < nRotations; i++) {
//         currentElement = myArray.shift()
//         myArray.push(currentElement)
//     }
//     console.log(myArray.join(' '))
// }

// arrayRotation([51, 47, 32, 61, 21], 2)
// arrayRotation([32, 21, 61, 1], 4)
// arrayRotation([2, 4, 15, 31], 5)


// 14
// function printF(myArray, myStep) {
//     myResult = []

//     for (let i = 0; i < myArray.length; i+=myStep) {
//         element = myArray[i];
//         myResult.push(element)
//     }

//     return myResult
// }

// printF(['5',
// '20',
// '31',
// '4',
// '20'],
// 2
// )
// printF(['dsa',
// 'asd',
// 'test',
// 'tset'],
// 2
// )
// printF(['1',
// '2',
// '3',
// '4',
// '5'],
// 6
// )


// 15
// function listOfNames(namesArray) {
//     return [...namesArray]
//         .sort((aName, bName) => aName.localeCompare(bName))
//         .map((el, index) => `${index + 1}.${el}`)
//         .join('\n')
// }

// listOfNames(["John", "Bob", "Christina", "Ema"])
// console.log(listOfNames(["John", "Bob", "Christina", "Ema"]))


// 16
// function numberSorter(myArray) {
//     result = []
//     counter = 1
//     myArray.sort((aNumber, bNumber) => aNumber - bNumber)

//     while (myArray.length > 0) {
//         if (counter % 2 !== 0) {
//             currentEl = myArray.shift()
//             result.push(currentEl)
//         } else {
//             currentEl = myArray.pop()
//             result.push(currentEl)
//         }
//         counter += 1
//     }

//     return result
// }

// console.log(numberSorter([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))


// 17
// function revealWords(words, template) {
//     wordsArray = words.split(', ')
//     templateArray = template.split(' ')

//     for (let i = 0; i < templateArray.length; i++) {
//         if (templateArray[i].indexOf('*') !== -1) {
//             elLength = templateArray[i].length

//             for (const el2 of wordsArray) {
//                 if (elLength === el2.length) {
//                     templateArray[i] = el2
//                 }
//             }
//         }
//     }

//     console.log(templateArray.join(' '))
// }

// revealWords('great', 'softuni is ***** place for learning new programming languages')
// revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')


// 18
// function modernTimes(myString) {
//     let words = myString.split(' ')
//     let result = []

//     for (const word of words) {
//         if (word.startsWith('#') && word.length > 1 && checkWord(word)) {
//             result.push(word.slice(1))
//         }
//     }

//     console.log(result.join('\n'))

//     function checkWord(myWord) {
//         let myWordLower = myWord.toLowerCase().slice(1)
//         let isValid = true

//         for (const symbol of myWordLower) {
//             let aC = symbol.charCodeAt(0)
//             if (!(aC >= 97 && aC <= 122)) {
//                 isValid = false
//                 break
//             }
//         }
//         return isValid
//     }
// }

// modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')
// modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')


// 19
// function stringSubstring(word, text) {
//     let wordLowerCase = word.toLowerCase()
//     let textArray = text.split(' ')

//     for (const el of textArray) {
//         if (el.toLowerCase() === wordLowerCase) {
//             return word
//         }
//     }

//     return `${word} not found!`
// }

// console.log(stringSubstring('javascript', 'JavaScript is the best programming language'))
// console.log(stringSubstring('python', 'JavaScript is the best programming language'))


// 20
// function pascalCaseSplitter(myString) {
//     let output = ''
//     for (const symbol of myString) {
//         const asciCode = symbol.charCodeAt(0)

//         if (asciCode >= 65 && asciCode <= 90) {
//             if (output.length > 0) {
//                 output += ', '
//             }
//             output += symbol
//         } else {
//             output += symbol
//         }
//     }

//     console.log(output)
// }

// pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
// pascalCaseSplitter('HoldTheDoor')
// pascalCaseSplitter('ThisIsSoAnnoyingToDo')