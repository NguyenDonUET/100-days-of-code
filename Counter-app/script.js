const number = document.querySelector('.number')
// const btnSub = document.querySelector('.btn-subtract')
// const btnReset = document.querySelector('.btn-reset')
// const btnAdd = document.querySelector('.btn-add')
const buttons = document.querySelector('.buttons')

// let num = 0

buttons.addEventListener('click', e => {
   if (e.target.className.includes('add')) {
      number.innerHTML++
   }
   if (e.target.className.includes('subtract')) {
      number.innerHTML--
   }
   if (e.target.className.includes('reset')) {
      number.innerHTML = 0
   }
   // number.textContent = num
   setColor()
})

const setColor = () => {
   if (number.innerHTML < 0) {
      number.style.color = 'red'
   } else if (number.innerHTML == 0) {
      number.style.color = '#fff'
   } else {
      number.style.color = 'yellow'
   }
}
// btnSub.addEventListener('click', () => {
//    number.textContent--
// })
// btnReset.addEventListener('click', () => {
//    number.textContent = 0
// })
// btnAdd.addEventListener('click', () => {
//    number.textContent++
// })
