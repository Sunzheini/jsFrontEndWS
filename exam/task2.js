window.addEventListener('load', solve);

function solve() {
    let totalPoints = 0

    // get elements
    let titleInput = document.getElementById('title')
    let descriptionInput = document.getElementById('description')
    let labelSelect = document.getElementById('label')
    let pointsInput = document.getElementById('points')
    let assigneeInput = document.getElementById('assignee')

    let createBtn = document.getElementById('create-task-btn')
    let deleteBtn = document.getElementById('delete-task-btn')

    let taskSection = document.getElementById('tasks-section')
    let taskSectionH1 = document.querySelector('#tasks-section > h1')
    let taskSectionP = document.querySelector('#tasks-section > p')
    taskSectionP.textContent = `Total Points ${totalPoints}pts`

    createBtn.addEventListener('click', createHandler)
    deleteBtn.addEventListener('click', deleteHandler)

    const labelObj = {
        'Feature': '&#8865',
        'Low Priority Bug': '&#9737',
        'High Priority Bug': '&#9888',
    }

    const classObj = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority',
    }

    let taskNumber = 0

    function createHandler() {
        // get values inside the function
        let titleValue = titleInput.value
        let descriptionValue = descriptionInput.value
        let labelValue = labelSelect.options[labelSelect.selectedIndex].value
        let pointsValue = pointsInput.value
        let assigneeValue = assigneeInput.value

        // validation
        if (
            titleValue !== '' &&
            descriptionValue !== '' &&
            labelValue !== '' &&
            pointsValue !== '' &&
            assigneeValue !== ''
        ) {
            //clearing
            titleInput.value = ''
            descriptionInput.value = ''
            labelSelect.options[labelSelect.selectedIndex].value = ''
            pointsInput.value = ''
            assigneeInput.value = ''

            // creation of elements
            taskNumber += 1
            totalPoints += Number(pointsValue)

            let newArt = cE('article', taskSection, null, ['task-card'], `task-${taskNumber}`)
            let div1 = cE('div', newArt, `Feature ${labelObj[labelValue]}`, ['task-card-label', `${classObj[labelValue]}`])
            let h3 = cE('h3', newArt, `${titleValue}`, ['task-card-title'])
            let p = cE('p', newArt, `${descriptionValue}`, ['task-card-description'])
            let div11 = cE('div', newArt, `Estimated at ${pointsValue} pts`, ['task-card-points'], `${pointsValue}`)
            let div12 = cE('div', newArt, `Assigned to: ${assigneeValue}`, ['task-card-assignee'], `${assigneeValue}`)
            let div13 = cE('div', newArt, null, ['task-card-actions'])
            let b1 = cE('button', div13, 'Delete', null, `${labelValue}`)

            taskSectionP.textContent = `Total Points ${totalPoints}pts`

            b1.addEventListener('click', deleteSingleHandler)
        }

    }

    function deleteSingleHandler() {
        let currentArticle = this.parentNode.parentNode
        let currentArticleId = currentArticle.id
        let myChildren = Array.from(currentArticle.children)

        titleInput.value = myChildren[1].textContent
        titleInput.disabled = true
        descriptionInput.value = myChildren[2].textContent
        descriptionInput.disabled = true
        labelSelect.options[labelSelect.selectedIndex].value = this.id
        labelSelect.disabled = true
        pointsInput.value = myChildren[3].id
        pointsInput.disabled = true
        assigneeInput.value = myChildren[4].id
        assigneeInput.disabled = true

        deleteBtn.disabled = false

        let getS = document.getElementById('task-id')
        getS.value = currentArticleId
    }

    function deleteHandler() {

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