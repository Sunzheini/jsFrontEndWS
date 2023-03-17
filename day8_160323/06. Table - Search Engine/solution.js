function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchField = document.getElementById('searchField')
   function onClick() {
      let searchValue = searchField.value
      let allTds = Array.from(document.getElementsByTagName('td'))

      for (const td1 of allTds) {
         if (td1.parentElement.classList.contains('select')) {
            td1.parentElement.classList.remove('select')
         }
      }

      for (const td2 of allTds) {
         if (td2.textContent.includes(searchValue)) {    // includes!!!!!
            td2.parentElement.classList.add('select')
         }
      }

      searchField.value = ''
   }
}
