window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)





        if( scrollTop >= 1950 ){
            $('#section03').addClass('on');
        }


        if( scrollTop >= 5000 ){
            $('#section04').addClass('on');
        }












    });



    /*  slide,click event section */





    $("#sc01_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#section01 .main_but01'), //prev
        nextArrow: $('#section01 .main_but02'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
        variableWidth: false,


    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('#main_buttons .txt_buttons .progress').removeClass('on');
        $('#main_buttons .number_txt > div').removeClass('on');

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){

        $('#main_buttons .txt_buttons .progress').addClass('on');
        
        $('#main_buttons .number_txt > div').eq(currentSlide).addClass('on');

    });






    var swiper = new Swiper('.swiper-container', {
        slidesPerView:'auto',
        centeredSlides: true,
        loop: true,
        spaceBetween: 35,
        grabCursor: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        navigation: {
            nextEl: '#section02 .new_but02',
            prevEl:'#section02 .prev',
          },
        scrollbar: {
            el: '#section02 .scroll_bar',
            draggable: true,
            dragSize:450,
        },
        on : {
            slideChangeTransitionStart : function (e) {


                $('.swiper-slide').removeClass('on');

            },
            slideChangeTransitionEnd : function (e) {

                // var currentSlide = $(e.);
                console.log(this.activeIndex);

                $('.swiper-slide-active').addClass('on');
            }
        }
    });




    $('#section06 .img_mg').slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#section06 .mg_but01'), //prev
        nextArrow: $('#section06 .mg_but02'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: true, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 3, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: true,


    });


    $("#sc07_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 6, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable:true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide:0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: true,


    });






    gsap.to('.fix-this-3', {
        scrollTrigger: {
            trigger: ".trigger-this-3",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });





})


