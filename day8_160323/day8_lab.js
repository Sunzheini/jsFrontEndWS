
// <body onload="focused()">
// kogato se zaredi bodyto, se izvikva funkciq focused!


// zaradi judge da polzvame Array.from kydeto moje


// 1
// function subtract() {
//     let firstNumber = document.getElementById('firstNumber')
//     let secondNumber = document.getElementById('secondNumber')
//     let result = document.getElementById('result')
//
//     let subtraction = Number(firstNumber.value) - Number(secondNumber.value)
//
//     result.textContent += subtraction
// }

// 2
// function create(words) {
//     let myDiv = document.getElementById('content')
//
//     for (const word of words) {
//         myDiv.innerHTML += '<div><p>'+`${word}`+'</p></div>'    // !
//     }
//
//     let allP = Array.from(document.getElementsByTagName('p'))
//     for (const htmlParagraphElement of allP) {
//         htmlParagraphElement.parentElement.addEventListener(
//             'click', funcHandler
//         )
//         htmlParagraphElement.style.display = 'none'
//     }
//
//     function funcHandler(e) {
//         let currentDiv = e.target
//         currentDiv.children[0].style.display = 'block'
//     }
// }


// kogato v edin buton ima dobaven onclick, nqma nujda ot event listener!!!!!!!
// 3
// function toggle() {
//     let firstButton = document.getElementsByClassName('button')[0]
//     let secondDiv = document.getElementById('extra')
//
//     if (secondDiv.style.display === 'none') {
//         secondDiv.style.display = 'block'
//         firstButton.textContent = 'Less'
//     } else {
//         secondDiv.style.display = 'none'
//         firstButton.textContent = 'More'
//     }
// }


// 4
// function lockedProfile() {
//     let allButtons = Array.from(document.getElementsByTagName('button'))
//
//     for (const button of allButtons) {
//         button.addEventListener('click', funcHandler)
//     }
//
//     // dostypvaiki buton, dostyp do elementite okolo nego!
//     function funcHandler(e) {
//         let currentButton = e.target
//         let hd = Array.from(currentButton.parentElement.children)[9]
//
//         // select the locked input !!!!!!!!!!!!!!!!!!!
//         let lockRadioInput = Array.from(currentButton.parentElement.children)[2]
//
//         // check if locked !!!!!!!!!!!
//         if (lockRadioInput.checked === false) {
//             if (currentButton.textContent === 'Show more') {
//                 hd.style.display = 'block'
//                 currentButton.textContent = 'Hide it'
//             } else {
//                 hd.style.display = 'none'
//                 currentButton.textContent = 'Show more'
//             }
//         }
//     }
// }


// ako nema nishto kato inline style naprimer v nqkoi div
// ne pravi proverki s if (d.style === 'none'), a s drugo napr
// teksta na butona
// zashtoto trqbva da cykash 2 pyti s butona za da raboti !!!!!!!


// 5
// function addItem() {
//     let menu = document.getElementById('menu')
//     let newItemText = document.getElementById('newItemText')
//     let newItemValue = document.getElementById('newItemValue')
//     let button = document.getElementsByTagName('input')[2]
//
//     let newOption = document.createElement('option')
//     newOption.textContent = newItemText.value
//     newOption.value = newItemValue.value
//     menu.appendChild(newOption)
//
//     newItemText.value = ''
//     newItemValue.value = ''
// }


// 6
// function solve() {
//     document.querySelector('#searchBtn').addEventListener('click', onClick);
//     let searchField = document.getElementById('searchField')
//     function onClick() {
//         let searchValue = searchField.value
//         let allTds = Array.from(document.getElementsByTagName('td'))
//
//         for (const td1 of allTds) {
//             if (td1.parentElement.classList.contains('select')) {
//                 td1.parentElement.classList.remove('select')
//             }
//         }
//
//         for (const td2 of allTds) {
//             if (td2.textContent.includes(searchValue)) {    // includes!!!!!
//                 td2.parentElement.classList.add('select')
//             }
//         }
//
//         searchField.value = ''
//     }
// }


// ako pishem v textarea, to vliza kato value a ne kato text content!


// 7
// function solve() {
//     const output = document.getElementById('output')
//     const textArea = document.getElementById('input')
//
//     let sentences = textArea.value.split('.')
//     sentences.pop()
//
//     while (sentences.length > 0) {
//         // take elements from 0 to 2 and remove them from the array
//         let paragraphSentences = sentences.splice(0, 3)
//             .map((p) => p.trimStart())
//         const newP = document.createElement('p')
//         newP.textContent = paragraphSentences.join('.') + '.'
//         output.appendChild(newP)
//     }
// }


// `<p> ${text} </p>` ???

    
// 8        raboti s tova, razgledai go
function solve() {
    let generateButton = document.querySelectorAll('button')[0];
    let buyButton = document.querySelectorAll('button')[1];
    let table = document.querySelector('tbody');
    let result = document.querySelectorAll('textarea')[1];


    generateButton.addEventListener('click', eventGenerate);
    buyButton.addEventListener('click', eventBuy);

    function eventGenerate() {
        let inputArea = JSON.parse(document.querySelectorAll('textarea')[0].value);

        for (let inputElement of inputArea) {
            let newTr = document.createElement('tr');

            let imgTd = document.createElement('td');
            let img = document.createElement('img');
            img.src = inputElement['img'];
            imgTd.appendChild(img);
            newTr.appendChild(imgTd);

            let nameTd = document.createElement('td');
            let nameParagraph = document.createElement('p');
            nameParagraph.textContent = inputElement['name'];
            nameTd.appendChild(nameParagraph);
            newTr.appendChild(nameTd);

            let priceTd = document.createElement('td');
            let priceParagraph = document.createElement('p');
            priceParagraph.textContent = inputElement['price'];
            priceTd.appendChild(priceParagraph);
            newTr.appendChild(priceTd);

            let decTd = document.createElement('td');
            let decParagraph = document.createElement('p');
            decParagraph.textContent = inputElement['decFactor'];
            decTd.appendChild(decParagraph);
            newTr.appendChild(decTd);

            let checBoxTd = document.createElement('td');
            let checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checBoxTd.appendChild(checkBox);
            newTr.appendChild(checBoxTd);


            table.appendChild(newTr);

        }
    };

    function eventBuy() {
        let inventory = [];
        let priceSum = 0;
        let decSum = 0;

        for (let items of Array.from(table.children)) {
            let name = items.querySelectorAll('p')[0];
            let price = items.querySelectorAll('p')[1];
            let dec = items.querySelectorAll('p')[2];

            let check = items.querySelectorAll('input');


            if (check[0].checked) {
                inventory.push(name.textContent)
                priceSum += Number(price.textContent)
                decSum += Number(dec.textContent)
            };
        };

        result.value = `Bought furniture: ${inventory.join(', ')}\nTotal price: ${priceSum.toFixed(2)}\nAverage decoration factor: ${decSum / inventory.length}`;
    };

}











