/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
      _
  ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */
$(document).ready(function() {
    Logic();


    location.hash = '#page01'

    let cursor = $('#cursor');
    // let cursorFollow = $('#cursor-follower');

    $(document).mousemove(function(e){
        let cursorWidth = cursor.width() / 2;
        // let cursorFWidth = cursorFollow.width() / 2;

        gsap.to(cursor, {duration: 1.3, left: e.pageX - cursor.width() * 0.5, top: e.pageY - cursor.height() * 0.5, ease: "back.out"});
        // gsap.to(cursorFollow, {duration: 1.4, left: e.pageX - cursorFollow.width() * 0.5, top: e.pageY - 20, ease: "back.out(2)"});
    });



    const intro = ()=>{



        
    }

    intro();


    $('.swiper').mouseenter(function(){
        gsap.to(cursor, {duration:.3,opacity:1});
    }).mouseleave(function(){
        gsap.to(cursor, {duration:.3,opacity:0});
    })



    let trigger = false;
    let countValue;

    var swiper = new Swiper('.swiper', {
        slidesPerView:1,
        centeredSlides: false,
        mousewheel:true,
        spaceBetween: 0,
        grabCursor: false,
        effect : 'fade',
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        // scrollbar: {
            // el: '.swiper-scrollbar',
            // draggable: true,
        // },
	 on : {
                slideChangeTransitionStart : function (e) {


                    $('.swiper-slide').removeClass('on');

                },
                transitionEnd : (e)=>{
                    console.log(e);
                },
                slideChangeTransitionEnd : function (e) {

                    // var currentSlide = $(e.);
                    
                    countValue = this.realIndex;
                    console.log(countValue);

                    $('.progress .bar').css('transform',`translateY(${50 * this.realIndex}px)`)

                    // if(this.realIndex === 4 ){ trigger = true};


                    // if(trigger = true){
                    //     $('.swiper').on('wheel',function(e){
                            
                    //         if(e.originalEvent.deltaY > 0){
                    //             location.hash = '#page04';
                    //             trigger = false;
                    //         }

                    //     })
                    // }

                    

                    $('.swiper-slide-active').addClass('on');
                }
            }
    });


    $('.swiper').on('wheel',function(e){
        
        let v =  e.originalEvent.deltaY;

        // console.log(v);


        if(v < 0 && countValue === 0){ // up

            location.hash = '#page02';

        }else if( v > 0 && countValue === 4){ // down
            location.hash = '#page04';

        }



    })




    $('#fullpage').fullpage({

        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

    
        navigation: true,
        normalScrollElements: '.swiper',
        navigationTooltips: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],

        afterLoad: function(anchorLink, index){

            if (index == 1) {// 01 = true

        

            } else { // 01 = false

            }
            if(index ==2){// 02 = true

                $('#section02').addClass('on');


            }else{//02 = false

            }
            if(index ==3){// 03 = true

            }else{//02 = false

            }
            if(index ==4){// 04 = true

                $('.sec08_txt03').addClass('on');

            }else{//02 = false

            }
            if(index ==5){// 05 = true

            }else{//02 = false

            }

        },

        onLeave: function(index, destination, direction){
            var leavingSection = this;

            if(index == 1 && direction =='down'){//01 - >02

            }

            if(index == 2 && direction == 'down'){//02 -> 03

            } else if(index == 2 && direction == 'up'){//02 -> 01

            }

            if(index == 3 && direction == 'down'){//03 -> 04

            } else if(index == 3 && direction == 'up'){//03 -> 02

            }
            if(index == 4 && direction == 'down'){//04 -> 05

            } else if(index == 4 && direction == 'up'){//04 -> 03

            }
            if(index == 5 && direction == 'down'){//05 -> 06

            } else if(index == 5 && direction == 'up'){//05 -> 04

            }

        }
    });



});