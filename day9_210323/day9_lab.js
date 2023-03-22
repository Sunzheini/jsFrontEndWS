// Endpoint e URL kym dadeno API


// Asynchronous: pyrvo se izpylnqvat sinhronnite, posle asinhr operacii
// console.log('Hello1')
// setTimeout(
//     () => {
//         console.log('Hello2')
//     }, 1000             // after 1 sec
// )
// console.log('Hello3')


// setInterval(
//     () => {
//         console.log('print each 1 sec')
//     }, 1000             // repeat each sec
// )


// Promise with then
// new Promise(
//     (resolve, reject) => {
//         setTimeout(
//             () => {
//                 resolve({id: 1, name: 'Daniel'})
//             }, 500
//         )
//     }
// ).then((res) => {           // poluchavam podadeniq gore obekt tuk
//     console.log(res)
// })


// Promise with catch
// new Promise(
//     (resolve, reject) => {
//         setTimeout(
//             () => {
//                 reject('Something is wrong')
//             }, 500
//         )
//     }
// ).catch((err) => {           // poluchavam syobshtenieto tuk
//     console.error(err)
// })


// Promise with finally
// new Promise(
//     (resolve, reject) => {
//         setTimeout(
//             () => {
//                 resolve({id: 1, name: 'Daniel'})
//             }, 500
//         )
//     }
// ).finally(() => {           // poluchavam syobshtenieto tuk
//     console.error('Prints anyway')
// })


// AJAX: Asynchronous Javascript And XML


// 4
// function loadRepos() {
//     const BASE_URL = 'https://api.github.com/users/testnakov/repos'
//     const resultContainer = document.getElementById('res')
//     fetch(BASE_URL, {method: 'GET'})
//         .then((res) => res.text())
//         .then((data) => {
//             resultContainer.textContent = data
//         })
//         .catch((err) => {
//             console.error(err)
//         })
// }


// Async / Await> zamaskira rabotata s promisi








