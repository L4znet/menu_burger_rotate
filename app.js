/*
* Projet créé par Charly Escalona
* Charly2221@hotmail.fr
* www.charly-e.com
*/
$(document).ready(function(){
    let menu = $('nav');
    let btn = $('.btn');
    btn.click(function(e){
        e.preventDefault();
        if(menu.hasClass('open')){
            menu.removeClass('open')
            menu.addClass('close')
          } else {
            menu.removeClass('close')
            menu.addClass('open')
          }
    })
});