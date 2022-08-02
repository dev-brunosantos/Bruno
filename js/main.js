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

var tecnologias = document.querySelectorAll('.tecnologias');
var htmlTech = document.getElementById('html');
var cssTech = document.getElementById('css');
var jsTech = document.getElementById('js');

function html() {
    animar();
    htmlTech.style.display = "block";
    cssTech.style.display = "none";
    jsTech.style.display = "none";
}
function css() {
    animar();
    htmlTech.style.display = "none";
    cssTech.style.display = "block";
    jsTech.style.display = "none";
}
function js() {
    animar();
    htmlTech.style.display = "none";
    cssTech.style.display = "none";
    jsTech.style.display = "block";
}

function animar() {
    for(i=0; i<tecnologias.length; i++) {
        
        htmlTech.classList.add('aparecer');
        cssTech.classList.add('aparecer');
        jsTech.classList.add('aparecer');
        
        setTimeout(function() {
            htmlTech.classList.remove('aparecer');
            cssTech.classList.add('aparecer');
            jsTech.classList.add('aparecer');
        },500)
    }
}
