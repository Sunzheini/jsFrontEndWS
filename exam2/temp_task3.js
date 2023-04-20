function solve() {
    let selectedId = ''

    // select the elements
    let titleInput = document.getElementById('course-name')
    let typeInput = document.getElementById('course-type')
    let descInput = document.getElementById('description')
    let teacherInput = document.getElementById('teacher-name')
    let addBtn = document.getElementById('add-course')
    let editBtn = document.getElementById('edit-course')
    let loadBtn = document.getElementById('load-course')
    let listDiv = document.getElementById('list')

    // button functions
    addBtn.addEventListener('click', addHandler)
    editBtn.addEventListener('click', editHandler)
    loadBtn.addEventListener('click', loadHandler)

    // base url, also test in postman
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'

    // {
    //     "07f260f4-466c-4607-9a33-f7273b24f1b4": {
    //     "title": "JS Back-End",
    //      "type": "Long",
    //      "description": "JS Back-end responsible for managing the interchange of data between the server and the users",
    //      "teacher": "John Brown",
    //      "_id": "07f260f4-466c-4607-9a33-f7273b24f1b4"
    //      },
    // }

    function loadHandler(e) {
        // clear the containers right before each request
        listDiv.innerHTML = ''

        fetch(BASE_URL)
            .then((res) => res.json())   // convert to json
            .then((resultObjInObj) => {
                const infoNestedArray = Object.values(resultObjInObj)

                for (const {title, type, description, teacher, _id} of infoNestedArray) {
                    let newDiv = cE('div', listDiv, null, ['container'], `${_id}`)
                    let newH2 = cE('h2', newDiv, `${title}`)
                    let newH31 = cE('h3', newDiv, `${teacher}`)
                    let newH32 = cE('h3', newDiv, `${type}`)
                    let newH4 = cE('h4', newDiv, `${description}`)
                    let secondEditBtn = cE('button', newDiv, 'Edit Course', ['edit-btn'])
                    let secondFinishBtn = cE('button', newDiv, 'Finish Course', ['finish-btn'])

                    secondEditBtn.addEventListener('click', secondEditHandler)
                    secondFinishBtn.addEventListener('click', secondFinishHandler)
                }

                editBtn.disabled = true

        }).catch((err) => {console.error(err)})   // error with a custom message
    }

    function addHandler() {
        let titleValue = titleInput.value
        let typeValue = typeInput.value
        let descValue = descInput.value
        let teacherValue = teacherInput.values

        titleInput.value = ''
        typeInput.value = ''
        descInput.value = ''
        teacherInput.values = ''

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({title: titleValue, type: typeValue, description: descValue, teacher: teacherValue})
        }

        fetch(BASE_URL, httpHeaders)
            .then(() => {loadHandler()})
            .catch((err) => {console.error(err)})
    }

    function secondEditHandler() {
        let currentDiv = this.parentNode
        let currentDivChildren = Array.from(currentDiv.children)
        selectedId = currentDiv.id

        let currentTitle = currentDivChildren[0].textContent
        let currentTeacher = currentDivChildren[1].textContent
        let currentType = currentDivChildren[2].textContent
        let currentDesc = currentDivChildren[3].textContent

        titleInput.value = currentTitle
        typeInput.value = currentType
        descInput.value = currentDesc
        teacherInput.value = currentTeacher

        editBtn.disabled = false
        addBtn.disabled = true
    }

    function editHandler() {
        let newTitle = titleInput.value
        let newType = typeInput.value
        let newDesc = descInput.value
        let newTeacher = teacherInput.value

        const httpHeaders = {
            method: 'PUT',
            body: JSON.stringify({
                title: newTitle,
                type: newType,
                description: newDesc,
                teacher: newTeacher
            })
        }

        fetch(`${BASE_URL}${selectedId}`, httpHeaders)
            .then(() => {loadHandler()})
            .catch((err) => {console.error(err)})

        editBtn.disabled = true
        addBtn.disabled = false
    }

    function secondFinishHandler() {
        let currentDiv = this.parentNode
        selectedId = currentDiv.id

        const httpHeaders = {
            method: 'DELETE',
        }

        fetch(`${BASE_URL}${selectedId}`, httpHeaders)
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

solve()