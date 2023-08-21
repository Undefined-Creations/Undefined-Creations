const header = document.getElementById("page-header");
const intercept = document.createElement("div");

intercept.setAttribute("data-observer-intercept", "");
header.before(intercept);

const observer = new IntersectionObserver(([entry]) => {
  header.classList.toggle("active", !entry.isIntersecting);
});

observer.observe(intercept);

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('fa-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('fa-x');
	navlist.classList.remove('active');
};