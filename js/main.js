// import {gsap} from "https://esm.sh/gsap";

$(document).ready(function() {

    var wind = $(window);

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: false
    });
    wow.init();




    // ---------- to top -----------
    $('.to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });


    // ----------- products -----------
    // Increment button click event
    $(".qt-plus").click(function() {
        var value = parseInt($(this).siblings(".qt").val()); // Get the current value
        $(this).siblings(".qt").val(value + 1); // Increment the value and set it
    });
    
    // Decrement button click event
    $(".qt-minus").click(function() {
    var value = parseInt($(this).siblings(".qt").val()); // Get the current value
    if (value > 0) {
        $(this).siblings(".qt").val(value - 1); // Decrement the value and set it
    }
    });


});


// ------------ swiper sliders -----------
$(document).ready(function() {

    // ------------ tc-header-slider4 -----------
    var swiper = new Swiper('.menu_slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });


    // ------------ rooms_det -----------
    var swiper = new Swiper('.rooms_det .room_slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        speed: 1500,
        pagination: false,
        navigation: {
            nextEl: '.room_slider .swiper-button-next',
            prevEl: '.room_slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });

     // ------------ instagram slider -----------
     var swiper = new Swiper('.instagram .instagram_slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 6000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 1,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });


    // // ------------ instagram_slider -----------
    // let SwiperBottom = new Swiper('.instagram_slider', {
    //     spaceBetween: 1,
    //     centeredSlides: true,
    //     slidesPerView: "auto",
    //     speed: 6000,
    //     autoplay: {
    //         delay: 1,
    //     },
    //     loop: true,
    //     //   allowTouchMove: false,
    //     disableOnInteraction: true,
    // });

});


// $(document).ready(function() {
    

//     const text = document.querySelector('.text .text-inner');
//     const track = document.querySelector('.track');
//     const shape = document.querySelector('.shape .rotate');
//     const rooms = document.querySelector('.rooms');

//     const tl = gsap.timeline({ paused: true });


//     tl
//     .to(shape, {
//         duration: 0.5,
//         scale: 5,
//         // rotate: 30,
//         rotate: 5,
//         opacity: 0,
//         // ease: "Expo.easeIn",
//         ease: "Power2.easeIn",
//     })
//     .to(text, {
//         duration: 1,
//         translateY: 0,
//         ease: "Power2.easeIn"
//     }, 0)

//     window.addEventListener(
//     "scroll",
//     () => {
        
//         const progress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
                                            
//         tl.progress(progress);
        
//         document.body.style.setProperty(
//         "--scroll",
//         progress
//         );
//     },
//     false
//     );
// })


// pre loader 
$(window).on("load", function() {
    $("#preloader").addClass("isdone");
});


$( function() {
    function mousecursor() {
        if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
                t = document.querySelector(".cursor-outer");
            let n, i = 0,
                o = !1;
            window.onmousemove = function (s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
            },
            $("body").on("mouseenter", ".hover_circle, .cursor-pointer", function () {
                e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
            })
            , $("body").on("mouseleave", ".hover_circle, .cursor-pointer", function () {
                $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
            }),

                // $("body").on("mouseenter", ".swiper-wrapper.curs-scroll", function () {
                //     e.classList.add("cursor-scroll"), t.classList.add("cursor-scroll")
                // }), $("body").on("mouseleave", ".swiper-wrapper.curs-scroll", function () {
                //     $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-scroll"), t.classList.remove("cursor-scroll"))
                // }),

                e.style.visibility = "visible", t.style.visibility = "visible"
        }
    };

    $(function () {
        mousecursor();
    });

    $("body").mousedown(function(){
        $(".cursor-outer").css({
            width: "15px",
            height: "15px"
        });
    })

    $("body").mouseup(function(){
        $(".cursor-outer").css({
            width: "25px",
            height: "25px"
        });
    })

    $("a").mouseenter(function(){
        $(".cursor-outer").css({
            width: "60px",
            height: "60px"
        });
    })

    $("a").mouseleave(function(){
        $(".cursor-outer").css({
            width: "25px",
            height: "25px"
        });
    })

});
