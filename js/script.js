$(function () {

    $(document).on('click', '.cars-button', function () {
        let button = $(this);
        let tab = $(button).data('tab');
        $('.cars-button').removeClass('active');
        $('.cars-tabs-buttons').removeClass('active');
        $('.cars-card').removeClass('active');
        $(button).addClass('active');
        $('.item-' + tab).addClass('active');
    });


    $('.owl-cars').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 10,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }


    })

});

// добавление класса элементу инфографики для заливки фона через один элемент
document.addEventListener('DOMContentLoaded', () => {
    const elemArray = Array.from(document.querySelectorAll('.about-item'));
    elemArray.forEach((div, i) => {
        if (i % 2 === 1) {
            div.classList.add('orange');
        }
    })
})
