const header = document.getElementById("page-header");
const intercept = document.createElement("div");

intercept.setAttribute("data-observer-intercept", "");
header.before(intercept);

const observer = new IntersectionObserver(([entry]) => {
  header.classList.toggle("active", !entry.isIntersecting);
});

observer.observe(intercept);

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
let sections = document.querySelectorAll("section");

menu.onclick = () => {
  menu.classList.toggle("fa-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-x");
  navlist.classList.remove("active");
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

//mailfunction
(function () {
  // Initialize EmailJS (should ideally be done at the beginning)
  emailjs.init("27kMva3kwih5CHkUH");
})();

document.getElementById("contact-form").addEventListener("submit", (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the email value from the form
  var params = {
    email: document.querySelector("#email").value,
  };

  // Service ID and template ID from EmailJS dashboard
  var serviceID = "service_7p8lfc2";
  var templateID = "template_r4fpjhr";

  // Send the email using EmailJS
  emailjs
    .send(serviceID, templateID, params)
    .then(function (response) {
      console.log("Email sent successfully:", response);
      // You can add additional handling here, like displaying a success message to the user
    })
    .catch(function (error) {
      console.error("Email failed to send:", error);
      // You can add handling for error cases here, like displaying an error message
    });
});

// preloader 
var loader = document.getElementById('preloader');

window.addEventListener("load", function(){
  loader.style.display = "none";
});