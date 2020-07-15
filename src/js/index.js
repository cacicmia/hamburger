$(document).ready(function() {

    const menuOpen = $('#menu-open')
    const menuClose = $('#menu-close')
    const pageNavigation= $('#page-navigation')
    const body = $(document.body)
    const articleImages = $('.article__image')
    const submitForm = $('#submit-form') 
    const newsletterSubmit = $('#sign-up')
    let scrollPosition = 0
    const slider = $('.slider__content')
    slider.each(function() {
        $(this).slick({
            dots: true,
            // slidesToScroll: 4,
            prevArrow: $('.slider__arrow--prev'),
            nextArrow: $('.slider__arrow--next'),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        prevArrow: null,
                        nextArrow: null
                    }
                }
            ]
            
        })

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

    $(document).on('scroll', function(e){
        let windowHeight = window.innerHeight;
        if (body[0].getBoundingClientRect().top < scrollPosition ){
            // scroll down
            articleImages.each(function(index) {
                if (this.getBoundingClientRect().top < windowHeight) {
                    let $this= $(this)
                    const {animateClass} = $this.data()
                    if (!$this.hasClass(animateClass)){
                        $this.addClass(animateClass)
                        $this.addClass('animation')    
                        setTimeout(()=>{$this.removeClass('animation')},2000)                    
                    } 
                }
            })
        } else {
            // scroll up
            articleImages.each(function(index) {
                if (this.getBoundingClientRect().bottom < windowHeight) {
                    let $this= $(this)
                    const {animateClass} = $this.data()
                    if (!$this.hasClass('animation')){
                        $this.removeClass(animateClass)
                    }
                    
                }
            })
        }
        
        
        scrollPosition = body[0].getBoundingClientRect().top
    })
 

})