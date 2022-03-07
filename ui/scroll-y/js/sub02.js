window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)




        if( scrollTop >= 800 ){
            $('#section02').addClass('on');
        }




    });



    /*  slide,click event section */




})


