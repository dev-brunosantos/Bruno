const barraMenu = document.querySelector('.barra-de-menu');

barraMenu.addEventListener('click', menuPrincipal);

function menuPrincipal() {

    var menu = document.querySelector('.cabecalho__menu');
    menu.classList.toggle('abrir-menu');
    
}