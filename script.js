// nav bar

var tl = gsap.timeline();

tl.from(".section1", {
  y: 0,
  duration: 1,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.5,
  delay: 0.5,
});

tl.from("nav ul li", {
  y: 0,
  duration: 0.5,
  opacity: 0,
  ease: "power2.out",
  stagger: 0.1,
});

var navbar = document.querySelector(".section1");
var links = document.querySelector("nav");
var bars = document.querySelector(".menu-btn");

screen_change();

function screen_change() {
  var navWidth = navbar.offsetWidth;
  if (navWidth <= 768) {
    links.style.visibility = "hidden";
    links.style.height = "0px";
    bars.style.visibility = "visible";
    // console.log(navWidth);
  }
  if (navWidth > 768) {
    links.style.visibility = "visible";
    bars.style.visibility = "hidden";
  }
}

function show_menu() {
  console.log("Clicked");
  links.style.visibility = "visible";
  links.style.height = "max-content";
  bars.style.visibility = "hidden";
}
