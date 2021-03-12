$(function() {

    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl1 = new TimelineMax({ paused:true });
    tl1.addPause();
   
    var time = 0.2;

    tl1.staggerFrom( $(".header_nav ul li"), time, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, time );
    tl1.staggerFrom( $(".new-nav ul li", 'swiper-pagination ul li'), time, {delay: 0, x:-30, opacity:0, ease : Sine.easeIn }, time );
    tl1.from("#new1 h1", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.3");
    tl1.from("#new1 a", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl1.from("#new1 img" ,1, {x:-600});


    var scene = new ScrollMagic.Scene({
        triggerElement:"#new1",
        triggerHook: "onEnter",
        offset: 00,
        // duration: 3000,
        reverse: true,
    })

    // .setPin("#project")
    .setTween(tl1)
    .addTo(controller);


    window.onload = function()
    {       
        tl1.play();
    }                           
    


    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl2 = new TimelineMax();
   
    tl2.from("#new2 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl2.from("#new2 a", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl2.from("#new2 img" ,1, {x:-600});


    var scene = new ScrollMagic.Scene({
        triggerElement:"#new2",
        triggerHook: "onEnter",
        offset: 1000,
        reverse: true,
    })

    .setTween(tl2)
    .addTo(controller);


    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl3 = new TimelineMax();
   
    tl3.from("#new3 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl3.from("#new3 a", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl3.from("#new3 img" ,1, {x:-600});


    var scene = new ScrollMagic.Scene({
        triggerElement:"#new3",
        triggerHook: "onEnter",
        offset: 1000,
        reverse: true,
    })

    .setTween(tl3)
    .addTo(controller);



    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl4 = new TimelineMax();
   
    tl4.from("#new4 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl4.from("#new4 a", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl4.from("#new4 img" ,1, {x:-600});


    var scene = new ScrollMagic.Scene({
        triggerElement:"#new4",
        triggerHook: "onEnter",
        offset: 1000,
        reverse: true,
    })

    .setTween(tl4)
    .addTo(controller);


    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl5 = new TimelineMax();
   
    tl5.from("#new5 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl5.from("#new5 a", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl5.from("#new5 img" ,1, {x:-600});


    var scene = new ScrollMagic.Scene({
        triggerElement:"#new5",
        triggerHook: "onEnter",
        offset: 1000,
        reverse: true,
    })

    .setTween(tl5)
    .addTo(controller);



    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl6 = new TimelineMax();
   
    var time = 0.2;

    tl6.staggerFrom( $("#section02 .list-menu ul li"), 0.2, { y:+40, opacity:0, ease : Sine.easeIn }, time );
    tl6.from("#section02 h2", 0.2,{y:+30, opacity:0, ease: Sine.easeIn});
    tl6.staggerFrom( $("#section02 .menu-items .text-center"), 0.1 ,{y:+10, opacity:0, ease: Elastic}, time);
    // tl6.from("#section02 img" ,1, {x:-600});


    var scene = new ScrollMagic.Scene({
        triggerElement:"#section02",
        triggerHook: "onEnter",
        offset: 1000,
        reverse: true,
    })

    .setTween(tl6)
    .addTo(controller);



    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl7 = new TimelineMax();
   
    tl7.from("#new6 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl7.from("#new6 h1", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl7.from("#new6 p", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl7.from("#new6 .card-details", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl7.from("#new6 img" ,1, {x:-600});


    var scene = new ScrollMagic.Scene({
        triggerElement:"#new6",
        triggerHook: "onEnter",
        offset: 1000,
        reverse: true,
    })

    .setTween(tl7)
    .addTo(controller);


    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl8 = new TimelineMax();
   
    tl8.from("#new7 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl8.from("#new7 h1", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl8.from("#new7 p", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl8.from("#new7 img" ,1, {x:-600});


    var scene = new ScrollMagic.Scene({
        triggerElement:"#new7",
        triggerHook: "onEnter",
        offset: 1000,
        reverse: true,
    })

    .setTween(tl8)
    .addTo(controller);


    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl9 = new TimelineMax();
    var time = 0.2;

    tl9.from("#new8 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl9.from("#new8 p", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl9.staggerFrom( $("#new8 img"), 0.2, {x:-600}, time);

    var scene = new ScrollMagic.Scene({
        triggerElement:"#new8",
        triggerHook: "onEnter",
        offset: 1000,
        reverse: true,
    })

    .setTween(tl9)
    .addTo(controller);


     // ****************** animation project section ******************//
     var controller = new ScrollMagic.Controller({vertical: false});

     var tl10 = new TimelineMax();

     var time = 0.2;

    tl10.staggerFrom( $("#new9 .card-wrapper"), 0.2, {x:+100, opacity:0, ease: Elastic }, time);
    // tl10.to(".square", 3, {rotation:"360", ease:Linear.easeNone, repeat:-1});
 
     var scene = new ScrollMagic.Scene({
         triggerElement:"#new9",
         triggerHook: "onEnter",
         offset: 1000,
         reverse: true,
     })
 
     .setTween(tl10)
     .addTo(controller);



     // ****************** animation project section ******************//
     var controller = new ScrollMagic.Controller({vertical: false});

     var tl11 = new TimelineMax();

     var time = 0.2;

    tl11.staggerFrom( $("#section04 .address-list"), 0.2, {x:-100, opacity:0, ease: Elastic }, time);
    tl11.from("#section04 iframe", 0.3,{y:+10, opacity:0, ease: Elastic});

 
     var scene = new ScrollMagic.Scene({
         triggerElement:"#section04",
         triggerHook: "onEnter",
         offset: 1000,
         reverse: true,
     })
 
     .setTween(tl11)
     .addTo(controller);


    
     // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl12 = new TimelineMax();
    var time = 0.2;

    tl12.from("#new10 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl12.from("#new10 h1", 0.3,{y:+10, opacity:0, ease: Back});
    tl12.from("#new10 p", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl12.from("#new10 a", 0.3,{y:+10, opacity:0, ease: Sine.easeIn});
    tl12.from("#new10 img" ,1, {x:-600});

    var scene = new ScrollMagic.Scene({
        triggerElement:"#new10",
        triggerHook: "onEnter",
        offset: 1000,
        reverse: true,
    })

    .setTween(tl12)
    .addTo(controller);



    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl13 = new TimelineMax();
    var time = 0.2;

    tl13.from("#new11 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl13.from("#new11 h6", 0.3,{y:+10, opacity:0, ease: Back});
    tl13.staggerFrom( $("#new11 .process-wrapper"), 0.2, {x:-100, opacity:0, ease: Elastic }, time);
    tl13.staggerFrom( $("#new11 .connection-arrow"), 0.2, {y:+100, opacity:0, ease: Elastic }, time);


    var scene = new ScrollMagic.Scene({
        triggerElement:"#new11",
        triggerHook: "onEnter",
        offset: 1000,
        reverse: true,
    })

    .setTween(tl13)
    .addTo(controller);




     // ****************** animation project section ******************//
     var controller = new ScrollMagic.Controller({vertical: false});

     var tl14 = new TimelineMax();
     var time = 0.2;
 
     tl14.from("#new121 h1", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
     tl14.from("#new121 p", 0.3,{y:+10, opacity:0, ease: Back});
     tl14.from("#new121 img" ,1, {x:-600});
 
     var scene = new ScrollMagic.Scene({
         triggerElement:"#new121",
         triggerHook: "onEnter",
         offset: 1000,
         reverse: true,
     })
 
     .setTween(tl14)
     .addTo(controller);


     // ****************** animation project section ******************//
     var controller = new ScrollMagic.Controller({vertical: false});

     var tl15 = new TimelineMax();
     var time = 0.2;
 
     tl15.from("#new122 h1", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
     tl15.from("#new122 p", 0.3,{y:+10, opacity:0, ease: Back});
     tl15.from("#new122 img" ,1, {x:-600});
 
     var scene = new ScrollMagic.Scene({
         triggerElement:"#new122",
         triggerHook: "onEnter",
         offset: 1000,
         reverse: true,
     })
 
     .setTween(tl15)
     .addTo(controller);



     // ****************** animation project section ******************//
     var controller = new ScrollMagic.Controller({vertical: false});

     var tl16 = new TimelineMax();
     var time = 0.2;
 
     tl16.from("#new123 h1", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
     tl16.from("#new123 p", 0.3,{y:+10, opacity:0, ease: Back});
     tl16.from("#new123 img" ,1, {x:-600});
 
     var scene = new ScrollMagic.Scene({
         triggerElement:"#new123",
         triggerHook: "onEnter",
         offset: 1000,
         reverse: true,
     })
 
     .setTween(tl16)
     .addTo(controller);




     // ****************** animation project section ******************//
     var controller = new ScrollMagic.Controller({vertical: false});

     var tl17 = new TimelineMax();
     var time = 0.2;
 
     tl17.from("#new13 h6", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
     tl17.from("#new13 h2", 0.3,{y:+10, opacity:0, ease: Back});
     tl17.staggerFrom( $("#new13 .accordian-wrpper"), 0.2, {y:+30, opacity:0, ease: Elastic }, time);

     var scene = new ScrollMagic.Scene({
         triggerElement:"#new13",
         triggerHook: "onEnter",
         offset: 1000,
         reverse: true,
     })
 
     .setTween(tl17)
     .addTo(controller);



     // ****************** animation project section ******************//
     var controller = new ScrollMagic.Controller({vertical: false});

     var tl18 = new TimelineMax();
     var time = 0.2;
 
     tl18.from("#new14 h6", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
     tl18.from("#new14 h2", 0.3,{y:+10, opacity:0, ease: Back});
     tl18.from("#new14 img" ,1, {x:-600});

     var scene = new ScrollMagic.Scene({
         triggerElement:"#new14",
         triggerHook: "onEnter",
         offset: 1000,
         reverse: true,
     })
 
     .setTween(tl18)
     .addTo(controller);




      // ****************** animation project section ******************//
      var controller = new ScrollMagic.Controller({vertical: false});

      var tl19 = new TimelineMax();
      var time = 0.2;
  
      tl19.from("#new15 h2", 0.2,{y:+30, opacity:0, ease: Back},"+=0.4");
      tl19.staggerFrom( $("#new15 .career-perks"), 0.2, {y:+30, opacity:0, ease: Elastic }, time);
 
      var scene = new ScrollMagic.Scene({
          triggerElement:"#new15",
          triggerHook: "onEnter",
          offset: 1000,
          reverse: true,
      })
  
      .setTween(tl19)
      .addTo(controller);




       // ****************** animation project section ******************//
       var controller = new ScrollMagic.Controller({vertical: false});

       var tl20 = new TimelineMax();
       var time = 0.2;
   
       tl20.from("#new16 h2", 0.2,{y:+30, opacity:0, ease: Back},"+=0.4");
       tl20.from("#new16 h4", 0.2,{y:+30, opacity:0, ease: Back});
       tl20.staggerFrom( $("#new16 img"), 0.2, {y:+30, opacity:0, ease: Elastic }, time);
  
       var scene = new ScrollMagic.Scene({
           triggerElement:"#new16",
           triggerHook: "onEnter",
           offset: 1000,
           reverse: true,
       })
   
       .setTween(tl20)
       .addTo(controller);





    var controller = new ScrollMagic.Controller({vertical: false});

    var tl21 = new TimelineMax();
    
    var newtime = 0.2;

    tl21.from("#contact h2", 0.5, { y:100, opacity:0,  ease : Back }, "+=1.5");
    tl21.from("#contact h4", 0.5, { y:50, opacity:0,  ease : Elastic });
    tl21.staggerFrom( $("#contact .align-items-start"), 0.5, { y:+100, opacity:0, ease : Sine.easeIn }, newtime );
    tl21.from("#contact .contactwrapper", 0.5, { y:100, opacity:0,  ease : Sine.easeIn });


    var scene = new ScrollMagic.Scene({
        triggerElement:"#contact",
        triggerHook: "onEnter",
        offset: 0,
        duration: 000,
        reverse: true,
    })

    // .setPin("#project")
    .setTween(tl21)
    .setClassToggle("#contact", "active")
    // .addIndicators()
    .addTo(controller);





    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl22 = new TimelineMax();
    var time = 0.2;

    tl22.from("#order h2", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=2");
    tl22.from("#order h1", 0.3,{y:+10, opacity:0, ease: Back});
    tl22.from("#order p", 0.3,{y:+10, opacity:0, ease: Back});
    tl22.from("#order h5", 0.3,{y:+10, opacity:0, ease: Back});
    tl22.from("#order .input-group", 0.3,{y:+10, opacity:0, ease: Back});
    tl22.from("#order a", 0.3,{y:+10, opacity:0, ease: Back});
    tl22.from("#order #myTab", 0.3,{y:+10, opacity:0, ease: Back});
    tl22.from("#order .tab-content", 0.3,{y:+10, opacity:0, ease: Back});
    tl22.from("#order img" ,1, {x:-600});

    var scene = new ScrollMagic.Scene({
        triggerElement:"#order",
        triggerHook: "onEnter",
        offset: 1000,
        reverse: true,
    })

    .setTween(tl22)
    .addTo(controller);



    // // ****************** animation project section ******************//
    // var controller = new ScrollMagic.Controller({vertical: false});

    // var tl1 = new TimelineMax();
    // // var time = 0.5;  

    // // tl1.from(".card", 0.4, { scale: 2.5 } );
    // // tl1.from(".card", 0.4, { y:300} );
    // // debugger;
    // // TweenMax.staggerFrom( $(".left-nav ul li"), time, {delay: 4, x:-30, opacity:0, ease : Sine.easeIn }, time );

    // // tl1.from(".header_nav", 0.5,{y:-30, opacity:0, ease: Sine.easeIn},'+=2.5');  
    // // tl1.from(".left-nav", 0.5,{x:-30, opacity:0, ease: Sine.easeIn},'+=1');

    // var scene = new ScrollMagic.Scene({
    //     triggerElement:"#section05",
    //     triggerHook: "onEnter",
    //     offset: 500,
    //     duration: 1000,
    //     reverse: true,
    // })

    // // .setPin("#project")
    // .setTween(tl1)
    // .setClassToggle("#section06", "active")
    // // .addIndicators()
    // .addTo(controller);










    // // ****************** animation project section ******************//
    // var controller = new ScrollMagic.Controller({vertical: false});

    // var tl8 = new TimelineMax();
    

    // // var cov = $(this).find("#section02 .cover");
    // // var img = $(this).find("#section02 img");

    // // tl8.from(cov, 1, { scaleX: 0, transformOrigin: "left" });
    // // tl8.to(cov, 1, { scaleX: 0, transformOrigin: "right" }, "reveal");
    // // tl8.from(img, 1, { opacity: 0 }, "reveal");

    // // // tl2.from("#section02 img" ,1, {x:-600});
    // var newtime = 0.4;

    // tl8.from("#section02 h2", 1.0, { y:-100,delay:5,  ease : Sine.easeIn });
    // tl8.staggerFrom( $("#section02 .list-menu li"), newtime, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    // tl8.staggerFrom( $("#section02 .text-center"), newtime, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, newtime );

    // // tl2.from("#section02 h1", 1.0, { y:100,  ease : Sine.easeIn });
    // // tl2.from("#section02 .description", 1, { y:100, opacity:0,  ease : Sine.easeIn });
    // // tl2.from("#section02 .card-details", 0.4, { y:200,  ease : Sine.easeIn });
    
    // // var time = 0.5;
    // // tl2.staggerFrom( $("#section02 .card-details"), time, {delay: 2, y:100, opacity:0, ease : Sine.easeIn }, time );
    
    // // tl2.to("#section02 img", 0.4, { width:"100%", ease:Power0.easeNone } );
    // // debugger;
    // // TweenMax.staggerFrom( $(".left-nav ul li"), time, {delay: 4, x:-30, opacity:0, ease : Sine.easeIn }, time );

    // // tl1.from(".header_nav", 0.5,{y:-30, opacity:0, ease: Sine.easeIn},'+=2.5');  
    // // tl1.from(".left-nav", 0.5,{x:-30, opacity:0, ease: Sine.easeIn},'+=1');

    // var scene = new ScrollMagic.Scene({
    //     triggerElement:"#section02",
    //     triggerHook: 200,
    //     offset: 0,
    //     duration: 1000,
    //     reverse: true,
    // })

    // // .setPin("#project")
    // .setTween(tl8)
    // .setClassToggle("#section02", "active")
    // // .addIndicators()
    // .addTo(controller);









    // // ****************** animation project section ******************//
    // var controller = new ScrollMagic.Controller({vertical: false});

    // var tl2 = new TimelineMax();
    

    // var cov = $(this).find("#section03 .cover");
    // var img = $(this).find("#section03 img");

   

    // // tl2.from("#section02 img" ,1, {x:-600});
    // var newtime = 0.4;

    // tl2.staggerFrom( $("#section03 .nav li"), newtime, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    // tl2.from("#section03 h3", 1.0, { y:-100, opacity:0, ease : Sine.easeIn },'+=8');
    // tl2.from("#section03 h1", 1.0, { y:100,opacity:0,  ease : Sine.easeIn });
    // tl2.from("#section03 .description", 1, { y:100, opacity:0,  ease : Sine.easeIn });
    // // tl2.from("#section02 .card-details", 0.4, { y:200,  ease : Sine.easeIn });

    // tl2.from(cov, 1, { delay:2, scaleX: 0, transformOrigin: "left" });
    // tl2.to(cov, 1, { scaleX: 0, transformOrigin: "right" }, "reveal");
    // tl2.from(img, 1, { opacity: 0 }, "reveal");

    // var time = 0.5;
    // tl2.staggerFrom( $("#section03 .card-details"), time, {delay: 2, y:100, opacity:0, ease : Sine.easeIn }, time );
    // // tl2.from("#section03 .title", 1.0, {css:{position:'fixed'}}, { y:100, opacity:0,  ease : Sine.easeIn });

    // // tl2.to("#section02 img", 0.4, { width:"100%", ease:Power0.easeNone } );
    // // debugger;
    // // TweenMax.staggerFrom( $(".left-nav ul li"), time, {delay: 4, x:-30, opacity:0, ease : Sine.easeIn }, time );

    // // tl1.from(".header_nav", 0.5,{y:-30, opacity:0, ease: Sine.easeIn},'+=2.5');  
    // // tl1.from(".left-nav", 0.5,{x:-30, opacity:0, ease: Sine.easeIn},'+=1');

    // var scene = new ScrollMagic.Scene({
    //     triggerElement:"#section03",
    //     pin: true,
    //     triggerHook: "onEnter",
    //     offset: 350,
    //     duration: 1000,
    //     reverse: true,
    // })

    // // .setPin("#project")
    // .setTween(tl2)
    // .setClassToggle("#section03", "active")
    // // .addIndicators()
    // .addTo(controller);










    


    // var controller = new ScrollMagic.Controller({vertical: false});

    // var tl4 = new TimelineMax();
    

    // var cov = $(this).find("#section05 .cover");
    // var img = $(this).find("#section05 img");

    // tl4.from(cov, 1, { delay:2, scaleX: 0, transformOrigin: "left" });
    // tl4.to(cov, 1, { scaleX: 0, transformOrigin: "right" }, "reveal");
    // tl4.from(img, 1, { opacity: 0 }, "reveal");

    // // tl2.from("#section02 img" ,1, {x:-600});
    // var newtime = 0.4;

    // tl4.staggerFrom( $("#section05 .nav li"), newtime, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    // tl4.from("#section05 h1", 1.0, { y:100, opacity:0, ease : Sine.easeIn },'+=8');
    // tl4.from("#section05 p", 1, { y:100, opacity:0,  ease : Sine.easeIn });
    // tl4.from("#section05 .btn", 1.0, { y:100, opacity:0, ease : Sine.easeIn });

    // // tl2.from("#section02 .card-details", 0.4, { y:200,  ease : Sine.easeIn });
    
    // var time = 0.5;
    // tl4.staggerFrom( $("#section05 .card-details"), time, {delay: 2, y:100, opacity:0, ease : Sine.easeIn }, time );
    
    // // tl2.to("#section02 img", 0.4, { width:"100%", ease:Power0.easeNone } );
    // // debugger;
    // // TweenMax.staggerFrom( $(".left-nav ul li"), time, {delay: 4, x:-30, opacity:0, ease : Sine.easeIn }, time );

    // // tl1.from(".header_nav", 0.5,{y:-30, opacity:0, ease: Sine.easeIn},'+=2.5');  
    // // tl1.from(".left-nav", 0.5,{x:-30, opacity:0, ease: Sine.easeIn},'+=1');

    // var scene = new ScrollMagic.Scene({
    //     triggerElement:"#section05",
    //     triggerHook: "onEnter",
    //     offset: 350,
    //     duration: 1000,
    //     reverse: true,
    // })

    // // .setPin("#project")
    // .setTween(tl4)
    // .setClassToggle("#section05", "active")
    // // .addIndicators()
    // .addTo(controller);




    // var controller = new ScrollMagic.Controller({vertical: false});

    // var tl5 = new TimelineMax();
    
    // var newtime = 0.4;

    // tl5.staggerFrom( $("#section06 .career-perks"), newtime, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    // tl5.from("#section06 h2", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });
   
    // var scene = new ScrollMagic.Scene({
    //     triggerElement:"#section06",
    //     triggerHook: "onEnter",
    //     offset: 350,
    //     duration: 1000,
    //     reverse: true,
    // })

    // // .setPin("#project")
    // .setTween(tl5)
    // .setClassToggle("#section06", "active")
    // // .addIndicators()
    // .addTo(controller);




    // var controller = new ScrollMagic.Controller({vertical: false});

    // var tl6 = new TimelineMax();
    
    // var newtime = 0.4;

    // tl6.staggerFrom( $("#section07 img"), newtime, {delay: 3, opacity:0, ease : Sine.easeIn }, newtime );
    // tl6.from("#section07 h2", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });
    // tl6.from("#section07 h4", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });


    // var scene = new ScrollMagic.Scene({
    //     triggerElement:"#section07",
    //     triggerHook: "onEnter",
    //     offset: 350,
    //     duration: 1000,
    //     reverse: true,
    // })

    // // .setPin("#project")
    // .setTween(tl6)
    // .setClassToggle("#section07", "active")
    // // .addIndicators()
    // .addTo(controller);



    // var controller = new ScrollMagic.Controller({vertical: false});

    // var tl7 = new TimelineMax();
    
    // // var newtime = 0.4;

    // // tl7.staggerFrom( $("#section07 img"), newtime, {delay: 3, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    // tl7.from("#section04 .list-content", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });
    // tl7.from("#section04 .col-md-8", 1.0, { y:100, opacity:0,  ease : Sine.easeIn });


    // var scene = new ScrollMagic.Scene({
    //     triggerElement:"#section04",
    //     triggerHook: "onEnter",
    //     offset: 350,
    //     duration: 1000,
    //     reverse: true,
    // })

    // // .setPin("#project")
    // .setTween(tl7)
    // .setClassToggle("#section04", "active")
    // // .addIndicators()
    // .addTo(controller);






    



    // var controller = new ScrollMagic.Controller({vertical: false});
    // var tl93 = new TimelineMax();
    
    // // var newtime = 0.4;

    // // tl7.staggerFrom( $("#section07 img"), newtime, {delay: 3, y:-100, opacity:0, ease : Sine.easeIn }, newtime );
    // // tl93.from(".title", 1.0, {css:{position:'fixed'}}, { y:100, opacity:0,  ease : Sine.easeIn });

    
    //     var scene = new ScrollMagic.Scene({
    //         triggerElement:"#section02",
    //         triggerHook: "onEnter",
    //         offset: 0,
    //         duration: 000,
    //         reverse: true,
    //     })
    
    //     // .setPin("#project")
    //     .setTween(tl93)
    //     // .setClassToggle("#contact", "active")
    //     // .addIndicators()
    //     .addTo(controller);


});

// var left = new TimelineMax ();

// left.from($("#rect"),2,{width:0},1)
// .from($("#rect"),2,{right:400},1)


