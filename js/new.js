function PageTransition() {
    var tl = gsap.timeline();
    // alert("first")
    // tl.to(".loading-screen", {duration:1.2, width:"100%", left: "0%", ease:"Expo.easeInOut"})
    // tl.to(".loading-screen", {duration:1, width:"100%", left:"100%", ease:"Expo.easeInOut", delay:0.3})
    // tl.set(".loading-screen", {left:"-100%"})
    // alert("second")
    tl.to('ul.transition li' , {duration: 1.5, scaleY:1, transformOrigin: "bottom left", stagger: .1 }, "-=1.1")
    tl.to('ul.transition li' , {duration: .5, scaleY:0, transformOrigin: "bottom left", stagger: .1 , delay: .1})
}

function contentAnimation() {
    var tl = gsap.timeline();
    // tl.to(".loading-screen", {duration:1.2, width:"100%", left: "0%", ease:"Expo.easeInOut"})
    // tl.to(".loading-screen", {duration:1, width:"100%", left:"100%", ease:"Expo.easeInOut", delay:0.3})
    // tl.set(".loading-screen", {left:"-100%"})
    tl.from('.left' , {duration: 1.5, translateY:50, opacity:0 })
    tl.to('img' , {clipPath:"polygon(0 0 , 100% 0, 100% 100%, 0% 100%)"}, "-=1.1")
    tl.from('.box' , {duration: .5, scaleX:0, transformOrigin: "bottom left", stagger: .1 , delay: .1 })
}


function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();

        }, n);
    });
}



barba.init({
    sync:true,

    transitions: [{
        async leave(data) {
            const done = this.async();
            PageTransition();
            await delay(1500);
            done();
        },

        async enter(data) {
            contentAnimation();
        },
        async once(data) {
            contentAnimation();
        }
    }]
});

