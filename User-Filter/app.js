const listUser = document.getElementById('result')
const filter = document.getElementById('filter')
const url = 'https://randomuser.me/api?results=50'

// focus on input first load
window.addEventListener('load', event => {
   document.getElementById('filter').focus()
})

let listItems = []

// update listUser whenever typing
filter.addEventListener('input', e => filterUsers(e.target.value))

// fetch data and show it
async function getData() {
   const res = await fetch(url)
   const { results } = await res.json()

   // clear listUser after fetch data successed
   listUser.innerHTML = ''

   results.forEach(user => {
      let li = document.createElement('li')
      li.innerHTML = `
      <img
                  src="${user.picture.large}"
                  alt="${user.name.first}"
               />
               <div class="user-info">
                  <h4>${user.name.first}</h4>
                  <p>${user.location.city}, ${user.location.country}</p>
               </div>
      `
      listItems.push(li)
      //   display on screen
      listUser.append(li)
   })
}

const filterUsers = searchVal => {
   listItems.forEach(item => {
      // nếu li nào có chứa searchVal thì display. Ko thì thêm class .hide
      if (item.innerText.toLowerCase().includes(searchVal.toLowerCase())) {
         item.classList.remove('hide')
      } else {
         item.classList.add('hide')
      }
   })
}

getData()
