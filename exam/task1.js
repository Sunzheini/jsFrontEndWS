function sprintReview(arrayInput) {
    let pointsObj = {
        'ToDo': 0,
        'In Progress': 0,
        'Code Review': 0,
        'Done': 0
    }

    let donePoints = 0
    let otherPoints = 0

    let sprintObj = {}
    let n = arrayInput.shift()
    for (let i = 0; i < n; i++) {
        let currentLine = arrayInput.shift()
        let lineSplit = currentLine.split(':')
        let assignee = lineSplit[0]
        let taskId = lineSplit[1]
        let title = lineSplit[2]
        let status = lineSplit[3]
        let estPoints = lineSplit[4]

        if(!(sprintObj.hasOwnProperty(assignee))) {
            let newObj = {taskId, title, status, estPoints}
            sprintObj[assignee] = []
            sprintObj[assignee].push(newObj)
        } else {
            let newObj = {taskId, title, status, estPoints}
            sprintObj[assignee].push(newObj)
        }
    }

    while (arrayInput.length > 0) {
        let newLine = arrayInput.shift()
        let lineSplit = newLine.split(':')
        let command = lineSplit[0]

        if (command === 'Add New') {
            let assignee = lineSplit[1]
            let taskId = lineSplit[2]
            let title = lineSplit[3]
            let status = lineSplit[4]
            let estPoints = lineSplit[5]

            if (!(sprintObj.hasOwnProperty(assignee))) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
            } else {
                let newObj = {taskId, title, status, estPoints}
                sprintObj[assignee].push(newObj)
            }

        } else if (command === 'Change Status') {
            let found = false
            let assignee = lineSplit[1]
            let aTaskId = lineSplit[2]
            let newStatus = lineSplit[3]

            if (!(sprintObj.hasOwnProperty(assignee))) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
            } else {
                for (const obj of sprintObj[assignee]) {
                    let {taskId, title, status, estPoints} = obj
                    if (taskId === aTaskId) {
                        obj.status = newStatus
                        found = true
                        break
                    }
                }
            }
            if (!found) {
                console.log(`Task with ID ${aTaskId} does not exist for ${assignee}!`)
            }

        } else if (command === 'Remove Task') {
            let first = true
            let second = true
            let assignee = lineSplit[1]
            let index = lineSplit[2]

            if (!(sprintObj.hasOwnProperty(assignee))) {
                console.log(`Assignee ${assignee} does not exist on the board!`)
                first = false

                if (sprintObj.length <= index) {
                    console.log("Index is out of range!")
                    second = false
                }

                if (first && second) {
                    let newA = sprintObj[assignee].splice(index, 1)
                }
            }
        }


    }
    for (const nKey in sprintObj) {
        let currArr = sprintObj[nKey]
        for (const currArrElement of currArr) {
            let {taskId, title, status, estPoints} = currArrElement

            pointsObj[status] += Number(estPoints)
        }
    }

    for (const nKey in pointsObj) {
        if (nKey === 'Done') {
            console.log(`${nKey} Points: ${pointsObj[nKey]}pts`)
            donePoints += pointsObj[nKey]
        } else {
            console.log(`${nKey}: ${pointsObj[nKey]}pts`)
            otherPoints += pointsObj[nKey]
        }
    }

    if (donePoints >= otherPoints) {
        console.log("Sprint was successful!")
    } else {
        console.log("Sprint was unsuccessful...")
    }
}

sprintReview(
    [
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]

)
