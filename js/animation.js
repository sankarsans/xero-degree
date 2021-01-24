$(function() {



    

    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl1 = new TimelineMax();
    // var time = 0.5;  

    // tl1.from(".card", 0.4, { scale: 2.5 } );
    // tl1.from(".card", 0.4, { y:300} );
    // debugger;
    // TweenMax.staggerFrom( $(".left-nav ul li"), time, {delay: 4, x:-30, opacity:0, ease : Sine.easeIn }, time );

    // tl1.from(".header_nav", 0.5,{y:-30, opacity:0, ease: Sine.easeIn},'+=2.5');  
    // tl1.from(".left-nav", 0.5,{x:-30, opacity:0, ease: Sine.easeIn},'+=1');

    var scene = new ScrollMagic.Scene({
        triggerElement:"#section05",
        triggerHook: "onEnter",
        offset: 500,
        duration: 1000,
        reverse: true,
    })

    // .setPin("#project")
    .setTween(tl1)
    .setClassToggle("#section06", "active")
    // .addIndicators()
    .addTo(controller);










    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl8 = new TimelineMax();
    

    var cov = $(this).find("#section02 .cover");
    var img = $(this).find("#section02 img");

    tl8.from(cov, 1, { scaleX: 0, transformOrigin: "left" });
    tl8.to(cov, 1, { scaleX: 0, transformOrigin: "right" }, "reveal");
    tl8.from(img, 1, { opacity: 0 }, "reveal");

    // tl2.from("#section02 img" ,1, {x:-600});
    var newtime = 0.4;

    tl8.from("#section02 h2", 1.0, { y:-100,  ease : Sine.easeIn });
    tl8.staggerFrom( $("#section02 .list-menu li"), newtime, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    tl8.staggerFrom( $("#section02 .text-center"), newtime, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, newtime );

    // tl2.from("#section02 h1", 1.0, { y:100,  ease : Sine.easeIn });
    // tl2.from("#section02 .description", 1, { y:100, opacity:0,  ease : Sine.easeIn });
    // tl2.from("#section02 .card-details", 0.4, { y:200,  ease : Sine.easeIn });
    
    var time = 0.5;
    // tl2.staggerFrom( $("#section02 .card-details"), time, {delay: 2, y:100, opacity:0, ease : Sine.easeIn }, time );
    
    // tl2.to("#section02 img", 0.4, { width:"100%", ease:Power0.easeNone } );
    // debugger;
    // TweenMax.staggerFrom( $(".left-nav ul li"), time, {delay: 4, x:-30, opacity:0, ease : Sine.easeIn }, time );

    // tl1.from(".header_nav", 0.5,{y:-30, opacity:0, ease: Sine.easeIn},'+=2.5');  
    // tl1.from(".left-nav", 0.5,{x:-30, opacity:0, ease: Sine.easeIn},'+=1');

    var scene = new ScrollMagic.Scene({
        triggerElement:"#section02",
        triggerHook: "onEnter",
        offset: 350,
        duration: 1000,
        reverse: true,
    })

    // .setPin("#project")
    .setTween(tl8)
    .setClassToggle("#section02", "active")
    // .addIndicators()
    .addTo(controller);









    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl2 = new TimelineMax();
    

    var cov = $(this).find("#section03 .cover");
    var img = $(this).find("#section03 img");

   

    // tl2.from("#section02 img" ,1, {x:-600});
    var newtime = 0.4;

    tl2.staggerFrom( $("#section03 .nav li"), newtime, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    tl2.from("#section03 h3", 1.0, { y:-100,  ease : Sine.easeIn });
    tl2.from("#section03 h1", 1.0, { y:100,  ease : Sine.easeIn });
    tl2.from("#section03 .description", 1, { y:100, opacity:0,  ease : Sine.easeIn });
    // tl2.from("#section02 .card-details", 0.4, { y:200,  ease : Sine.easeIn });
    
    tl2.from(cov, 1, { delay:2, scaleX: 0, transformOrigin: "left" });
    tl2.to(cov, 1, { scaleX: 0, transformOrigin: "right" }, "reveal");
    tl2.from(img, 1, { opacity: 0 }, "reveal");

    var time = 0.5;
    tl2.staggerFrom( $("#section03 .card-details"), time, {delay: 2, y:100, opacity:0, ease : Sine.easeIn }, time );
    
    // tl2.to("#section02 img", 0.4, { width:"100%", ease:Power0.easeNone } );
    // debugger;
    // TweenMax.staggerFrom( $(".left-nav ul li"), time, {delay: 4, x:-30, opacity:0, ease : Sine.easeIn }, time );

    // tl1.from(".header_nav", 0.5,{y:-30, opacity:0, ease: Sine.easeIn},'+=2.5');  
    // tl1.from(".left-nav", 0.5,{x:-30, opacity:0, ease: Sine.easeIn},'+=1');

    var scene = new ScrollMagic.Scene({
        triggerElement:"#section03",
        triggerHook: "onEnter",
        offset: 350,
        duration: 1000,
        reverse: true,
    })

    // .setPin("#project")
    .setTween(tl2)
    .setClassToggle("#section03", "active")
    // .addIndicators()
    .addTo(controller);










    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl3 = new TimelineMax({ paused:true });
    tl3.addPause();
    var cov = $(this).find("#section01 .cover");
    var img = $(this).find("#section01 img");

   
    var time = 0.2;

    tl3.staggerFrom( $(".header_nav ul li"), time, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, time );
    tl3.staggerFrom( $(".left-nav ul li"), time, {delay: 0, x:-30, opacity:0, ease : Sine.easeIn }, time );
    tl3.from(".homeSlider h1", 0.4,{y:-30, opacity:0, ease: Sine.easeIn},"-=0.8");
    tl3.from(".homeSlider p", 0.4,{y:-10, opacity:0, ease: Sine.easeIn});
    tl3.from(".homeSlider a", 0.4,{y:-10, opacity:0, ease: Sine.easeIn});
    // tl3.from(".homeSlider img" ,1, {x:-600});

    tl3.from(cov, 1, { delay:0.5, scaleX: 0, transformOrigin: "left" });
    tl3.to(cov, 1, { scaleX: 0, transformOrigin: "right" }, "reveal");
    tl3.from(img, 1, { opacity: 0 }, "reveal");


    var scene = new ScrollMagic.Scene({
        triggerElement:"#section01",
        triggerHook: "onEnter",
        offset: 00,
        // duration: 3000,
        reverse: true,
    })

    // .setPin("#project")
    .setTween(tl3)
    .addTo(controller);

  
    window.onload = function()
    {       
        tl3.play();
    }                           
    


    var controller = new ScrollMagic.Controller({vertical: false});

    var tl4 = new TimelineMax();
    

    var cov = $(this).find("#section05 .cover");
    var img = $(this).find("#section05 img");

    tl4.from(cov, 1, { delay:2, scaleX: 0, transformOrigin: "left" });
    tl4.to(cov, 1, { scaleX: 0, transformOrigin: "right" }, "reveal");
    tl4.from(img, 1, { opacity: 0 }, "reveal");

    // tl2.from("#section02 img" ,1, {x:-600});
    var newtime = 0.4;

    tl4.staggerFrom( $("#section05 .nav li"), newtime, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    tl4.from("#section05 h1", 1.0, { y:100,  ease : Sine.easeIn });
    tl4.from("#section05 p", 1, { y:100, opacity:0,  ease : Sine.easeIn });
    tl4.from("#section05 .btn", 1.0, { y:100, opacity:0, ease : Sine.easeIn });

    // tl2.from("#section02 .card-details", 0.4, { y:200,  ease : Sine.easeIn });
    
    var time = 0.5;
    tl4.staggerFrom( $("#section05 .card-details"), time, {delay: 2, y:100, opacity:0, ease : Sine.easeIn }, time );
    
    // tl2.to("#section02 img", 0.4, { width:"100%", ease:Power0.easeNone } );
    // debugger;
    // TweenMax.staggerFrom( $(".left-nav ul li"), time, {delay: 4, x:-30, opacity:0, ease : Sine.easeIn }, time );

    // tl1.from(".header_nav", 0.5,{y:-30, opacity:0, ease: Sine.easeIn},'+=2.5');  
    // tl1.from(".left-nav", 0.5,{x:-30, opacity:0, ease: Sine.easeIn},'+=1');

    var scene = new ScrollMagic.Scene({
        triggerElement:"#section05",
        triggerHook: "onEnter",
        offset: 350,
        duration: 1000,
        reverse: true,
    })

    // .setPin("#project")
    .setTween(tl4)
    .setClassToggle("#section05", "active")
    // .addIndicators()
    .addTo(controller);




    var controller = new ScrollMagic.Controller({vertical: false});

    var tl5 = new TimelineMax();
    
    var newtime = 0.4;

    tl5.staggerFrom( $("#section06 .career-perks"), newtime, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    tl5.from("#section06 h2", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });
   
    var scene = new ScrollMagic.Scene({
        triggerElement:"#section06",
        triggerHook: "onEnter",
        offset: 350,
        duration: 1000,
        reverse: true,
    })

    // .setPin("#project")
    .setTween(tl5)
    .setClassToggle("#section06", "active")
    // .addIndicators()
    .addTo(controller);




    var controller = new ScrollMagic.Controller({vertical: false});

    var tl6 = new TimelineMax();
    
    var newtime = 0.4;

    tl6.staggerFrom( $("#section07 img"), newtime, {delay: 3, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    tl6.from("#section07 h2", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });
    tl6.from("#section07 h4", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });


    var scene = new ScrollMagic.Scene({
        triggerElement:"#section07",
        triggerHook: "onEnter",
        offset: 350,
        duration: 1000,
        reverse: true,
    })

    // .setPin("#project")
    .setTween(tl6)
    .setClassToggle("#section07", "active")
    // .addIndicators()
    .addTo(controller);



    var controller = new ScrollMagic.Controller({vertical: false});

    var tl7 = new TimelineMax();
    
    // var newtime = 0.4;

    // tl7.staggerFrom( $("#section07 img"), newtime, {delay: 3, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    tl7.from("#section04 .list-content", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });
    tl7.from("#section04 .col-md-8", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });


    var scene = new ScrollMagic.Scene({
        triggerElement:"#section04",
        triggerHook: "onEnter",
        offset: 350,
        duration: 1000,
        reverse: true,
    })

    // .setPin("#project")
    .setTween(tl7)
    .setClassToggle("#section04", "active")
    // .addIndicators()
    .addTo(controller);






    var controller = new ScrollMagic.Controller({vertical: false});

    var tl9 = new TimelineMax();
    
    // var newtime = 0.4;

    // tl7.staggerFrom( $("#section07 img"), newtime, {delay: 3, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    tl9.from("#contact h2", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });
    tl9.from("#contact h4", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });
    tl9.from("#contact .align-items-start", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });
    tl9.from("#contact .contactwrapper", 0.5, { y:100, opacity:0,  ease : Sine.easeIn });


    var scene = new ScrollMagic.Scene({
        triggerElement:"#contact",
        triggerHook: "onEnter",
        offset: 0,
        duration: 000,
        reverse: true,
    })

    // .setPin("#project")
    .setTween(tl9)
    .setClassToggle("#contact", "active")
    // .addIndicators()
    .addTo(controller);







});

// var left = new TimelineMax ();

// left.from($("#rect"),2,{width:0},1)
// .from($("#rect"),2,{right:400},1)