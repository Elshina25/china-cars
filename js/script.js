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

    $('.owl-team').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 10,
        mouseDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
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
        if (i % 2 === 1 && window.innerWidth >= 992) {
            div.style.marginRight = '22px';
        } if (window.innerWidth <= 991) {
            div.style.marginRight = '0';
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

    //открытие попапа при нажатии на кнопку его вызова
    const callPopup = Array.from(document.querySelectorAll('.call-popup'));
    const formPopup = document.querySelector('.popup-form');
    callPopup.forEach(el => {
        el.addEventListener('click', () => {
            formPopup.style.display = 'flex';
        });
    });

    //срабатывание кнопки закрытия попапа
    const close = document.querySelector('.close');
    close.addEventListener('click', () => {
        formPopup.style.display = 'none';
        if (formPopup.querySelector('input[type="checkbox"]').checked) {
            formPopup.querySelector('input[type="checkbox"]').checked = false;
        }
    });

    //закрытие попапа при клике за пределами формы, сброс состояния чекед при закрытии попапа
    window.addEventListener('click', (e) => {
        if (e.target === formPopup) {
            formPopup.style.display = 'none';
            if (formPopup.querySelector('input[type="checkbox"]').checked) {
                formPopup.querySelector('input[type="checkbox"]').checked = false;
            }
        }
    });

    //дизейбл кнопки отправки данных формы при пустых полях
    const forms = Array.from(document.querySelectorAll('form'));
    forms.forEach(el => {
        const submitButton = el.querySelector('.form-button');

        const validateForm = () => {
            let isValid = true;
            const requiredFields = Array.from(el.querySelectorAll('[required]'));
            requiredFields.forEach(input => {
                if (!input.value && input.type !== 'checkbox') {
                    isValid = false;
                } else if (input.type === 'checkbox' && !input.checked) {
                    isValid = false;
                }
            });
            submitButton.disabled = !isValid;
            submitButton.style.backgroundColor = isValid ? '' : 'grey';
        };


        el.addEventListener('input', validateForm);
        el.addEventListener('change', validateForm);
        validateForm();
    });

    //открытие меню-бургера по клику на иконку
    const burger = document.querySelector('.burger-menu');
    const menuBlock = document.querySelector('.mobile-menu');
    window.addEventListener('click', (e) => {
        if (e.target === burger) {
            menuBlock.classList.toggle('active');
        } else if (!menuBlock.contains(e.target) && e.target !== burger) {
            menuBlock.classList.remove('active');
        }
    });
});



ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.776472, 37.632880],
        zoom: 14
    }, {
        searchControlProvider: 'yandex#search'
    }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        }, {
            preset: 'islands#greenDotIconWithCaption',
            iconColor: 'red'
        });


    myMap.geoObjects
        .add(myPlacemark);
});