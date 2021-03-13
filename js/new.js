// window.addEventListener("load", function () {
//     let revealText = document.querySelectorAll("#viewport h1");
//     let results = Splitting({ target: revealText, by: "lines" });
  
//     results.forEach((splitResult) => {
//       const wrappedLines = splitResult.lines
//         .map(
//           (wordsArr) => `
//           <span class="line"><div class="words">
//             ${wordsArr
//               .map(
//                 (word) => `${word.outerHTML}<span class="whitespace"> 
//            </span>`
//               )
//               .join("")}
//           </div></span>`
//         )
//         .join("");
//       splitResult.el.innerHTML = wrappedLines;
//     });
  
//     gsap.registerPlugin(ScrollTrigger);
//     let revealLines = revealText.forEach((element) => {
//         alert("hello")
//       const lines = element.querySelectorAll(".line .words");
  
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: element,
//             toggleActions:"restart none none reset",
//         }
//       });
//       tl.set(revealText, { autoAlpha: 1 });
//       tl.from(lines, 1, {
//         yPercent: 100,
//         ease: Power3.out,
//         stagger: 0.25,
//         delay: 0.2
//       });
//     });
//   });