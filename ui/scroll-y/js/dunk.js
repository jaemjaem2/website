window.addEventListener('DOMContentLoaded', function () {




    let cursor = $('#cursor');
    // let cursorFollow = $('#cursor-follower');


    $('#section01').mouseleave(function(){
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



        if( scrollTop >= 3300){
            $('.sec04_txt01').addClass('on');
        }

        if( scrollTop >= 3900){
            $('.sec04_txt02').addClass('on');
        }


        if( scrollTop >= 4300){
            $('.sec04_txt03').addClass('on');
        }


        if( scrollTop >= 5500){
            $('.sec04_txt04').addClass('on');
        }

        if( scrollTop >= 6800){
            $('.sec04_txt05').addClass('on');
        }

        if( scrollTop >= 7600){
            $('.sec04_txt06').addClass('on');
        }


        if( scrollTop >= 8500){
            $('.sec04_txt07').addClass('on');
        }

        if( scrollTop >= 9700){
            $('.sec05_img01').addClass('on');
        }


        if( scrollTop >= 10900){
            $('.sec05_img02').addClass('on');
        }



        if( scrollTop >= 12100){
            $('#section06').addClass('on');
        }





    });



    /*  slide,click event section */




})


