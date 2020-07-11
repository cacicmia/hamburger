$(document).ready(function() {
console.log('works')
const menuOpen = $('#menu-open')
const menuClose = $('#menu-close')
const pageNavigation= $('#page-navigation')
const body = $(document.body)

menuOpen.on('click', function() {
    pageNavigation.addClass('page-nav--opened');
    body.addClass('overflow-hidden')
} )
menuClose.on('click', function() {
    pageNavigation.removeClass('page-nav--opened');
    body.removeClass('overflow-hidden')
})
$(document).on('click', function(e){
    // if (pageNavigation.hasClass('page-nav--opened') && (!pageNavigation.is(e.target) || !pageNavigation.has(e.taget))){
    //     pageNavigation.removeClass('page-nav--opened')
    // }   
})
})