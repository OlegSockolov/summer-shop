$('document').ready(function(){

    $('.header__burger').on('click', f_menu);

});

function f_menu () {
    $(this).toggleClass('active');
    $('.header__nav').slideToggle(300);
    $('body').toggleClass('lock');
}