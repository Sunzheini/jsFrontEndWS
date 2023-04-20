window.addEventListener("load", solve);

function solve() {
    let listOfTasks = []

    let titleInput = document.getElementById('task-title')
    let categoryInput = document.getElementById('task-category')
    let contentInput = document.getElementById('task-content')
    let submitButton = document.getElementById('publish-btn')

    let reviewListUl = document.getElementById('review-list')
    let publishListUl = document.getElementById('published-list')

    submitButton.addEventListener('click', submitHandler)

    function submitHandler() {
        let tempObj = {}

        let titleValue = titleInput.value
        let categoryValue = categoryInput.value
        let contentValue = contentInput.value

        if (titleValue !== '' && categoryValue !== '' && contentValue !== '') {
            titleInput.value = ''
            categoryInput.value = ''
            contentInput.value = ''

            tempObj['objId'] = `${titleValue}`
            tempObj['title'] = titleValue
            tempObj['category'] = categoryValue
            tempObj['content'] = contentValue

            listOfTasks.push(tempObj)

            let newLi = cE('li', reviewListUl, '', ['rpost'], `${titleValue}`)
            let newArticle = cE('article', newLi)
            let newH4 = cE('h4', newArticle, `${titleValue}`)
            let newP1 = cE('p', newArticle, `Category: ${categoryValue}`)
            let newP2 = cE('p', newArticle, `Content: ${contentValue}`)
            let editBtn = cE('button', newLi, 'Edit', ['action-btn', 'edit'])
            let postBtn = cE('button', newLi, 'Post', ['action-btn', 'post'])

            editBtn.addEventListener('click', editHandler)
            postBtn.addEventListener('click', postHandler)
        }
    }

    function editHandler() {
        let parentLi = this.parentNode
        let neededId = parentLi.id

        let title = ''
        let category = ''
        let content = ''

        for (const taskObj of listOfTasks) {
            if (taskObj['objId'] === neededId) {
                let currentObj = taskObj

                title = currentObj['title']
                category = currentObj['category']
                content = currentObj['content']

                let index = listOfTasks.indexOf(taskObj)
                listOfTasks.splice(index, 1)
            }
        }

        titleInput.value = title
        categoryInput.value = category
        contentInput.value = content

        parentLi.remove()
    }

    function postHandler() {
        let parentLi = this.parentNode

        let parentLiChildren = Array.from(parentLi.children)
        parentLiChildren[1].remove()
        parentLiChildren[2].remove()

        publishListUl.appendChild(parentLi)
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