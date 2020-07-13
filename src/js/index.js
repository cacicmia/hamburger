$(document).ready(function() {

    const menuOpen = $('#menu-open')
    const menuClose = $('#menu-close')
    const pageNavigation= $('#page-navigation')
    const body = $(document.body)

    const submitForm = $('#submit-form') 
    const newsletterSubmit = $('#sign-up')

    const slider = $('#hero-slider')
    slider.slick({
        dots: true,
        slidesToScroll: 4,
    })
    menuOpen.on('click', function() {
        pageNavigation.addClass('page-nav--opened');
        body.addClass('overflow-hidden')
    } )
    menuClose.on('click', function() {
        pageNavigation.removeClass('page-nav--opened');
        body.removeClass('overflow-hidden')
    })
    newsletterSubmit.on('click',function(e){
        e.preventDefault()
        form = $(this).closest('form')
        form.addClass('submitted')
    } )
    submitForm.on('click',function (e) {
        const validationMessage = $('#validation-message')
        
        e.preventDefault()
        form = $(this).closest('form')
        const formElements = form.find('.contact__form-element')
        form.addClass('submitted')
        let checker = true
        formElements.each(function(index){
            let isValid = this.checkValidity()
            if (!isValid){
                validationMessage.removeClass('contact__validation-message--success')
                validationMessage.addClass('contact__validation-message--error')
                checker = false
                return false
            } 
        })
        if (checker){
            validationMessage.removeClass('contact__validation-message--error')
            validationMessage.addClass('contact__validation-message--success')
        } else {
            
        }
    } )



})