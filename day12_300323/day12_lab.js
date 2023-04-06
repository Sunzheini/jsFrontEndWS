// 1

function shoppingList(inputArray) {
    let groceries = inputArray.shift().split('!')

    while (inputArray.length > 0) {
        let currentLine = inputArray.shift()
        if (currentLine === 'Go Shopping!') {
            break
        }
        let splitLine = currentLine.split(' ')
        let command = splitLine[0]

        if (command === 'Urgent') {
            let item = splitLine[1]
            if (groceries.includes(item)) {
                continue
            }
            groceries.unshift(item)

        } else if (command === 'Unnecessary') {
            let item = splitLine[1]
            if (!(groceries.includes(item))) {
                continue
            }
            let index = groceries.indexOf(item)
            groceries.splice(index, 1)

        } else if (command === 'Correct') {
            let item = splitLine[1]
            let newItem = splitLine[2]
            if (!(groceries.includes(item))) {
                continue
            }
            let index = groceries.indexOf(item)
            groceries[index] = newItem

        } else if (command === 'Rearrange') {
            let item = splitLine[1]
            if (!(groceries.includes(item))) {
                continue
            }
            let index = groceries.indexOf(item)
            let subArray = groceries.splice(index, 1)
            groceries.push(subArray)
        }
    }
    console.log(groceries.join(', '))
}

shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])


// 2
window.addEventListener('load', solve);

function solve() {
    // get elements
    let genreInput = document.getElementById('genre')
    let nameInput = document.getElementById('name')
    let authorInput = document.getElementById('author')
    let dateInput = document.getElementById('date')
    let addBtn = document.getElementById('add-btn')
    let allHitsContainer = document.querySelector('#all-hits > div')
    let allHitsH1 = document.querySelector('#all-hits > div > h1')
    let savedHitsContainer = document.querySelector('#saved-hits > div')
    let savedHitsH1 = document.querySelector('#saved-hits > div > h1')
    let totalLikesP = document.querySelector('#total-likes > div > p')

    let likesCounter = 0
    totalLikesP.textContent = `Total Likes: ${likesCounter}`

    addBtn.addEventListener('click', addHandler)

    function addHandler(e) {
        e.preventDefault()      // type = "submit"

        // temp object
        let tempObj = {}

        // get values inside the function
        let genreValue = genreInput.value
        let nameValue = nameInput.value
        let authorValue = authorInput.value
        let dateValue = dateInput.value

        // validation
        if (genreValue !== '' &&
            nameValue !== '' &&
            authorValue !== '' &&
            dateValue !== ''
        ) {
            // clearing
            genreInput.value = ''
            nameInput.value = ''
            authorInput.value = ''
            dateInput.value = ''

            // filling the dict
            tempObj[genreValue] = genreValue
            tempObj[nameValue] = nameValue
            tempObj[authorValue] = authorValue
            tempObj[dateValue] = dateValue

            // creation of elements
            let newDiv = cE('div', allHitsContainer, null, ['hits-info'])
            let newImg = cE('img', newDiv, null, null, null, {src: './static/img/img.png'})
            let newH21 = cE('h2', newDiv, `Genre: ${genreValue}`)
            let newH22 = cE('h2', newDiv, `Name: ${nameValue}`)
            let newH23 = cE('h2', newDiv, `Author: ${authorValue}`)
            let newH3 = cE('h3', newDiv, `Date: ${dateValue}`)

            // creation of buttons
            let saveBtn = cE('button', newDiv, 'Save song', ['save-btn'])
            let likeBtn = cE('button', newDiv, 'Like song', ['like-btn'])
            let deleteBtn = cE('button', newDiv, 'Delete', ['delete-btn'])

            saveBtn.addEventListener('click', saveHandler)
            likeBtn.addEventListener('click', likeHandler)
            deleteBtn.addEventListener('click', deleteHandler)
        }

        function saveHandler() {
            // creation of elements
            let newDiv2 = cE('div', savedHitsContainer, null, ['hits-info'])
            let newImg = cE('img', newDiv2, null, null, null, {src: './static/img/img.png'})
            let newH21 = cE('h2', newDiv2, `Genre: ${tempObj[genreValue]}`)
            let newH22 = cE('h2', newDiv2, `Name: ${tempObj[nameValue]}`)
            let newH23 = cE('h2', newDiv2, `Author: ${tempObj[authorValue]}`)
            let newH3 = cE('h3', newDiv2, `Date: ${tempObj[dateValue]}`)

            // creation of buttons
            let deleteBtn = cE('button', newDiv2, 'Delete', ['delete-btn'])
            deleteBtn.addEventListener('click', deleteHandler)

            allHitsContainer.innerHTML = ''
            cE('h1', allHitsContainer, 'Collection of songs')
        }

        function likeHandler() {
            likesCounter += 1
            totalLikesP.textContent = `Total Likes: ${likesCounter}`
            this.disabled = true
        }

        function deleteHandler() {
            allHitsContainer.innerHTML = ''
            cE('h1', allHitsContainer, 'Collection of songs')
            savedHitsContainer.innerHTML = ''
            cE('h1', savedHitsContainer, 'Saved songs')
        }
    }

    function cE(type, parentNode, content, classes, id, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type)
        if (content && useInnerHtml) {
            htmlElement.innerHTML = content
        } else {
            if (content && type !== 'input') {
                htmlElement.textContent = content
            }
            if (content && type === 'input') {
                htmlElement.value = content
            }
        }
        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes)
        }
        if (id) {
            htmlElement.id = id
        }
        // {src: 'link', href: 'http'}
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key])
                // htmlElement[key] = attributes[key] // option2
            }
        }
        if (parentNode) {
            parentNode.appendChild(htmlElement)
        }
        return htmlElement
    }
}


// 3
function attachEvents() {
    // select the elements
    let productInput = document.getElementById('product')
    let countInput = document.getElementById('count')
    let priceInput = document.getElementById('price')
    let addBtn = document.getElementById('add-product')
    let updateBtn = document.getElementById('update-product')
    let loadBtn = document.getElementById('load-product')
    let tableBody = document.getElementById('tbody')

    addBtn.addEventListener('click', addHandler)
    loadBtn.addEventListener('click', loadHandler)
    updateBtn.addEventListener('click', patchHandler)

    let selectedId = null

    // base url, also test in postman
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/'
    // {
    //     "1840a313-225c-416a-817a-9954d4609f7c": {
    //     "product": "Milk",
    //         "count": "2",
    //         "price": "3",
    //         "_id": "1840a313-225c-416a-817a-9954d4609f7c"
    // },
    //     "126777f5-3277-42ad-b874-76d043b069cb": {
    //     "product": "Butter",
    //         "count": "1",
    //         "price": "8",
    //         "_id": "126777f5-3277-42ad-b874-76d043b069cb"
    // },
    //     "136777f5-3277-42ad-b874-76d043b069cb": {
    //     "product": "Sugar",
    //         "count": "3",
    //         "price": "2",
    //         "_id": "136777f5-3277-42ad-b874-76d043b069cb"
    // }
    // }

    function loadHandler(event) {
        if (event) {
            event.preventDefault()  // because we have submit type="input"
        }
        // clear the containers right before each request
        tableBody.innerHTML = ''

        fetch(BASE_URL)
            .then((res) => res.json())   // convert to json
            .then((resultObjInObj) => {
                const infoNestedArray = Object.values(resultObjInObj)

                for (const {product, count, price, _id} of infoNestedArray) {
                    let newTr = cE('tr', tableBody, null, null, _id)
                    let newTd1 = cE('td', newTr, `${product}`, ['name'])
                    let newTd2 = cE('td', newTr, `${count}`, ['count-product'])
                    let newTd3 = cE('td', newTr, `${price}`, ['product-price'])
                    let newTd4 = cE('td', newTr, null, ['btn'])
                    let newB1 = cE('button', newTd4, 'Update', ['update'])
                    let newB2 = cE('button', newTd4, 'Delete', ['delete'])

                    newB1.addEventListener('click', updateHandler)
                    newB2.addEventListener('click', deleteHandler)
                }

            }).catch((err) => {console.error(err)})   // error with a custom message
    }

    function addHandler(event) {
        if (event) {
            event.preventDefault()  // because we have submit type="input"
        }
        let productValue = productInput.value
        let countValue = countInput.value
        let priceValue = priceInput.value

        productInput.value = ''
        countInput.value = ''
        priceInput.value = ''

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({product: productValue, count: countValue, price: priceValue})
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {loadHandler()})
            .catch((err) => {console.error(err)})
    }

    function updateHandler(event) {
        if (event) {
            event.preventDefault()  // because we have submit type="input"
        }

        let currentRow = this.parentNode.parentNode
        let currentChildrenArray = Array.from(currentRow.children)
        let currentProduct = currentChildrenArray[0]
        let currentCount = currentChildrenArray[1]
        let currentPrice = currentChildrenArray[2]

        productInput.value = currentProduct.textContent
        countInput.value = currentCount.textContent
        priceInput.value = currentPrice.textContent

        updateBtn.disabled = false

        selectedId = currentRow.id
    }

    function patchHandler() {
        let myProduct = productInput.value
        let myCount = countInput.value
        let myPrice = priceInput.value

        productInput.value = ''
        countInput.value = ''
        priceInput.value = ''

        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({product: myProduct, count: myCount, price: myPrice})
        }

        fetch(`${BASE_URL}${selectedId}`, httpHeaders)
            .then(() => {loadHandler()})
            .catch((err) => {console.error(err)})
    }

    function deleteHandler(event) {
        if (event) {
            event.preventDefault()  // because we have submit type="input"
        }

        let currentRow = this.parentNode.parentNode
        let currentRowId = currentRow.id

        const httpHeaders = {
            method: 'DELETE',
        }

        fetch(`${BASE_URL}${currentRowId}`, httpHeaders)
            .then(() => {loadHandler()})
            .catch((err) => {console.error(err)})
    }

    function cE(type, parentNode, content, classes, id, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type)
        if (content && useInnerHtml) {
            htmlElement.innerHTML = content
        } else {
            if (content && type !== 'input') {
                htmlElement.textContent = content
            }
            if (content && type === 'input') {
                htmlElement.value = content
            }
        }
        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes)
        }
        if (id) {
            htmlElement.id = id
        }
        // {src: 'link', href: 'http'}
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key])
                // htmlElement[key] = attributes[key] // option2
            }
        }
        if (parentNode) {
            parentNode.appendChild(htmlElement)
        }
        return htmlElement
    }
}

attachEvents()