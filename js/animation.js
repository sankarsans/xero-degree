$(function() {



    

    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller();

    var tl1 = new TimelineMax();
    var time = 0.5;

    TweenMax.staggerFrom( $(".header_nav ul li"), time, {delay: 2, y:-100, opacity:0, ease : Sine.easeIn }, time );
    TweenMax.staggerFrom( $(".left-nav ul li"), time, {delay: 4, x:-30, opacity:0, ease : Sine.easeIn }, time );

    // tl1.from(".header_nav", 0.5,{y:-30, opacity:0, ease: Sine.easeIn},'+=2.5');  
    // tl1.from(".left-nav", 0.5,{x:-30, opacity:0, ease: Sine.easeIn},'+=1');

    var scene = new ScrollMagic.Scene({
        triggerElement:"#viewport",
    })

    // .setPin("#project")
    .setTween(tl1)
    .addTo(controller);


    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller();

    var tl2 = new TimelineMax();
    tl2.from(".franchise-section h1", 0.4,{y:-30, opacity:0, ease: Sine.easeIn},"+=1.9");

    var scene = new ScrollMagic.Scene({
        triggerElement:"#franchise",
    })

    // .setPin("#project")
    .setTween(tl2)
    .addTo(controller);




});