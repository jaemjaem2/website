window.addEventListener('DOMContentLoaded', function () {




    let cursor = $('#cursor');
    // let cursorFollow = $('#cursor-follower');

    $(document).mousemove(function(e){
        let cursorWidth = cursor.width() / 2;
        // let cursorFWidth = cursorFollow.width() / 2;

        gsap.to(cursor, {duration: 1.3, left: e.pageX - cursor.width() * 0.5, top: e.pageY - cursor.height() * 0.5, ease: "back.out"});
        // gsap.to(cursorFollow, {duration: 1.4, left: e.pageX - cursorFollow.width() * 0.5, top: e.pageY - 20, ease: "back.out(2)"});
    });


    $('.main_txt03').mouseleave(function(){
        gsap.to(cursor, {duration: .3, opacity:0});

    }).mouseenter(function(){
        gsap.to(cursor, {duration: .3, opacity:1});
    })

    $('#section01').addClass('on');

    

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)




        if( scrollTop >= 200){

        }



        if( scrollTop >= 700){
            $('#section02').addClass('on');
        }



        if( scrollTop >= 1300){
            $('.sec03_txt01').addClass('on');
        }




        if( scrollTop >= 3300){
            $('#section03').addClass('on');
        }



        if( scrollTop >= 6000){
            $('.sec05_txt01').addClass('on');
        }

        if( scrollTop >= 7500){
            $('.sec05_txt02').addClass('on');
        }



        if( scrollTop >= 9400){
            $('#section06').addClass('on');
        }



        if( scrollTop >= 11500){
            $('#section07').addClass('on');
        }




        if( scrollTop >= 17500){
            $('.sec09_txt01').addClass('on');
        }

        if( scrollTop >= 18000){
            $('.sec09_txt02').addClass('on');
        }



        if( scrollTop >= 22100){
            $('.sec10_txt01').addClass('on');
        }

        if( scrollTop >= 22500){
            $('.sec10_txt02').addClass('on');
        }



        if( scrollTop >= 27800){
            $('#section12').addClass('on');
        }






    });



    /*  slide,click event section */




})


