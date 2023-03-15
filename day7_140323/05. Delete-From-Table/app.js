function deleteByEmail() {
    const input = document.querySelector('input[name="email"]')
    const evenTds = Array.from(document.querySelectorAll('td:nth-child(odd)'))
    const result = document.getElementById('result')

    let emailValue = input.value
    let foundElement = evenTds.find((td) => td.textContent === emailValue)

    if (foundElement) {
        foundElement.parentElement.delete()
        result.textContent = 'Deleted'
    } else {
        result.textContent = 'Not found'
    }
}
