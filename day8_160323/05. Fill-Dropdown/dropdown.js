function addItem() {
    let menu = document.getElementById('menu')
    let newItemText = document.getElementById('newItemText')
    let newItemValue = document.getElementById('newItemValue')
    let button = document.getElementsByTagName('input')[2]

    let newOption = document.createElement('option')
    newOption.textContent = newItemText.value
    newOption.value = newItemValue.value
    menu.appendChild(newOption)

    newItemText.value = ''
    newItemValue.value = ''
}