$(document).ready(function() {
console.log('works')
const menuOpen = $('#menu-open')
const menuClose = $('#menu-close')
const pageNavigation= $('#page-navigation')
const body = $(document.body)
const formElements = $('.contact__form-element')
const submitForm = $('#submit-form') 

menuOpen.on('click', function() {
    pageNavigation.addClass('page-nav--opened');
    body.addClass('overflow-hidden')
} )
menuClose.on('click', function() {
    pageNavigation.removeClass('page-nav--opened');
    body.removeClass('overflow-hidden')
})
submitForm.on('click', function(e) {
    
    form = $(this).closest('form')
    form.addClass('submitted')
})
// formElements.on('focusout', function() {
//     let element = $(this)
//     let isValid = this.checkValidity()
//     if (!isValid){
//         element.addClass('has-error')
//     } else {
//         element.removeClass('has-error')

//     }

// })
$(document).on('click', function(e){
    // if (pageNavigation.hasClass('page-nav--opened') && (!pageNavigation.is(e.target) || !pageNavigation.has(e.taget))){
    //     pageNavigation.removeClass('page-nav--opened')
    // }   
})
})