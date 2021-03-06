$(function() {

    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl1 = new TimelineMax({ paused:true });
    tl1.addPause();
   
    var time = 0.2;
    
    let revealText = document.querySelectorAll("#new1 h1, #new2 h3, #new3 h3, #new4 h3, #new5 h3, #new6 h1, #new6 p.description, #new7 h1, #new7 p, #new7 h3, #new8 p, #new8 h3,#new10 h1, #new10 p, #new11 h3, #new11 h6, #new121 h1, #new121 p,  #new122 h1, #new122 p, #new123 h1, #new123 p,#new13 h2,#new14 h1, #new14 p, #new15 h2,  #new16 h2, #new16 h4");
    let results = Splitting({ target: revealText, by: "lines" });

    results.forEach((splitResult) => {
        const wrappedLines = splitResult.lines
        .map(
            (wordsArr) => `
            <span class="line"><div class="words">
            ${wordsArr
                .map(
                (word) => `${word.outerHTML}<span class="whitespace"> 
            </span>`
                )
                .join("")}
            </div></span>`
        )
        .join("");
        splitResult.el.innerHTML = wrappedLines;
    });

    gsap.registerPlugin(ScrollTrigger);
    let revealLines = revealText.forEach((element) => {
        const lines = element.querySelectorAll(".line .words");
        let tl11 = gsap.timeline({scrollTrigger: {trigger: "#new1",start: "top top",toggleActions:"restart none none reset",}});
        tl11.set(revealText, { autoAlpha: 1 });
    });

    tl1.staggerFrom( $(".header_nav ul li"), time, {delay: 0, y:-100, opacity:0, ease : Sine.easeIn }, time );
    tl1.staggerFrom( $(".new-nav ul li", 'swiper-pagination ul li'), time, {delay: 0, x:-30, opacity:0, ease : Sine.easeIn }, time );
    tl1.staggerFrom( $("#new1 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.3");
    tl1.from("#new1 a", 0.2,{y:+10, opacity:0, ease: Elastic});
    // tl1.from("#new1 img" ,0.5, {x:-600},"-=1");

    // tl1.from(childSplit.lines, 1.7 ,{  yPercent: 100, ease: 'power4.out', stagger: 0.1 })
        // .to(childSplit.chars, 1.7, { x: 39,ease: 'power4.out',stagger: 0   }, '+=1')



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
    // var element2 = document.querySelector("#new2 h3");
    // var childSplit2 = new  SplitText("h3", {
    //     type: "lines, chars",
    //     linesClass: "split-child"
    //   })
    //   var parentSplit2 = new  SplitText("h3", {
    //     linesClass: "split-parent"
    //   })

    // let revealText1 = document.querySelectorAll("#new2 h3");
    // let results1 = Splitting({ target: revealText, by: "lines1" });

    // results1.forEach((splitResult) => {
    //     alert("hello")
    //     const wrappedLines1 = splitResult.lines1
    //     .map(
    //         (wordsArr) => `
    //         <span class="line"><div class="words">
    //         ${wordsArr
    //             .map(
    //             (word) => `${word.outerHTML}<span class="whitespace"> 
    //         </span>`
    //             )
    //             .join("")}
    //         </div></span>`
    //     )
    //     .join("");
    //     splitResult.el.innerHTML = wrappedLines1;
    // });

    // gsap.registerPlugin(ScrollTrigger);
    // let revealLines1 = revealText1.forEach((element) => {
    //     const lines1 = element.querySelectorAll(".line .words");
    //     let tl12 = gsap.timeline({scrollTrigger: {trigger: "#new2",start: "top top",toggleActions:"restart none none reset",}});
    //     tl12.set(revealText1, { autoAlpha: 1 });
    // });
      
    //   tl2.from(childSplit2.lines, 1.7 ,{  yPercent: 100, ease: 'power4.out', stagger: 0.1 })
    tl2.staggerFrom( $("#new2 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.4");
    // tl2.from("#new2 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl2.from("#new2 a", 0.2,{y:+10, opacity:0, ease: Elastic});
    // tl2.from("#new2 img" ,0.5, {x:-600},"-=1");


    var scene = new ScrollMagic.Scene({
        triggerElement:"#new2",
        triggerHook: "onEnter",
        offset: 1300,
        reverse: true,
    })

    .setTween(tl2)
    .addTo(controller);


    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl3 = new TimelineMax();
   
    tl3.staggerFrom( $("#new3 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.4");
    // tl3.from("#new3 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl3.from("#new3 a", 0.2,{y:+10, opacity:0, ease: Elastic});
    // tl3.from("#new3 img" ,0.5, {x:-600},"-=1");


    var scene = new ScrollMagic.Scene({
        triggerElement:"#new3",
        triggerHook: "onEnter",
        offset: 1300,
        reverse: true,
    })

    .setTween(tl3)
    .addTo(controller);



    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl4 = new TimelineMax();
   
    tl4.staggerFrom( $("#new4 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.4");

    // tl4.from("#new4 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl4.from("#new4 a", 0.2,{y:+10, opacity:0, ease: Elastic});
    // tl4.from("#new4 img" ,0.5, {x:-600},"-=1");


    var scene = new ScrollMagic.Scene({
        triggerElement:"#new4",
        triggerHook: "onEnter",
        offset: 1300,
        reverse: true,
    })

    .setTween(tl4)
    .addTo(controller);


    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl5 = new TimelineMax();
   
    tl5.staggerFrom( $("#new5 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.4");

    // tl5.from("#new5 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl5.from("#new5 a", 0.2,{y:+10, opacity:0, ease: Elastic});
    // tl5.from("#new5 img" ,0.5, {x:-600},"-=1");


    var scene = new ScrollMagic.Scene({
        triggerElement:"#new5",
        triggerHook: "onEnter",
        offset: 1300,
        reverse: true,
    })

    .setTween(tl5)
    .addTo(controller);



    // ****************** animation project section ******************//
    var controller = new ScrollMagic.Controller({vertical: false});

    var tl6 = new TimelineMax();
   
    var time = 0.1;

    tl6.staggerFrom( $("#section02 .list-menu ul li"), 0.1, { y:+40, opacity:0, ease : Sine.easeIn }, time );
    tl6.from("#section02 h2", 0.2,{y:+30, opacity:0, ease: Sine.easeIn});
    tl6.staggerFrom( $("#section02 .menu-items"), 0 ,{y:+10, opacity:0, ease: Elastic}, time);
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
    // tl7.staggerFrom( $("#new6 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut });
    // tl7.staggerFrom( $("#new6 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut });
    tl7.staggerFrom( $("#new6 h1 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut }, "+=0.4");
    // tl7.staggerFrom( $("#new6 p .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut });
    tl7.staggerFrom( $("#new6 p"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut });

    // tl7.from("#new6 h1", 0.2,{y:+10, opacity:0, ease: Sine.easeIn});
    // tl7.from("#new6 p", 0.2,{y:+10, opacity:0, ease: Sine.easeIn});
    tl7.from("#new6 .card-details", 0.2,{y:+10, opacity:0, ease: Sine.easeIn});
    tl7.from("#new6 img" ,0.5, {x:-600},"-=2");


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
    tl8.staggerFrom( $("#new7 h1 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut }, "+=0.4");
    tl8.staggerFrom( $("#new7 p .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut });

    // tl8.from("#new7 h1", 0.2,{y:+10, opacity:0, ease: Sine.easeIn});
    // tl8.from("#new7 p", 0.2,{y:+10, opacity:0, ease: Sine.easeIn});
    tl8.from("#new7 img" ,0.5, {x:-600},"-=2");


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

    // tl9.from("#new8 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl9.staggerFrom( $("#new8 h3 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.4");
    tl9.staggerFrom( $("#new8 p .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut }, "+=0.4");

    // tl9.from("#new8 p", 0.2,{y:+10, opacity:0, ease: Sine.easeIn});
    tl9.staggerFrom( $("#new8 img"), 0.2, {x:-600}, "-=3");

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
    tl11.from("#section04 iframe", 0.2,{y:+10, opacity:0, ease: Elastic});

 
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
    tl12.staggerFrom( $("#new10 h1 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut });
    tl12.staggerFrom( $("#new10 p .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut }, "+=0.4");

    // tl12.from("#new10 h1", 0.2,{y:+10, opacity:0, ease: Back});
    // tl12.from("#new10 p", 0.2,{y:+10, opacity:0, ease: Sine.easeIn});
    tl12.from("#new10 a", 0.2,{y:+10, opacity:0, ease: Sine.easeIn});
    tl12.from("#new10 img" ,0.5, {x:-600},"-=2");

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

    // tl13.from("#new11 h3", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    tl13.staggerFrom( $("#new11 h3 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.4");
    tl13.staggerFrom( $("#new11 h6 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut });

    // tl13.from("#new11 h6", 0.2,{y:+10, opacity:0, ease: Back});
    tl13.staggerFrom( $("#new11 .process-wrapper"), 0.2, {x:-100, opacity:0, ease: Elastic }, "+=0.5");
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
 
    //  tl14.from("#new121 h1", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
     tl14.staggerFrom( $("#new121 h1 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.4");
     tl14.staggerFrom( $("#new121 p .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut }, "+=0.4");

    //  tl14.from("#new121 p", 0.2,{y:+10, opacity:0, ease: Back});
     tl14.from("#new121 img" ,0.5, {x:-600},"-=2");
 
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
 
     tl15.staggerFrom( $("#new122 h1 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.4");
     tl15.staggerFrom( $("#new122 p .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut }, "+=0.4");

    //  tl15.from("#new122 h1", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
    //  tl15.from("#new122 p", 0.2,{y:+10, opacity:0, ease: Back});
     tl15.from("#new122 img" ,0.5, {x:-600},"-=2");
 
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
 
    //  tl16.from("#new123 h1", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
     tl16.staggerFrom( $("#new123 h1 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.4");
     tl16.staggerFrom( $("#new123 p .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut }, "+=0.4");

    //  tl16.from("#new123 p", 0.2,{y:+10, opacity:0, ease: Back});
     tl16.from("#new123 img" ,0.5, {x:-600},"-=2");
 
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
     tl17.staggerFrom( $("#new13 h2 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut });

    //  tl17.from("#new13 h2", 0.2,{y:+10, opacity:0, ease: Back});
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
 
    //  tl18.from("#new14 h1", 0.2,{y:+30, opacity:0, ease: Sine.easeIn},"+=0.4");
     tl18.staggerFrom( $("#new14 h1 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.4");
     tl18.staggerFrom( $("#new14 p .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut });

    //  tl18.from("#new14 p", 0.2,{y:+10, opacity:0, ease: Back});
    //  tl18.from("#new14 a", 0.2,{y:+10, opacity:0, ease: Back});
     tl18.from("#new14 .car-banner" ,0.5, {x:-600},"-=1");

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
  
    //   tl19.from("#new15 h2", 0.2,{y:+30, opacity:0, ease: Back},"+=0.4");
      tl19.staggerFrom( $("#new15 h2 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.4");

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
   
    //    tl20.from("#new16 h2", 0.2,{y:+30, opacity:0, ease: Back},"+=0.4");
       tl20.staggerFrom( $("#new16 h2 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut },"+=0.4");
       tl20.staggerFrom( $("#new16 h4 .words"), 0.9,{y:+30, delay: 0.2, opacity:0, ease: Power3.easeOut });

    //    tl20.from("#new16 h4", 0.2,{y:+30, opacity:0, ease: Back});
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
    tl22.from("#order h1", 0.2,{y:+10, opacity:0, ease: Back});
    tl22.from("#order p", 0.2,{y:+10, opacity:0, ease: Back});
    tl22.from("#order h5", 0.2,{y:+10, opacity:0, ease: Back});
    tl22.from("#order .input-group", 0.2,{y:+10, opacity:0, ease: Back});
    tl22.from("#order a", 0.2,{y:+10, opacity:0, ease: Back});
    tl22.from("#order #myTab", 0.2,{y:+10, opacity:0, ease: Back});
    tl22.from("#order .tab-content", 0.2,{y:+10, opacity:0, ease: Back});
    tl22.from("#order img" ,0.5, {x:-600},"-=1");

    var scene = new ScrollMagic.Scene({
        triggerElement:"#order",
        triggerHook: "onEnter",
        offset: 1000,
        reverse: true,
    })

    .setTween(tl22)
    .addTo(controller);



});

// var left = new TimelineMax ();

// left.from($("#rect"),2,{width:0},1)
// .from($("#rect"),2,{right:400},1)


