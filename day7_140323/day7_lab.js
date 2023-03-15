// to be inserted in html
function mySum() {
    console.log(5 * 5)
}

mySum();

// script tagovete da sa nai otdolu v html v body taga

// DOM: transforms html elements into js objects
// react works with the dom tree


// ------------------------------- DOM methods

// all li's as array
let liElements = document.getElementsByTagName('li')
for (const liElement of liElements) {
    liElement.textContent += " -- naga --"
}
// first li
let liElement = document.getElementsByTagName('li')[0]
liElement.textContent += " - DONEZ"   // add this to the text of the li


// atributite koito se slagat v taga idvata kato propertita
console.log(liElements[2].id)   // pechata 'third', koeto e id na li-to

// add a class to third li
liElements[2].setAttribute('class', 'nagga')
console.log(liElements[2].className)

// add element into second li
liElements[1].innerHTML += '<p>inner paragraph</p>'

// change the style
liElements[1].style.backgroundColor = 'green'

// value ot input, vinagi vryshta string!
let inValue = document.getElementById('textInput') // 1 element
inValue.value = 'Changed Value'
console.log(inValue.value)


// printirane html na cqlata stranica
const html = document.getElementsByTagName('html')[0]
console.log(html)


// onclick
function calc() {
    let firstInput = document.getElementById('num1')
    let secondInput = document.getElementById('num2')
    let sumInput = document.getElementById('sum')
    sumInput.value = Number(firstInput.value) + Number(secondInput.value)
}


// .textContent - vzima teksta
// .innerText   - vzima i maha space-ovete


// change hidden / visible
function showTextAndChangeBgColor() {
    let elementMore = document.getElementById('more')
    let elementText = document.getElementById('text')
    let html = document.getElementsByTagName('html')[0]

    elementMore.style.display = 'none'
    elementText.style.display = 'inline'
    html.style.backgroundColor = 'green'
}


// getElementsByClassName('list-item')  // vryshta masiv

// querySelector - like in css ('.list-item > n')  // pyrviq element
// querySelectorAll - like in css ('.list-item > n')  // vsichki



// ----------------- NodeList vs HTMLCollection ------------------
// NodeList is returned by querySelector and querySelectorAll
// the other return HTMLCollection

// vinagi pri queryselector da obryshtame kym masiv
// za da polzvame metodite mu
const liItems = Array.from(document.querySelectorAll('ul > li'))


function extractText() {
    let liItems = Array.from(document.querySelectorAll('#items > li'))
    let textItem = document.getElementById('result')

    for (const liItem of liItems) {
        textItem.textContent += liItem.textContent += '\n'
    }
}


// ----------------- Parents and Children ------------------
let liItemz = Array.from(document.getElementsByTagName('li'))
let firstLz = liItemz[0]
console.log(firstLz.parentElement)      // returns parent element ul
console.log(firstLz.parentElement.parentElement)      // body
console.log(firstLz.children)           // returns masiv ot children


// create a DOM element and attach it
let p = document.createElement('p')
p.textContent = 'This is a new p'
firstLz.appendChild(p)

// remove
// firstLz.removeChild(p)
// p.remove()

// replace
// firstLz.removeChild(new_p, old_p)


function addItem() {
    const ulContainer = document.getElementById('items')
    const input = document.getElementById('newItemText')
    const newLi = document.createElement('li')

    newLi.textContent = input.value
    ulContainer.appendChild(newLi)
    input.value = ''
}


function deleteByEmail() {
    const input = document.querySelector('input[name="email"]')
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(odd)'))
    const result = document.getElementById('result')

    let emailValue = input.value
    let foundElement = evenTds.find((td) => td.textContent === emailValue)

    if (foundElement) {
        foundElement.parentElement.delete()
        result.textContent = 'Deleted'
    } else {
        result.textContent = 'Not found'
    }
}


// ----------------- DOM events ------------------
// click, mouseover, mouseout, mousedown, mouseup
// keydown, Keypress keyup
// touchstart, touchend, touchmove, touchcancel
// focus (got focus), blur (lost focus) - za input poleta
// load, unload, resize, dragstart, dragdrop
// input, change, submit, reset - za formi


// kak gi zakachame:

// 1
// v html taga s onlick=""

// 2
button1.addEventListener('click', funcHandler) // condition, func
button1.removeEventListener('click', funcHandler)

function funcHandler(e) {
    console.log(e.target.id)   // vzemam id na butona
}


function addItemAndDelete() {
    const ulContainer = document.getElementById('items')
    const input = document.getElementById('newItemText')

    const newLi = document.createElement('li')
    const newAnchor = document.createElement('a')

    newLi.textContent = input.value
    newAnchor.textContent = 'Delete'
    newAnchor.setAttribute('href', '#')
    newAnchor.addEventListener('click', deleteHandler)

    newLi.appendChild(newAnchor)
    ulContainer.appendChild(newLi)
    input.value = ''
    
    function deleteHandler(e) {
        const liItem = e.currentTarget.parentElement
        // const liItem = this.parentElement   // syshtoto
        liItem.remove()
    }
}





