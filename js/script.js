gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed",
});

// gsap Animations

gsap.to(".home-right img", {
  scrollTrigger: {
    trigger: "#home",
    scroller: ".smooth-scroll",
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
    scroller: ".smooth-scroll",
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
    scroller: ".smooth-scroll",
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
    scroller: ".smooth-scroll",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
  background: "#000",
  duration: 1,
});

gsap.to("#top-nav", {
  scrollTrigger: {
    trigger: "#home",
    scroller: ".smooth-scroll",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
  background: "#000",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
  duration: 1,
});

// about page animations
let aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    scroller: ".smooth-scroll",
    start: "top center",
  },
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

aboutTl.fromTo(
  ".abt-rt",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, stagger: 0.5 },
  `${window.innerWidth < 768 ? "-=2.5" : "-=0.75"}`
);

let skillsTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#skills",
    scroller: ".smooth-scroll",
    start: "top center",
  },
});

skillsTl.fromTo(
  "#skill-heading",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);
skillsTl.fromTo(
  ".skill",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1, stagger: 0.25 },
  "-=0.5"
);

// projects timeline
let projectsTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#projects",
    scroller: ".smooth-scroll",
    start: "top center",
  },
});

projectsTl.fromTo(
  "#projects-heading",
  {
    y: 100,
    opacity: 0,
  },
  { y: 0, opacity: 1, duration: 1 }
);

projectsTl.fromTo(
  ".project",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.25, duration: 1 },
  "-=0.5"
);

// footer timeline
let footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#footer",
    scroller: ".smooth-scroll",
    start: "top center",
  },
});

footerTl.fromTo(".fwrap-2", { right: "100%" }, { right: "0%", duration: 1 });
footerTl.fromTo(
  ".fwrap-1",
  { right: "100%" },
  { right: "0%", duration: 1 },
  "-=1"
);
footerTl.fromTo(".fwrap-2", { left: "0%" }, { left: "100%", duration: 1 });
footerTl.fromTo(
  ".fwrap-1",
  { left: "0%" },
  { left: "100%", duration: 1 },
  "-=0.5"
);

footerTl.from(".footer-left", { backgroundColor: "#fff", duration: 1 }, "-=1");
footerTl.from(
  "#fban",
  { opacity: 0, duration: 1 },
  `${window.innerWidth < 768 ? "-=2.5" : "-=1"}`
);
footerTl.fromTo(
  ".fanim",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1, stagger: 0.25 },
  `${window.innerWidth < 768 ? "-=2.5" : "-=0.5"}`
);

// Gsap Animation End

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

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
