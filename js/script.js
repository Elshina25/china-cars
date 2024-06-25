$(function() {

    $(document).on('click', '.cars-button', function() {
        let button = $(this);
        let tab = $(button).data('tab');
        $('.cars-button').removeClass('active');
        $('.cars-tabs-buttons').removeClass('active');
        $(button).addClass('active');
        $('.item-tab-' + tab).addClass('active');
    });


    $('.owl-cars').owlCarousel({
        loop:true,
        nav:false,
        dots: true,
        margin:10,
        mouseDrag: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    
    
    })
    
    
    // $('.owl-items_set').owlCarousel({
    //     loop:true,
    //     nav:true,
    //     dots: true,
    //     margin:10,
    //     mouseDrag: true,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:2
    //         },
    //         600:{
    //             items:2
    //         },
    //         1000:{
    //             items:4
    //         }
    //     }
    
       
    // })


});

