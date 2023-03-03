// 1
// function smallestOfThree(firstNum, secondNum, thirdNum) {
//     return Math.min(firstNum, secondNum, thirdNum)      // ! min
// }


// 2
// function calculations(firstNum, secondNum, thirdNum) {
//     const sum = (a, b) => a + b
//     const sub = (a, b) => a - b
//
//     return sub(sum(firstNum, secondNum), thirdNum)
// }
//
// console.log(calculations(23,
// 6,
// 10
// ))


// 3
// function charsInRange(charOne, charTwo) {
//     let firstCharCode = charOne.charCodeAt(0)
//     let secondCharCode = charTwo.charCodeAt(0)
//     let result = []
//
//     for (let i = Math.min(firstCharCode, secondCharCode) + 1;
//          i < Math.max(firstCharCode, secondCharCode);
//          i++) {
//         let temp = String.fromCharCode(i)       // ! fromCharCode
//         result.push(temp)
//     }
//     console.log(result.join(' '))
// }
// charsInRange('a',
// 'd'
// )


// 4
// function taskFour(singleNumber) {
//     let myString = String(singleNumber)
//     let oddSum = 0
//     let evenSum = 0
//
//     for (let i = 0; i < myString.length; i++) {
//         let currentD = Number(myString[i])
//
//         if (currentD % 2 === 0) {
//             evenSum += currentD
//         } else {
//             oddSum += currentD
//         }
//     }
//
//     return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
// }
//
// console.log(taskFour(1000435))
// console.log(taskFour(3495892137259234))


// 5
// function palindromeInts(myArray) {
//     for (const myArrayElement of myArray) {
//         let myString = String(myArrayElement)
//         let revArray = [...myString].reverse()   // ! string to array.reverse
//         let revNum = Number(revArray.join(''))
//         console.log(myArrayElement === revNum)
//     }
// }
//
// palindromeInts([123,323,421,121])
// palindromeInts([32,2,232,1010])


//      RegEx
// let text = 'DDdddwdwffjwiofjsdn 10 fiowhfuowfjow 2 djof'
// let regex = /\d/g
// let execution = regex.exec(text)    // pri vsqko izvikvane stiga do sledvashtoto
//
// let value = execution[0]     // 1
// console.log(value)
//
// let index = execution.index   // 20
// console.log(index)
//
// console.log(regex.test(text))   // true
// console.log([...text.matchAll(regex)][0])
// // ['2', index: 37, input: 'DDdddwdwffjwiofjsdn 10 fiowhfuowfjow 2 djof',
// // groups: undefined]
//
// let reg = new RegExp(`${text}`, 'g')


// 6 - Regex
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits

// function passValidator(password) {
//     const isValidLength = (pass) => pass.length >= 6 && pass.length <= 10
//     const hasOnlyLettersAndDigits = (pass) => /^[A-Za-z0-9]+$/g.test(pass)
//     const hasAtLeastTwoDigits = (pass) => [...pass.matchAll(/\d/g)].length >= 2
//
//     let passIsValid = true
//
//     if (!isValidLength(password)) {
//         console.log('Password must be between 6 and 10 characters')
//         passIsValid = false
//     }
//
//     if (!hasOnlyLettersAndDigits(password)) {
//         console.log('Password must consist only of letters and digits')
//         passIsValid = false
//     }
//
//     if (!hasAtLeastTwoDigits(password)) {
//         console.log('Password must have at least 2 digits')
//         passIsValid = false
//     }
//
//     if (passIsValid) {
//         console.log('Password is valid')
//     }
// }
//
// passValidator('logIn')
// passValidator('MyPass123')
// passValidator('Pa$s$s')


//          Arrays
// let arr = []
// new Array(3)    // empty * 3
// new Array(7).fill(7)    // [7, 7, 7, 7, 7, 7, 7]
//
// new Array(7).fill(new Array(7).fill(7)) // matrix


// 7
// function matrixGen(n) {
//     new Array(n).fill(new Array(n).fill(n))
//         .forEach(row => console.log(row.join(' ')))
// }
//
// matrixGen(4)


// 8
// function isPerfect(number) {
//     let divisors = []
//
//     for (let currentNumber = 1; currentNumber < number; currentNumber++) {
//         if (number % currentNumber === 0) {
//             divisors.push(currentNumber)
//         }
//     }
//
//     let sum = 0
//
//     let divisorsSum = divisors.reduce(
//         (previousValue, currentValue) => {
//             return previousValue + currentValue
//         }, sum
//     )     // reduce array to 1 value
//
//     if (number === divisorsSum) {
//         console.log('We have a perfect number!')
//     } else {
//         console.log('It\'s not so perfect.')
//     }
// }
//
// isPerfect(6)
// isPerfect(28)
// isPerfect(1236498)


// 9
// function loadingBar(number) {
//     let dotCount = 10 - number/10
//
//     let percents = "%".repeat(number/10)
//     let dots = ".".repeat(dotCount)
//
//     if (number !== 100) {
//         console.log(`${number}% [${percents}${dots}]`)
//         console.log('Still loading...')
//     } else {
//         console.log('100% Complete!')
//         console.log('[%%%%%%%%%%]')
//     }
// }
//
// loadingBar(30)
// loadingBar(50)
// loadingBar(100)


// 10
// function factorialDivision(numberOne, numberTwo) {
//     return (getFactorial(numberOne) / getFactorial(numberTwo)).toFixed(2)
//
//     function getFactorial(num) {
//         if (num === 1) {
//             return num
//         }
//         return num * getFactorial(num - 1)
//     }
// }
//
// console.log(factorialDivision(5, 2))
// console.log(factorialDivision(6, 2))
