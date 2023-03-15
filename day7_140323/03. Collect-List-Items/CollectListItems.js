function extractText() {
    let liItems = Array.from(document.querySelectorAll('#items > li'))
    let textItem = document.getElementById('result')

    for (const liItem of liItems) {
        textItem.textContent += liItem.textContent += '\n'
    }
}