function calc() {
    let firstInput = document.getElementById('num1')
    let secondInput = document.getElementById('num2')
    let sumInput = document.getElementById('sum')

    sumInput.value = Number(firstInput.value) + Number(secondInput.value)
}
