$(document).ready(function() {

    $(".hamburger").click(function() {
        $(".mob-nav").slideToggle(200);
        $(".hamburger").toggleClass("is-active");
    });

    $(".more-btn").click(function() {
        $(this).parent().parent().parent().find('.about-product-more').slideToggle(200);
        $(this).parent().parent().parent().find('.more-btn').toggleClass("more");
        $(this).parent().parent().parent().toggleClass("visible");
        $(".product-list").toggleClass("visible");
    });

    $(".about-product-more button").click(function() {
        $(".about-product-more").slideUp(200);
        $(".product-list").removeClass("visible");
        $(".product-list > ul > li").removeClass("visible");
        $(".product-info span.more-btn, .product-info span.more-btn.down").removeClass("more");
    });

    $(".cart-list-cross").click(function() {
        $(this).parent().parent().parent().parent().hide();
    });

    $(".related-products-right span").click(function() {
        $(this).parent().parent().parent().find('.related-products-container').slideToggle(200);
        $(this).parent().toggleClass("rotate");
    });

    $(document).ready(function() {
        $(".owl-carousel").owlCarousel();
    });

    var owl1 = $('.goods-carousel');
    owl1.owlCarousel({
        margin: 0,
        nav: false,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            641: {
                items: 2
            },
            997: {
                items: 3
            },
            1201: {
                items: 4
            },
            1441: {
                items: 5
            },

        }
    });



    var ow1l = $('#goods-slider');
    $('.goods-slider-next').click(function() {
        owl1.trigger('next.owl.carousel');
    });

    $('.goods-slider-prev').click(function() {
        owl1.trigger('prev.owl.carousel');
    });

    var owl = $('.partners-carousel');
    owl.owlCarousel({
        margin: 0,
        nav: false,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            769: {
                items: 2
            },
            993: {
                items: 3
            },
            1201: {
                items: 4
            },
            1381: {
                items: 5
            },
            1661: {
                items: 6
            },

        }
    });



    var owl2 = $('#partners-slider');
    $('.partners-slider-next').click(function() {
        owl2.trigger('next.owl.carousel');
    });

    $('.partners-slider-prev').click(function() {
        owl2.trigger('prev.owl.carousel');
    });

    $('.news-item').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.52;
        $(this).css('height', itemH);
    });

    $('.video-block').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.309;
        $(this).css('height', itemH);
    });

    $('.map').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 2.135;
        $(this).css('height', itemH);
    });

    $('.product-img span').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 0.958;
        $('.product-img span, .product-wrap').css('height', itemH);
    });

    $('.news-list-img ').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.648;
        $(this).css('height', itemH);
    });

    $('.shoping-cart span').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1;
        $(this).css('height', itemH);
    });


    $('.mob-nav > ul > li > a, .mob-nav > ul > li > ul > li > a, .side-bar-nav > ul > li > a').click(function(e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('down')) {
            $this.next().removeClass('down');
            $this.next().slideUp(200);

        } else {
            $this.parent().parent().find('.mob-nav ul li ul, .mob-nav ul li ul li ul, .side-bar-nav ul li ul').removeClass('down');
            $this.parent().parent().find('.mob-nav ul li ul, .mob-nav ul li ul li ul, .side-bar-nav ul li ul').slideUp(350);
            $this.next().toggleClass('down');
            $this.next().slideToggle(200);
            $(this).removeClass('down');
        }
    });

    $(".search span").click(function() {
        $(".search-input, .mob-search-input").slideToggle(200);
        $(".search-input, .mob-search-input").toggleClass("down");
    });


    $(".filter-block-left, .filter-block-right").click(function() {
        if (screen.width < 767) {
            $('.select').animate({
                height: 'toggle'
            }, 350);
        } else {
            $('.select').animate({
                width: 'toggle'
            }, 350);
        }

    });



    $('.side-bar-nav ul li a').on('click', function() {
        $(this).toggleClass("open");
    });


    $('.flexslider.first').flexslider({
        animation: "fade",
        slideshow: false,
        animationSpeed: 1000,
        controlsContainer: $(".custom-controls-container"),
        customDirectionNav: $(".custom-navigation a")
    });


    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 222,
        itemMargin: 40,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });

    $('.filter-block-middle ul li select').change(function() {
        $(this).find('option').css('color', '#1a2131');
        $(this).find('option:selected').css('color', '#0c7bb0');
    }).trigger('change');

    $("input, select, textarea, form, button").css("outline", "none");
    $("input, select, textarea, form, button").css("box-shadow", "none");


});

$(window).resize(function() {

    $('.news-item').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.52;
        $(this).css('height', itemH);
    });

    $('.video-block').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.309;
        $(this).css('height', itemH);
    });

    $('.map').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 2.135;
        $(this).css('height', itemH);
    });

    $('.product-img span').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 0.958;
        $('.product-img span, .product-wrap').css('height', itemH);
    });

    $('.news-list-img').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1.648;
        $(this).css('height', itemH);
    });

    $('.shoping-cart span').each(function() {
        var itemW = $(this).outerWidth();
        var itemH = itemW / 1;
        $(this).css('height', itemH);
    });



    $('.sub-meniu > ul > li').css({
        'height': $('.sub-meniu > ul > li').height()
    });

    $('.product-code, .product-logo').css({
        'height': $('.product-pdf img').height()
    });

    $('.side-bar').css({
        'height': $('.main-side').height()
    });

    $('.search-img').css({
        'height': $('.about-brand-container.hold').height()
    });

    $('.equal').css({
        'height': $('.equal').height()
    });

    $('.equalize').css({
        'height': $('.equalize').height()
    });

    $('.related-products-container ul li').css({
        'height': $('.related-products-img').height()
    });

    $('.tech-info-logo').css({
        'height': $('.tech-info').height()
    });

});

$(window).bind("load", function() {

    $('.sub-meniu > ul > li').css({
        'height': $('.sub-meniu > ul > li').height()
    });

    $('.product-code, .product-logo').css({
        'height': $('.product-pdf img').height()
    });

    $('.side-bar').css({
        'height': $('.main-side').height()
    });

    $('.search-img').css({
        'height': $('.about-brand-container.hold').height()
    });

    $('.equal').css({
        'height': $('.equal').height()
    });

    $('.equalize').css({
        'height': $('.equalize').height()
    });

    $('.related-products-container ul li').css({
        'height': $('.related-products-img').height()
    });

    $('.tech-info-logo').css({
        'height': $('.tech-info').height()
    });

    $(".fancybox").fancybox({
        scrolling: 'hidden',
        helpers: {
            overlay: {
                locked: true
            }
        },
        beforeShow: function() {
            $(".fancybox-skin").css("backgroundColor", "transparent");
            $(".fancybox-skin").css("padding", "0px");
        }
    });

});
