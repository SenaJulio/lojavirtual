let menuBurger = document.querySelector('.menu-burger'); // itens selecionados
let headerMenu = document.querySelector('.header-menu');


menuBurger.addEventListener('click', ()=>{
  //  se o header-menu está aparecendo, ele desaparece.
  // se está oculto ele aparece.
  if(headerMenu.style.display  === 'block'){
    headerMenu.style.display = 'none';
    menuBurger.classList.remove('active');
  } else {
    headerMenu.style.display = 'block';
    menuBurger.classList.add('active');
  }

});