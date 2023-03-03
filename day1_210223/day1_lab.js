// 1
// function solve(aNumber) {
//     console.log(aNumber * 2)
// }

// solve(4);


// 2
// function solve2(studentName, studentAge, studentGrade) {
//     let output = `Name: ${studentName}, Age: ${studentAge}, Grade: ${studentGrade.toFixed(2)}`
//     console.log(output);
// }

// solve2('John', 15, 5.54678);


// 3
// function solve3(myNumber) {
//     if (myNumber >= 5.50){
//         console.log('Excellent');
//     } else {
//         console.log('Not excellent');
//     }
// }

// solve3(5.50);


// 4
// function solve4(myNumber) {
//     switch (myNumber) {
//         case 1:
//             console.log('January')
//             break;
//         case 2:
//             console.log('February')
//             break;
//         case 3:
//             console.log('March')
//             break;
//         case 4:
//             console.log('April')
//             break;
//         case 5:
//             console.log('May')
//             break;
//         case 6:
//             console.log('June')
//             break;
//         case 7:
//             console.log('July')
//             break;
//         case 8:
//             console.log('August')
//             break;
//         case 9:
//             console.log('September')
//             break;
//         case 10:
//             console.log('October')
//             break;
//         case 11:
//             console.log('November')
//             break;
//         case 12:
//             console.log('December')
//             break;
//         default:
//             console.log('Error!')
//             break;
//     }
// }

// solve4(3);


// 5
// function solve5(number1, number2, string1) {
//     let output = null;

//     switch (string1) {
//         case '+':
//             output = number1 + number2
//             break;
//         case '-':
//             output = number1 - number2
//             break;
//         case '*':
//             output = number1 * number2
//             break;
//         case '/':
//             output = number1 / number2
//             break;
//         case '%':
//             output = number1 % number2
//             break;
//         case '**':
//             output = number1 ** number2
//             break;

//     }

//     return output
// }

// console.log(solve5(5, 6, '+'))
// console.log(solve5(3, 5.5, '*'))


// 6
// function solve6(number1, number2, number3) {
//     let output = null
//     if (number1 > number2 && number1 > number3) {
//         output = number1
//     } else if (number2 > number1 && number2 > number3) {
//         output = number2
//     } else if (number3 > number1 && number3 > number2) {
//         output = number3
//     }

//     return `The largest number is ${output}.`
// }

// console.log(solve6(5, -3, 16))
// console.log(solve6(-3, -5, -22.5))


// 10
// function solve10(number1, number2) {
//     for (let i = number1; i >= number2; i--) {
//         console.log(i)
//     }
// }

// solve10(6, 2);



