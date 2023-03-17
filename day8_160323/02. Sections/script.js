function create(words) {
   let myDiv = document.getElementById('content')

   for (const word of words) {
      myDiv.innerHTML += '<div><p>'+`${word}`+'</p></div>'    // !
   }

   let allP = Array.from(document.getElementsByTagName('p'))
   for (const htmlParagraphElement of allP) {
      htmlParagraphElement.parentElement.addEventListener(
          'click', funcHandler
      )
      htmlParagraphElement.style.display = 'none'
   }

   function funcHandler(e) {
      let currentDiv = e.target
      currentDiv.children[0].style.display = 'block'
   }
}
