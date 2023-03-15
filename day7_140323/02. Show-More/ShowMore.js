function showText() {
    let elementMore = document.getElementById('more')
    let elementText = document.getElementById('text')

    let html = document.getElementsByTagName('html')[0]

    elementMore.style.display = 'none'
    elementText.style.display = 'inline'

    html.style.backgroundColor = 'green'
}
