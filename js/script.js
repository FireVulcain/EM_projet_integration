$(document).ready(function(){
    $('.list_article').slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.prev_arrow'),
        nextArrow: $('.next_arrow'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /* GESTION MENU */
    let $menu_responsive = $('.menu-responsive');

    $('#menu-icon').on('click', function(){
        if($menu_responsive.css("display") === "none"){
            $menu_responsive.fadeIn();
        }else if($menu_responsive.css("display") === "block"){
            $menu_responsive.fadeOut();
        }
    });
});
