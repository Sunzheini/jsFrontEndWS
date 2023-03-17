function solve() {
    const [generateTextArea, buyTextArea] = Array.from(
        document.getElementsByTagName('textarea')
    )
    const [generateButton, buyButton] = Array.from(
        document.getElementsByTagName('button')
    )
    const tBody = document.querySelector('.table > tbody')[0]

    generateButton.addEventListener('click', generateHandler)
    buyButton.addEventListener('click', buyHandler)

    function generateHandler() {
        const data = JSON.parse(generateTextArea.value)

        for (const { img, name, price, decFactor } of data) {
            const tableRow = createElement('tr', '', tBody)
            // 1
            const firstColTd = createElement('td', '', tableRow)
            createElement('img', '', firstColTd, '', '', { src: img })
            // 2
            const secondColTd = createElement('td', '', tableRow, '', '', '')
            createElement('p', name, secondColTd, '', '', '')
            // 3
            const thirdColTd = createElement(
                'td', '', tableRow, '', '', ''
            )
            createElement(
                'p', price, thirdColTd, '', '', ''
            )
            // 4
            const fourthColTd = createElement(
                'td', '', tableRow, '', '', ''
            )
            createElement(
                'p', decFactor, fourthColTd, '', '', ''
            )
            // 5
            const fifthColTd = createElement(
                'td', '', tableRow, '', '', ''
            )
            createElement(
                'input', '', fifthColTd, '', '', {
                    type: 'checkbox'
                }
            )
        }
    }

    function buyHandler() {
        // take checked inputs
        const allChecked = Array.from(document.querySelectorAll('tbody tr input:checked'))

        let boughtItems = []
        let totalPrice = 0
        let totalDecFactor = 0

        for (const input of allChecked) {
            const tableRow = input.parentElement.parentElement
            const [_firstColumn, secondColumn, thirdColumn, fourthColumn] = Array.from(tableRow.children)
            let item = secondColumn.children[0].textContent
            boughtItems.push(item)
            let currentPrice = Number(thirdColumn.children[0].textContent)
            totalPrice += currentPrice
            let currentDecFactor = Number(fourthColumn.children[0].textContent)
            totalDecFactor += currentDecFactor
        }

        buyTextArea.value += `Bought furniture: ${boughtItems.join(', ')}\n`
        buyTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`
        buyTextArea.value += `Average decoration factor: ${totalDecFactor / allChecked.length}`
    }

// use in the exam!!!
    function createElement(type, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type)

        if (content && type !== 'input') {
            htmlElement.textContent = content
        }

        if (content && type === 'input') {
            htmlElement.value = content
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement)
        }

        if (id) {
            htmlElement.id = id
        }

        if (classes) {
            htmlElement.classList.add(...classes)
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key])      // !!!
            }
        }

        return htmlElement
    }
}

