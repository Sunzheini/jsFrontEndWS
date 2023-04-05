// 1

function thePianist(inputElements) {
    const numberOfPieces = inputElements.shift()
    let piecesObj = {}

    for (let i = 0; i < numberOfPieces; i++) {
        let currentLine = inputElements.shift().split('|')
        let piece = currentLine[0]
        let composer = currentLine[1]
        let key = currentLine[2]
        piecesObj[piece] = {composer, key}
    }

    while (inputElements.length > 0) {
        let currentCommand = inputElements.shift()
        if (currentCommand === 'Stop') {
            break
        }

        let commandSplit = currentCommand.split('|')
        let newCommand = commandSplit[0]

        if (newCommand === 'Add') {
            let newPiece = commandSplit[1]
            let composer = commandSplit[2]
            let key = commandSplit[3]

            if (newPiece in piecesObj) {
                console.log(`${newPiece} is already in the collection!`)
            } else {
                piecesObj[newPiece] = {composer, key}
                console.log(`${newPiece} by ${composer} in ${key} added to the collection!`)
            }
        } else if (newCommand === 'Remove') {
            let newPiece = commandSplit[1]

            if (newPiece in piecesObj) {
                delete piecesObj[newPiece]
                console.log(`Successfully removed ${newPiece}!`)
            } else {
                console.log(`Invalid operation! ${newPiece} does not exist in the collection.`)
            }
        } else if (newCommand === 'ChangeKey') {
            let newPiece = commandSplit[1]
            let newKey = commandSplit[2]

            if (newPiece in piecesObj) {
                piecesObj[newPiece]['key'] = newKey
                console.log(`Changed the key of ${newPiece} to ${newKey}!`)
            } else {
                console.log(`Invalid operation! ${newPiece} does not exist in the collection.`)
            }
        }
    }

    for (const piecesObjKey in piecesObj) {
        console.log(`${piecesObjKey} -> Composer: ${piecesObj[piecesObjKey]['composer']}, Key: ${piecesObj[piecesObjKey]['key']}`)
    }
}

// thePianist(
//     [
//         '3',
//         'Fur Elise|Beethoven|A Minor',
//         'Moonlight Sonata|Beethoven|C# Minor',
//         'Clair de Lune|Debussy|C# Minor',
//         'Add|Sonata No.2|Chopin|B Minor',
//         'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//         'Add|Fur Elise|Beethoven|C# Minor',
//         'Remove|Clair de Lune',
//         'ChangeKey|Moonlight Sonata|C# Major',
//         'Stop'
//     ]
// )


// 2
window.addEventListener("load", solve);

function solve() {
    // get elements
    let firstNameInput = document.getElementById('first-name')
    let lastNameInput = document.getElementById('last-name')
    let ageInput = document.getElementById('age')
    let titleInput = document.getElementById('story-title')
    let genreSelectInput = document.getElementById('genre')
    let storyTextAreaInput = document.getElementById('story')
    let publishBtn = document.getElementById('form-btn')

    let PreviewUl = document.getElementById('preview-list')
    let PreviewUlTitle = document.querySelector('#preview-list > h3')

    let mainDiv = document.getElementById('main')

    publishBtn.addEventListener('click', publishFunc)

    function publishFunc() {
        // temp object for the edit function
        let tempObj = {}

        // get values inside the function
        let firstNameValue = firstNameInput.value
        let lastNameValue = lastNameInput.value
        let ageValue = ageInput.value
        let titleValue = titleInput.value
        let genreValue = genreSelectInput.options[genreSelectInput.selectedIndex].value  // vzimane ot option!!!
        let storyValue = storyTextAreaInput.value  // ako pishem v textarea, to vliza kato value a ne kato text content!

        // validation
        if (
            firstNameValue !== '' &&
            lastNameValue !== '' &&
            ageValue !== '' &&
            titleValue !== '' &&
            genreValue !== '' &&
            storyValue !== ''
        ) {
            // clearing
            firstNameInput.value = ''
            lastNameInput.value = ''
            ageInput.value = ''
            titleInput.value = ''
            genreSelectInput.options[genreSelectInput.selectedIndex].value = ''
            storyTextAreaInput.value = ''

            // filling the dict
            tempObj[firstNameValue] = firstNameValue
            tempObj[lastNameValue] = lastNameValue
            tempObj[ageValue] = ageValue
            tempObj[titleValue] = titleValue
            tempObj[genreValue] = genreValue
            tempObj[storyValue] = storyValue

            console.log(tempObj)

            // creation of elements
            let newLi = cE('li', PreviewUl, null, ['story-info'], null, null)
            let newAr = cE('article', newLi)
            let newH4 = cE('h4', newAr, `Name: ${firstNameValue} ${lastNameValue}`)
            let newP1 = cE('p', newAr, `Age: ${ageValue}`)
            let newP2 = cE('p', newAr, `Title: ${titleValue}`)
            let newP3 = cE('p', newAr, `Genre: ${genreValue}`)
            let newP4 = cE('p', newAr, `${storyValue}`)

            // creation of buttons
            let SaveBtn = cE('button', newLi, 'Save Story', ['save-btn'])
            let EditBtn = cE('button', newLi, 'Edit Story', ['edit-btn'])
            let DeleteBtn = cE('button', newLi, 'Delete Story', ['delete-btn'])

            SaveBtn.addEventListener('click', saveFunc)
            EditBtn.addEventListener('click', editFunc)
            DeleteBtn.addEventListener('click', deleteFunc)

            // disabling the publish button
            publishBtn.disabled = true
        }

        function saveFunc() {
            mainDiv.innerHTML = ''
            cE('h1', mainDiv, 'Your scary story is saved!')
        }

        function editFunc() {
            firstNameInput.value = tempObj[firstNameValue]
            lastNameInput.value = tempObj[lastNameValue]
            ageInput.value = tempObj[ageValue]
            titleInput.value = tempObj[titleValue]
            genreSelectInput.options[genreSelectInput.selectedIndex].value = tempObj[genreValue]
            storyTextAreaInput.value = tempObj[storyValue]

            PreviewUl.innerHTML = ''
            cE('h3', PreviewUl, 'Preview')
            publishBtn.disabled = false
        }

        function deleteFunc() {
            PreviewUl.innerHTML = ''
            cE('h3', PreviewUl, 'Preview')
            publishBtn.disabled = false
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
    const titleInput = document.getElementById('title')
    const addBtn = document.getElementById('add-button')
    const leadBtn = document.getElementById('load-button')
    const toDoUl = document.getElementById('todo-list')

    // button functions
    addBtn.addEventListener('click', addHandler)
    leadBtn.addEventListener('click', loadHandler)

    // base url, also test in postman
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    // {
    //     "07f260f4-466c-4607-9a33-f7273b24f1b4": {
    //     "name": "Go Shopping",
    //         "_id": "07f260f4-466c-4607-9a33-f7273b24f1b4"
    // },
    //     "bdabf5e9-23be-40a1-9f14-9117b6702a9d": {
    //     "name": "Go Fishing",
    //         "_id": "bdabf5e9-23be-40a1-9f14-9117b6702a9d"
    // }
    // }

    function loadHandler(event) {
        if (event) {
            event.preventDefault()  // because we have submit type="input"
        }

        // clear the containers right before each request
        toDoUl.innerHTML = ''

        fetch(BASE_URL)
            .then((res) => res.json())   // convert to json
            .then((resultObjInObj) => {
                const infoNestedArray = Object.values(resultObjInObj)

                for (const {name, _id} of infoNestedArray) {
                    const newLi = cE('li', toDoUl, null, null, _id)  // to be easier later
                    //_id must be with underscore!!!
                    const newSpan = cE('span', newLi, `${name}`)
                    const removeBtn = cE('button', newLi, 'Remove')
                    const editBtn = cE('button', newLi, 'Edit')
                    editBtn.addEventListener('click', editHandler)
                    removeBtn.addEventListener('click', removeHandler)
                }
            }).catch((err) => {console.error(err)})   // error with a custom message
    }

    function addHandler(e) {                    // POST
        e.preventDefault()  // because we have submit type="input"

        let newTitle = titleInput.value

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({name: newTitle})
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {loadHandler()})
            .catch((err) => {console.error(err)})
    }

    function editHandler() {                            // + replace elements
        const currentLi = this.parentNode
        let currentChildrenArray = Array.from(currentLi.children)

        let currentSpan = currentChildrenArray[0]
        let currentEditBtn = currentChildrenArray[2]

        let newEditInput = document.createElement('input')
        newEditInput.value = currentSpan.textContent    // za span e textContent
        let newSubmitBtn = document.createElement('button')
        newSubmitBtn.textContent = 'Submit'
        newSubmitBtn.addEventListener('click', submitHandler)

        currentSpan.remove()                            // removing
        currentEditBtn.remove()

        currentLi.prepend(newEditInput)                 // append in front
        currentLi.appendChild(newSubmitBtn)
    }

    function submitHandler() {                          // patch
        let currentLi = this.parentNode
        let currentChildrenArray = Array.from(currentLi.children)
        let currentId = currentLi.id

        let currentInputValue = currentChildrenArray[0].value

        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({name: currentInputValue})
        }

        fetch(`${BASE_URL}${currentId}`, httpHeaders)
            .then(() => {loadHandler()})
            .catch((err) => {console.error(err)})
    }

    function removeHandler() {              // delete
        let currentLi = this.parentNode
        let currentId = currentLi.id

        const httpHeaders = {
            method: 'DELETE',
        }

        fetch(`${BASE_URL}${currentId}`, httpHeaders)
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















