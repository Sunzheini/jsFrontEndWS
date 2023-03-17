function toggle() {
    let firstButton = document.getElementsByClassName('button')[0]
    let secondDiv = document.getElementById('extra')

    if (secondDiv.style.display === 'none') {
            secondDiv.style.display = 'block'
            firstButton.textContent = 'Less'
    } else {
            secondDiv.style.display = 'none'
            firstButton.textContent = 'More'
    }
}
