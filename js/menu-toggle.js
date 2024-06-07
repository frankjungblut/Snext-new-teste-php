//quando em dispositivos mobile muda para menu hamburguer
let menuIsOpen = false;

$(document).ready(function () {
    const menuToggle = $('.menu-toggle');
    const menuMobile = $('.menu-mobile');

    menuToggle.on('click', function () {
        if (!menuIsOpen) {
            menuMobile.addClass('active');
            menuIsOpen = true;
        } else {
            menuMobile.addClass('menu-closed');
            setTimeout(function () {
                menuMobile.removeClass('active menu-closed');
                menuIsOpen = false;
            }, 500); // Tempo de espera para a animação de fechamento
        }
    });
});