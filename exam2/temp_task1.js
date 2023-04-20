

function horseRacing(inputArray) {
    let positions = inputArray.shift().split('|')
    let output = ''
    let winner = ''

    for (const inputLine of inputArray) {
        if (inputLine === 'Finish') {
            break
        }

        let inputLineSplit = inputLine.split(' ')
        let command = inputLineSplit[0]

        if (command === 'Retake') {
            let overtakingHorse = inputLineSplit[1]
            let overtakenHorse = inputLineSplit[2]
            let pos1 = positions.indexOf(overtakingHorse)
            let pos2 = positions.indexOf(overtakenHorse)

            if (pos1 < pos2) {
                positions[pos1] = overtakenHorse
                positions[pos2] = overtakingHorse
                console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
                }
            } else if (command === 'Trouble') {
            let troubledHorse = inputLineSplit[1]
            let troubledPosition = positions.indexOf(troubledHorse)

            if (troubledPosition !== 0) {
                let targetTroubledPosition = troubledPosition - 1
                let targetTroubledHorse = positions[targetTroubledPosition]

                positions[troubledPosition] = targetTroubledHorse
                positions[targetTroubledPosition] = troubledHorse
                console.log(`Trouble for ${troubledHorse} - drops one position.`)
                }

            }  else if (command === 'Rage') {
                let ragedHorse = inputLineSplit[1]
                let ragedPosition = positions.indexOf(ragedHorse)
                let targetPosition = ragedPosition + 2

                if (positions.length > targetPosition) {
                    for (let i = 0; i < 2; i++) {
                        let overtakingH = positions[ragedPosition]
                        let overtakenH = positions[ragedPosition + 1]
                        let pos11 = positions.indexOf(overtakingH)
                        let pos22 = positions.indexOf(overtakenH)
                        positions[pos11] = overtakenH
                        positions[pos22] = overtakingH

                        ragedPosition ++
                    }
                    console.log(`${ragedHorse} rages 2 positions ahead.`)
                }
            } else if (command === 'Miracle') {
                let miracleHorse = positions.shift()
                positions.push(miracleHorse)


                console.log(`What a miracle - ${miracleHorse} becomes first.`)

        }
    }

    for (const horse of positions) {
        output += horse

        if (positions.indexOf(horse) < positions.length - 1) {
            output += '->'
        }
    }

    console.log(output)

    console.log(`The winner is: ${positions[positions.length - 1]}`)
}




horseRacing(['Onyx|Domino|Sugar|Fiona',
    'Trouble Onyx',
    'Retake Onyx Sugar',
    'Rage Domino',
    'Miracle',
    'Finish'])


