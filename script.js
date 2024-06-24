// nav bar

var tl = gsap.timeline();

tl.from(".section1", {
	y: 0,
	duration: 0.3,
	opacity: 0,
	ease: "power2.out",
	stagger: 0.5,

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
var show_btn = document.querySelector(".menu-btn");
var hide_btn = document.querySelector(".hide-menu");

$(document).ready(function () {
	screen_change();
})

function screen_change() {
	var navWidth = navbar.offsetWidth;
	if (navWidth <= 768) {
		links.style.height = "0px";
		links.style.visibility = "hidden";
		hide_btn.style.visibility = "hidden";
		show_btn.style.visibility = "visible";
	}
	if (navWidth > 768) {
		links.style.visibility = "visible";
		show_btn.style.visibility = "hidden";
		hide_btn.style.visibility = "hidden";
	}
}

function show_menu() {
	links.style.visibility = "visible";
	links.style.height = "max-content";
	show_btn.style.visibility = "hidden";
	hide_btn.style.visibility = "visible";
}

function hide_menu() {
	links.style.visibility = "hidden";
	links.style.height = "0px";
	show_btn.style.visibility = "visible";
	hide_btn.style.visibility = "hidden";
}


// section 2

let headText = '';
const mainHead = document.querySelector(".section2 .left h1");
const mainText = mainHead.innerText;

var splitText = mainText.split("");

splitText.forEach(ch => {
	headText += "<span>" + ch + "</span>";
});

document.querySelector(".section2 .left h1").innerHTML = headText;

var tl2 = gsap.timeline();

tl2.from(".section2 .left h1 span", {
	opacity: 0,
	duration: 1,
	stagger: 0.1,
})

tl2