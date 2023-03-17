function lockedProfile() {
    let allButtons = Array.from(document.getElementsByTagName('button'))

    for (const button of allButtons) {
        button.addEventListener('click', funcHandler)
    }

    // dostypvaiki buton, dostyp do elementite okolo nego!
    function funcHandler(e) {
        let currentButton = e.target
        let hd = Array.from(currentButton.parentElement.children)[9]

        // select the locked input !!!!!!!!!!!!!!!!!!!
        let lockRadioInput = Array.from(currentButton.parentElement.children)[2]

        // check if locked !!!!!!!!!!!
        if (lockRadioInput.checked === false) {
            if (currentButton.textContent === 'Show more') {
                hd.style.display = 'block'
                currentButton.textContent = 'Hide it'
            } else {
                hd.style.display = 'none'
                currentButton.textContent = 'Show more'
            }
        }
    }
}

