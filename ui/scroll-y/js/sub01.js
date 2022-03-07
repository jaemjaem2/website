window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)




        if( scrollTop >= 400 ){
            $('#section02').addClass('on');
        }


        if( scrollTop >= 1400 ){
            $('#section03').addClass('on');
        }

        if( scrollTop >= 2400 ){
            $('#section04').addClass('on');
        }


        if( scrollTop >= 3300 ){
            $('#section05').addClass('on');
        }


    });



    /*  slide,click event section */


    $('#section06 .report_container').slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#section06 .re_but01'), //prev
        nextArrow: $('#section06 .re_but02'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        asNavFor: '.re_txtbox', // another slider
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
    
    $('#section06 .re_txtbox').slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#section06 .re_but01'), //prev
        nextArrow: $('#section06 .re_but02'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        asNavFor: '.report_container', // another slider
        centerMode: true, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
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


    $('#section04 .icon').click(function(){

        $('#section04 iframe').toggleClass('on');

    });


})

