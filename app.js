//get header icon
const btn = document.querySelector('.key');
// get ul
const menu = document.querySelector('ul');
const links = document.querySelectorAll('li');

const open = ()=>{
     
  menu.classList.toggle('drop')
}
btn.addEventListener('click',open)
