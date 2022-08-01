const barraMenu = document.querySelector('.barra-de-menu');
var corpo = document.querySelector('.corpo');
var menu = document.querySelector('.cabecalho__menu');

// FUNÇÃO PARA ABRIR/FECHAR MENU PRINCIPAL
barraMenu.addEventListener('click', menuPrincipal);

function menuPrincipal() {

    menu.classList.toggle('abrir-menu');
    
}

// FUNCÇÃO PARA FECHAR MENU
corpo.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu');
})