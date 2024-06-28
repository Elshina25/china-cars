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

document.addEventListener('DOMContentLoaded', () => {
    // добавление класса элементу инфографики для заливки фона через один элемент
    const elemArray = Array.from(document.querySelectorAll('.about-item'));
    elemArray.forEach((div, i) => {
        if (i % 2 === 1) {
            div.classList.add('orange');
        }
    });

    //добавление отступа только четным видео-элементам
    const videoArray = Array.from(document.querySelectorAll('.video-review'));
    videoArray.forEach((div, i) => {
        if (i % 2 === 1) {
            div.style.marginRight = '22px';
        }
    });

   //добавления обработчика события клика по блоку FAQ
   const faqBlock = document.querySelector('.faq-block');
   faqBlock.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('faq-question')) {
        const answerId = target.getAttribute('data-answer-id');
        const answerElem = document.querySelector(`#${answerId}`)

        if (answerElem) {
            console.log(answerElem);
            answerElem.classList.toggle('active');
            target.classList.toggle('active');
        }
    };
   });
});