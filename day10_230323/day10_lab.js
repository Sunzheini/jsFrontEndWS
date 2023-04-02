// npm install == pip install
// package.json == requirements.txt


// 1: nov terminal 'server' --> v papkata na servera --> node server,
// 2: nov terminal 'js-front-end' --> v papkata na zadachata --> npm install --> npm start
// 3: nov terminal 'test' --> v papkata na zadachata --> npm test


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
// function solve() {
//     const infoSpan = document.querySelector('#info > span')
//     const departInput = document.getElementById('depart')
//     const arriveInput = document.getElementById('arrive')
//
//     const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/'
//     let nextStopId = 'depot'
//     let currentStop = ''
//
//     function depart() {
//         let FINAL_URL = `${BASE_URL}${nextStopId}`
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
//                     nextStopId = next
//                     infoSpan.textContent = `Next stop ${currentStop}`
//                     departInput.disabled = true
//                     arriveInput.disabled = false
//                 }
//             )
//
//             .catch(
//                 () => {
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
//     }
// }
//
// let result = solve()


// 3
// function getInfo() {
//     const locationInput = document.getElementById('location')
//     const submitInputBtn = document.getElementById('submit')
//     const forecastDivContainer = document.getElementById('forecast')
//     const currentDivSubContainer = document.getElementById('current')
//     const upcomingDivSubContainer = document.getElementById('upcoming')
//
//     const BASE_URL_GET = 'http://localhost:3030/jsonstore/forecaster/locations'
//     const BASE_URL_CURRENT = 'http://localhost:3030/jsonstore/forecaster/today/'
//     const BASE_URL_UPCOMING = 'http://localhost:3030/jsonstore/forecaster/upcoming/'
//
//     let locationName = null
//     let locationCode = null
//     const weatherSymbols = {
//         'Sunny': '&#x2600',
//         'Partly sunny': '&#x26C5',
//         'Overcast': '&#x2601',
//         'Rain': '&#x2614',
//         'Degrees': '&#176',
//     }
//
//     submitInputBtn.addEventListener('click', infoHandler)
//
//     function infoHandler() {
//         let location = locationInput.value
//
//         fetch(BASE_URL_GET)
//             .then((res) => res.json())
//             .then((arrayOfObjects) => {
//                 for (const {code, name} of arrayOfObjects) {
//                     if (name === location) {
//                         locationCode = code
//                         locationName = name
//
//                         // Current
//                         fetch(`${BASE_URL_CURRENT}${locationCode}`)
//                             .then((res) => res.json())
//                             .then((result) => {
//                                 let locName = result.name
//                                 let condition = result.forecast.condition
//                                 let high = result.forecast.high
//                                 let low = result.forecast.low
//
//                                 forecastDivContainer.style.display = 'block'
//                                 let newDiv = document.createElement('div')
//                                 newDiv.classList.add('forecasts')
//                                 newDiv.innerHTML = `
//                                     <span class="condition symbol">${weatherSymbols[condition]}</span>
//                                     <span class="condition">
//                                         <span class="forecast-data">${locName}</span>
//                                         <span class="forecast-data">${low}&deg/${high}&deg</span>
//                                         <span class="forecast-data">${condition}</span>
//                                     </span>
//                                 `
//                                 currentDivSubContainer.appendChild(newDiv)
//                             })
//                             .catch(() => {
//                                 forecastDivContainer.textContent = 'Error'
//                             })
//
//                         // next Upcoming
//                         fetch(`${BASE_URL_UPCOMING}${locationCode}`)
//                             .then((res) => res.json())
//                             .then((result) => {
//                                 forecastDivContainer.style.display = 'block'
//                                 let newDiv2 = document.createElement('div')
//                                 newDiv2.classList.add('forecast-info')
//
//                                 let currentArray = result.forecast
//                                 for (const xObj of currentArray) {
//                                     newDiv2.innerHTML += `
//                                         <span class="upcoming">
//                                             <span class="symbol">${weatherSymbols[xObj.condition]}</span>
//                                             <span class="forecast-data">${xObj.low}&deg/${xObj.high}&deg</span>
//                                             <span class="forecast-data">${xObj.condition}</span>
//                                         </span>
//                                     `
//                                 }
//                                 upcomingDivSubContainer.appendChild(newDiv2)
//                             })
//                             .catch(() => {forecastDivContainer.textContent = 'Error'})
//                     }
//                 }
//             })
//             .catch(() => {forecastDivContainer.textContent = 'Error'})}
// }
//
// getInfo()


// 4    50%!!!
// function attachEvents() {
//     const loadBtn = document.getElementById('btnLoadPosts')
//     const postsSelect = document.getElementById('posts')
//     const viewBtn = document.getElementById('btnViewPost')
//     const postTitleH1 = document.getElementById('post-title')
//     const postBodyP = document.getElementById('post-body')
//     const commentsUl = document.getElementById('post-comments')
//
//     const BASE_URL_POSTS = 'http://localhost:3030/jsonstore/blog/posts/'
//     const BASE_URL_COMMENTS = 'http://localhost:3030/jsonstore/blog/comments/'
//
//     loadBtn.addEventListener('click', loadHandler)
//     viewBtn.addEventListener('click', viewHandler)
//
//
//     function loadHandler() {
//         fetch(BASE_URL_POSTS)
//             .then((res) => res.json())
//             .then((result) => {
//                 const info = Object.values(result)              // !!!!!! kogato vzimash ot obekt v obekt
//                 for (const {_body, id, title} of info) {
//                     let newOption = document.createElement('option')
//                     newOption.value = id
//                     newOption.textContent = title
//                     postsSelect.appendChild(newOption)
//                 }
//             })
//             .catch((err) => {console.log(err)})
//     }
//
//     function viewHandler() {
//         commentsUl.innerHTML = ''
//
//         fetch(BASE_URL_COMMENTS)
//             .then((res) => res.json())
//             .then((result) => {
//                 const currentPostId = postsSelect.options[postsSelect.selectedIndex].value; // vzimane ot option!!!
//
//                 fetch(`${BASE_URL_POSTS}${currentPostId}`)
//                     .then((res2) => res2.json())
//                     .then((result2) => {
//                         postTitleH1.textContent = result2.title
//                         postBodyP.textContent = result2.body
//
//                         fetch(BASE_URL_COMMENTS)
//                             .then((res) => res.json())
//                             .then((result) => {
//                                 const info = Object.values(result)
//                                 for (const {id, postId, text} of info) {
//                                     if (postId === currentPostId) {
//                                         let newLi = document.createElement('li')
//                                         newLi.id = id
//                                         newLi.textContent = text
//                                         commentsUl.appendChild(newLi)
//                                     }
//                                 }
//                             })
//                             .catch((err) => {console.log(err)})
//                     })
//                     .catch((err) => {console.log(err)})
//             })
//             .catch((err) => {console.log(err)})
//     }
// }
//
// attachEvents()


// 5
























// 6
// function attachEvents() {
//     const phonebookUl = document.getElementById('phonebook')
//     const btnLoad = document.getElementById('btnLoad')
//     const personInput = document.getElementById('person')
//     const phoneInput = document.getElementById('phone')
//     const btnCreate = document.getElementById('btnCreate')
//
//     const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/'
//
//     btnLoad.addEventListener('click', btnLoadHandler)
//     btnCreate.addEventListener('click', btnCreateHandler)
//
//     async function btnLoadHandler() {
//         try {
//             const phoneBookRes = await fetch(BASE_URL)
//             let phoneBookData = await phoneBookRes.json()
//             phoneBookData = Object.values(phoneBookData) // to array
//             phonebookUl.innerHTML = ''
//
//             for (const { phone, person, _id } of phoneBookData) {
//                 const li = document.createElement('li')
//                 const button = document.createElement('button')
//                 button.textContent = 'Delete'
//                 button.id = _id
//                 button.addEventListener('click', deletePhoneBookHandler)
//                 li.innerHTML = `${person}: ${phone}`
//                 li.appendChild(button)
//                 phonebookUl.appendChild(li)
//         }
//         } catch (err) {
//             console.error(err)
//         }
//     }
//
//     function btnCreateHandler() {       // POST!!!
//         const person = personInput.value
//         const phone = phoneInput.value
//         const httpHeaders = {
//             method: 'POST',
//             body: JSON.stringify({ person, phone})
//         }
//
//         fetch(BASE_URL, httpHeaders)
//             .then((res) => res.json())
//             .then(() => {
//                 btnLoadHandler()
//                 personInput.value = ''
//                 phoneInput.value = ''
//             })
//             .catch((err) => {
//                 console.error(err)})
//     }
//
//     async function deletePhoneBookHandler(e) {      // delete!!!
//         const id = this.id
//
//         const httpHeaders = {
//             method: 'DELETE',
//         }
//
//         fetch(`${BASE_URL}${id}`, httpHeaders)
//             .then((res) => res.json())
//             .then(btnLoadHandler)
//             .catch((err) => {
//                 console.error(err)
//             })
//     }
// }
//
// attachEvents();


// 7
// podobna na 8ma


// 8
// function attachEvents() {
//     const loadBooks = document.getElementById('loadBooks')
//     const booksContainer = document.querySelector('table > tbody')
//     const [titleInput, authorInput] = Array.from(document.querySelectorAll('#form > input'))
//     const submitBtn = document.querySelector('#form > button')
//     const formHeader = document.querySelector('#form > h3')
//
//     let allBooks = {}
//     let editBookId = null
//
//     const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/'
//
//     loadBooks.addEventListener('click', loadAllBooksHandler)
//     submitBtn.addEventListener('click', submitFormHandler)
//
//     async function loadAllBooksHandler() {
//         booksContainer.innerHTML = ''
//
//         const booksRes = await fetch(BASE_URL)
//         const booksData = await booksRes.json()
//
//         allBooks = booksData
//
//         for (const bookId in booksData) {
//             const {author, title} = booksData[bookId]
//
//             const tableRow = document.createElement('tr')
//             const titleColumn = document.createElement('td')
//             const authorColumn = document.createElement('td')
//             const buttonColumn = document.createElement('td')
//             const editBtn = document.createElement('button')
//             const deleteBtn = document.createElement('button')
//
//             titleColumn.textContent = title
//             authorColumn.textContent = author
//             editBtn.textContent = 'Edit'
//             deleteBtn.textContent = 'Delete'
//             deleteBtn.id = bookId
//
//             editBtn.addEventListener('click', () => {       // v sluchaq e udobna arrow func
//                 editBookId = bookId
//                 formHeader.textContent = 'Edit Form'
//                 submitBtn.textContent = 'Save'
//                 titleInput.value = title
//                 authorInput.value = author
//             })
//
//             deleteBtn.addEventListener('click', deleteBookHandler)
//
//             // Dom manipulations
//             tableRow.appendChild(titleColumn)
//             tableRow.appendChild(authorColumn)
//             buttonColumn.appendChild(editBtn)
//             buttonColumn.appendChild(deleteBtn)
//             tableRow.appendChild(buttonColumn)
//             booksContainer.appendChild(tableRow)
//         }
//     }
//
//     async function submitFormHandler () {
//         const title = titleInput.value
//         const author = authorInput.value
//         const httpHeaders = {
//             method: 'POST',
//             body: JSON.stringify({title, author})
//         }
//
//         let url = BASE_URL
//
//         if (formHeader.textContent === 'Edit FORM') {
//             httpHeaders.method = 'PUT'
//             url += editBookId
//         }
//
//         const resData = await fetch(url, httpHeaders)
//         loadAllBooksHandler()
//
//         if (formHeader.textContent === 'Edit FORM') {
//             formHeader.textContent = 'FORM'
//             submitBtn.textContent = 'Submit'
//         }
//
//         titleInput.value = ''
//         authorInput.value = ''
//     }
//
//     async function deleteBookHandler() {
//         const id = this.id
//         const httpHeaders = {
//             method: 'DELETE',
//         }
//
//         await fetch(BASE_URL + id, httpHeaders)
//         loadAllBooksHandler()
//     }
// }
//
// attachEvents()

// default povedenie na forma e da refreshva stranicata
// event.preventDefault()          // za da ne refreshva formata!!!!!!!!!!!!!!!!!!!!!!
