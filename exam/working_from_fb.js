// 1
function sprint(input) {
    let n = Number(input.shift());
    let sprintCollection ={};
    let commandParser = {
        'Add New': addSprint,
        'Remove Task': removeSprint,
        'Change Status': changeStatus,
    };
    let ToDo = 0;
    let InProgress = 0;
    let CodeReview = 0;
    let Done = 0;


    for (let index = 0; index < n; index++) {
        const [assignee, taskId, title, status, estimatedPoints] = input.shift().split(':');
        if (sprintCollection.hasOwnProperty(assignee)){
            sprintCollection[assignee].push({taskId, title, status, estimatedPoints});
        } else {
            sprintCollection[assignee] = [];
            sprintCollection[assignee].push({taskId, title, status, estimatedPoints});
        }
    }

    for (let inputLine of input) {
        let commandTokens = inputLine.split(':');
        let command = commandTokens[0];
        commandParser[command](...commandTokens.slice(1));
    }

    for (const key in sprintCollection) {
        for (let i=0; i<sprintCollection[key].length;i++) {
            if (sprintCollection[key][i]['status'] === 'ToDo') {
                ToDo += Number(sprintCollection[key][i]['estimatedPoints']);
            }
            if (sprintCollection[key][i]['status'] === 'In Progress') {
                InProgress += Number(sprintCollection[key][i]['estimatedPoints']);
            }
            if (sprintCollection[key][i]['status'] === 'Code Review') {
                CodeReview += Number(sprintCollection[key][i]['estimatedPoints']);
            }
            if (sprintCollection[key][i]['status'] === 'Done') {
                Done += Number(sprintCollection[key][i]['estimatedPoints']);
            }
        }
    }

    console.log(`ToDo: ${ToDo}pts`);
    console.log(`In Progress: ${InProgress}pts`);
    console.log(`Code Review: ${CodeReview}pts`);
    console.log(`Done Points: ${Done}pts`);

    if (Done >= (ToDo + InProgress + CodeReview)) {
        console.log(`Sprint was successful!`);
    } else {
        console.log(`Sprint was unsuccessful...`);
    }

    function addSprint(assignee, taskId, title, status, estimatedPoints) {
        if (sprintCollection.hasOwnProperty(assignee)) {
            sprintCollection[assignee].push({taskId, title, status, estimatedPoints});
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function changeStatus(assignee, taskId, newStatus) {
        if (sprintCollection.hasOwnProperty(assignee)) {
            let statusChanged = 0;
            for (let i=0; i<sprintCollection[assignee].length; i++) {
                if (sprintCollection[assignee][i]['taskId'] === taskId) {
                    sprintCollection[assignee][i]['status'] = newStatus;
                    statusChanged = 1;
                }
            }
            if (statusChanged === 0) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }

    function removeSprint(assignee, index) {
        if (sprintCollection.hasOwnProperty(assignee)) {
            let statusRemoved = 0;
            if (sprintCollection[assignee].length > index && index >= 0) {
                sprintCollection[assignee].splice(index, 1);
                statusRemoved = 1;
            }
            if (statusRemoved === 0) {
                console.log(`Index is out of range!`);
            }
        } else {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }
    }
}


// 2
window.addEventListener('load', solve);

function solve() {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const labelInput = document.getElementById('label');
    const pointsInput = document.getElementById('points');
    const assigneeInput = document.getElementById('assignee');
    const taskIdInput = document.getElementById('task-id');
    const taskSection = document.getElementById('tasks-section');
    const totalPoints = document.getElementById('total-sprint-points');

    const createBtn = document.getElementById('create-task-btn');
    const deleteBtn = document.getElementById('delete-task-btn');

    createBtn.addEventListener('click', addTask);
    deleteBtn.addEventListener('click', deleteTask);

    let task = 1;
    let pointsTotal = 0;
    let taskAll = {}
    totalPoints.innerText = `Total Points ${pointsTotal}pts`;

    function addTask(event) {
        if (event) {
            event.preventDefault();
        }

        let title = titleInput.value;
        let description = descriptionInput.value;
        let label = labelInput.value;
        let points = pointsInput.value;
        let assignee = assigneeInput.value;

        let taskId = `task-${task}`;
        taskAll[taskId] = {title, description, label, points, assignee};

        if (title !== '' && description !== '' && label !== '' && points !== '' && assignee !== '') {

            const article = createElement('article', '', taskSection, taskId, ['task-card'])
            const divFeature = createElement('div', '', article, '', ['task-card-label']);

            if (label === 'Feature') {
                divFeature.innerHTML = `Feature &#8865;`;
                divFeature.classList.add('feature');
            } else if (label === 'Low Priority Bug') {
                divFeature.innerHTML = `Low Priority Bug &#9737;`;
                divFeature.classList.add('low-priority');
            } else if (label === 'High Priority Bug') {
                divFeature.innerHTML = `High Priority Bug &#9888;`;
                divFeature.classList.add('high-priority');
            }
            createElement('h3', title, article, '', ['task-card-title']);
            createElement('p', description, article, '', ['task-card-description']);
            createElement('div', `Estimated at ${points} pts`, article, '', ['task-card-points']);
            createElement('div', `Assigned to: ${assignee}`, article, '', ['task-card-assignee']);
            const btnContainer = createElement('div', '', article, '', ['task-card-actions']);
            const deleteTaskBtn = createElement('button', 'Delete', btnContainer);
            deleteTaskBtn.addEventListener('click', loadDeleteTask);

            titleInput.value = '';
            descriptionInput.value = '';
            labelInput.value = '';
            pointsInput.value = '';
            assigneeInput.value = '';

            task += 1;
            pointsTotal += Number(points);
            totalPoints.innerText = `Total Points ${pointsTotal}pts`;
        }

        console.log(taskAll);
    }

    function loadDeleteTask() {
        const loadId = this.parentNode.parentNode.id;

        titleInput.value = taskAll[loadId]['title'];
        descriptionInput.value = taskAll[loadId]['description'];
        labelInput.value = taskAll[loadId]['label'];
        pointsInput.value = taskAll[loadId]['points'];
        assigneeInput.value = taskAll[loadId]['assignee'];

        titleInput.disabled = true;
        descriptionInput.disabled = true;
        labelInput.disabled = true;
        pointsInput.disabled = true;
        assigneeInput.disabled = true;

        taskIdInput.value = loadId.split('-')[1];

        createBtn.setAttribute('disabled', true);
        deleteBtn.removeAttribute('disabled');
    }

    function deleteTask(event) {
        if (event) {
            event.preventDefault();
        }

        id = 'task-' + taskIdInput.value;
        pointsTotal -= Number(pointsInput.value);
        totalPoints.innerText = `Total Points ${pointsTotal}pts`;
        taskIdInput.value = '';

        const deleteArticle = document.getElementById(id)
        deleteArticle.remove();

        titleInput.removeAttribute('disabled');
        descriptionInput.removeAttribute('disabled');
        labelInput.removeAttribute('disabled');
        pointsInput.removeAttribute('disabled');
        assigneeInput.removeAttribute('disabled');
        titleInput.value = '';
        descriptionInput.value = '';
        labelInput.value = '';
        pointsInput.value = '';
        assigneeInput.value = '';

        deleteBtn.setAttribute('disabled', true);
        createBtn.removeAttribute('disabled');
    }

    function createElement(type, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type);
        if (content && type !== 'input') {
            htmlElement.textContent = content;
        }
        if (content && type === 'input') {
            htmlElement.value = content;
        }
        if (id) {
            htmlElement.id = id;
        }
        // ['list', 'item',...]
        if (classes) {
            htmlElement.classList.add(...classes);
        }
        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }
        //{ src: 'link to iamge', href: 'link to site', type: 'checkbox'}
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }
        return htmlElement;
    }
}


// 3
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadBtn = document.getElementById('load-board-btn');
    const createBtn = document.getElementById('create-task-btn');
    const titleInput = document.getElementById('title');
    const descInput = document.getElementById('description');

    const todoContainer = document.querySelector('#todo-section > ul');
    const inProgresContainer = document.querySelector('#in-progress-section > ul');
    const codeReviewContainer = document.querySelector('#code-review-section > ul');
    const doneContainer = document.querySelector('#done-section > ul');

    loadBtn.addEventListener('click', loadTasks);
    createBtn.addEventListener('click', addTask);

    function loadTasks(event) {
        if (event) {
            event.preventDefault()
        }
        todoContainer.innerHTML = '';
        inProgresContainer.innerHTML = '';
        codeReviewContainer.innerHTML = '';
        doneContainer.innerHTML = '';

        fetch(BASE_URL)
            .then((res) => res.json())
            .then((tasksRes) =>
            {
                let container = '';
                let textBtn = '';
                tasks = Object.values(tasksRes);
                for (let i=0; i<tasks.length; i++) {
                    let {title, description, status, _id} = tasks[i];
                    if (status === 'ToDo') {
                        container = todoContainer;
                        textBtn = 'Move to In Progress';
                    } else if (status === 'In Progress') {
                        container = inProgresContainer;
                        textBtn = 'Move to Code Review';
                    } else if (status === 'Code Review') {
                        container = codeReviewContainer;
                        textBtn = 'Move to Done';
                    } else if (status === 'Done') {
                        container = doneContainer;
                        textBtn = 'Close';
                    }
                    const liContainer = createElement('li', '', container, _id, ['task']);
                    createElement('h3', title, liContainer);
                    createElement('p', description, liContainer);
                    const liBtn = createElement('button', textBtn, liContainer);
                    liBtn.addEventListener('click',moveDeleteTask);
                }
                console.log(tasks);
            })
            .catch((err) => console.error(err))
    }

    function addTask(event) {
        const title = titleInput.value;
        const description = descInput.value;
        const status = 'ToDo';

        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                "title": title,
                "description": description,
                "status": status
            })
        }

        if (title !== '' && description !== '' && status !== '') {
            fetch(BASE_URL, httpHeaders)
                .then(() => {
                    loadTasks();
                    titleInput.value = '';
                    descInput.value = '';
                })
                .catch((err) => console.error(err))
        }
    }

    function moveDeleteTask(event) {
        if (event) {
            event.preventDefault()
        }

        const taskContainer = this.parentNode;
        const idChange = taskContainer.id;
        const titleChange = taskContainer.getElementsByTagName('h3')[0].innerText;
        const descChange = taskContainer.getElementsByTagName('p')[0].innerText;

        let status = '';
        console.log(this.innerText);

        if (this.innerText === 'Close') {
            const httpHeaders = {
                method: 'DELETE'
            };
            fetch(BASE_URL + idChange, httpHeaders)
                .then(() => loadTasks())
                .catch((err) => console.error(err))
        } else if (this.innerText === 'Move to Done') {
            status = 'Done';
        } else if (this.innerText === 'Move to Code Review') {
            status = 'Code Review';
        } else if (this.innerText === 'Move to In Progress') {
            status = 'In Progress';
        }

        if (status !== '') {
            const httpHeaders = {
                method: 'PATCH',
                body: JSON.stringify({
                    "title": titleChange,
                    "description": descChange,
                    "status": status
                })
            }

            fetch(BASE_URL + idChange, httpHeaders)
                .then(() => {
                    loadTasks();
                })
                .catch((err) => console.error(err))
        }


    }

    function deleteTask() {

    }

    function createElement(type, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type);
        if (content && type !== 'input') {
            htmlElement.textContent = content;
        }
        if (content && type === 'input') {
            htmlElement.value = content;
        }
        if (id) {
            htmlElement.id = id;
        }
        // ['list', 'item',...]
        if (classes) {
            htmlElement.classList.add(...classes);
        }
        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }
        //{ src: 'link to iamge', href: 'link to site', type: 'checkbox'}
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }
        return htmlElement;
    }
}

attachEvents();
