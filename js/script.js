gsap.registerPlugin(ScrollTrigger);

gsap.to(".home-right img", {
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  scale: 1.5,
  duration: 1,
});

gsap.to(".hoverlay", {
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
  width: "100%",
  duration: 1,
});

gsap.to(".home-left span", {
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
  opacity: 0,
  duration: 1,
});

gsap.to(".home-left", {
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
  background: "#000",
  duration: 1,
});

// gsap.from("#about", {
//   scrollTrigger: {
//     trigger: "#about",
//     start: "top bottom",
//     end: "top center",
//     scrub: true,
//   },
//   background: "#000",
//   duration: 1,
// });

gsap.to("#top-nav", {
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
  background: "#000",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
  duration: 1,
});

// gsap.from(".abt-rt", {
//   scrollTrigger: {
//     trigger: "#about",
//     start: "top center",
//   },
//   y: -100,
//   opacity: 0,
//   duration: 1.5,
//   stagger: 0.2,
// });

// Nav Bar Toggle
const toggleOne = document.querySelector("#toggle");
const toggleTwo = document.querySelector("#counter-toggle");

toggleOne.addEventListener("click", () => {
  gsap.to("#main-nav", {
    y: 0,
    opacity: 1,
    duration: 0.25,
  });
  gsap.to("#main-nav", {
    y: 0,
    opacity: 1,
    duration: 0.25,
  });
  gsap.from(
    ".mnavItem",
    {
      x: 100,
      opacity: 0,
      duration: 0.25,
      stagger: 0.2,
    },
    ">"
  );
  gsap.from(
    "#counter-toggle",
    { rotation: 360, opacity: 0, duration: 0.5 },
    ">"
  );
});

toggleTwo.addEventListener("click", () => {
  gsap.to("#main-nav", { y: "-100%", opacity: 0, duration: 0.25 });
});

// const mvLeft = document.querySelector("#mv-left");
// const mvRight = document.querySelector("#mv-right");

const pages = ["home", "about", "skills", "projects", "footer"];

let currPage = 0;

// mvLeft.addEventListener("click", () => {
//   // window.scrollY = window.scrollY - 715 > 0 ? window.scrollY - 715 : 0;
//   // window.scrollBy(0, -715);
//   if (currPage > 0) {
//     currPage = currPage - 1;
//     window.location.href =
//       window.location.href.split("#")[0] + "#" + pages[currPage];
//   }
// });

// mvRight.addEventListener("click", () => {
//   console.log("clicked");
//   // window.scrollY = window.scrollY + 715 < 4210 ? window.scrollY + 715 : 4210;
//   // window.scrollBy(0, 715);
//   if (currPage < 4) {
//     currPage = currPage + 1;
//     window.location.href =
//       window.location.href.split("#")[0] + "#" + pages[currPage];
//   }
// });

let aboutTl = gsap.timeline({
  scrollTrigger: { trigger: "#about", start: "top center" },
  ease: "power1.out",
});

aboutTl.fromTo(".wrap-2", { right: "100%" }, { right: "0%", duration: 1 });
aboutTl.fromTo(
  ".wrap-1",
  { right: "100%" },
  { right: "0%", duration: 1 },
  "-=1"
);
aboutTl.fromTo(".wrap-2", { left: "0%" }, { left: "100%", duration: 1 });
aboutTl.fromTo(
  ".wrap-1",
  { left: "0%" },
  { left: "100%", duration: 1 },
  "-=0.5"
);
aboutTl.from(
  "#about-image",
  {
    scale: 1.5,
    duration: 1.5,
  },
  "-=1.25"
);

aboutTl.fromTo(
  ".img-wrap",
  {
    right: "100%",
  },
  { right: "0%", duration: 1 },
  "-=1.5"
);

aboutTl.fromTo(
  ".abt-wrap",
  {
    left: "0%",
  },
  { left: "100%", duration: 1 },
  "-=1"
);
