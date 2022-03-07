window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)






    });



    /*  slide,click event section */



    $('#section02 .bigimg_box').slick({
        dots: true, //navigation
        arrows: true, //arrow
        prevArrow: $('#section06 .mg_but01'), //prev
        nextArrow: $('#section06 .mg_but02'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
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
        variableWidth: false,
    
    
    });
    
    $("#sc04_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('#section04 .sec04_prev'), //prev
        nextArrow: $('#section04 .sec04_next'), //next
        autoplay:true, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        // asNavFor: '.slider2', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 5, // show slider number
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

})
