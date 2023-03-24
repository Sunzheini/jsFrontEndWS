// npm install == pip install
// package.json == requirements.txt

// 1                            // Use as a template
// function getInfo() {
//     // select the elements
//     const stopIdInput = document.getElementById('stopId')
//     const stopNameDiv = document.getElementById('stopName')
//     const busesUl = document.getElementById('buses')
//
//     // base url, also test in postman
//     const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/'
//
//     // get the values
//     let stopIdInputValue = stopIdInput.value
//
//     // finalize url
//     const FINAL_URL = `${BASE_URL}${stopIdInputValue}`
//
//     // clear the containers before each request
//     stopNameDiv.textContent = ''
//     busesUl.innerHTML = ''
//
//     // fetch request, returns a promise
//     fetch(
//         FINAL_URL,
//         {method: 'GET'}
//     )
//
//     // convert to json
//         .then(
//             (res) => res.json()
//         )
//
//     // busInfo is returned, in {} we define actions
//         .then(
//             (busInfo) => {
//                 const {name, buses} = busInfo
//                 stopNameDiv.textContent = name
//                 for (const busId in buses) {
//                     const li = document.createElement('li')
//                     li.textContent = `Bus ${busId} arrives in ${buses[busId]} minutes`
//                     busesUl.appendChild(li)
//                 }
//             }
//         )
//
//     // error with a custom message
//         .catch(
//             (err) => {
//                 stopNameDiv.textContent = 'Error'
//             }
//         )
// }
//     // run the tests
//     // go to D:\Study\Projects\VSC\js_frontend\day10_temp\01.Bus-Stop
//     // zip all except node_modules and tests, and submit to judge


// 2

// raboti, no pyrvite 2 ot 5 testa ne minavat

// function solve() {
//     const infoSpan = document.getElementById('info')
//     const departInput = document.getElementById('depart')
//     const arriveInput = document.getElementById('arrive')
//
//     const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/'
//     let currentStop = ''
//     let nextStop = 'depot'
//
//     function depart() {
//         let FINAL_URL = `${BASE_URL}${nextStop}`
//         infoSpan.textContent = ''
//
//         // fetch request, returns a promise
//         fetch(
//             FINAL_URL,
//             {method: 'GET'}
//         )
//
//             .then(
//                 (res) => res.json()
//             )
//
//             .then(
//                 (stopInfo) => {
//                     const {name, next} = stopInfo
//
//                     currentStop = name
//                     nextStop = next
//                     infoSpan.textContent = `Next stop ${currentStop}`
//                     departInput.disabled = true
//                     arriveInput.disabled = false
//                 }
//             )
//
//             .catch(
//                 (err) => {
//                     infoSpan.textContent = 'Error'
//                     departInput.disabled = true
//                     arriveInput.disabled = true
//                 }
//             )
//     }
//
//     async function arrive() {
//         infoSpan.textContent = `Arriving at ${currentStop}`
//         departInput.disabled = false
//         arriveInput.disabled = true
//     }
//
//     return {
//         depart,
//         arrive
//     };
// }
//
// let result = solve();











