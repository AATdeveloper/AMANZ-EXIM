// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Form Validation - Contact Us form
    const contactForm = document.querySelector("form");
  
    contactForm.addEventListener("submit", function (e) {
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;
  
      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting the form.");
        e.preventDefault();  // Prevent form submission
      } else {
        alert("Thank you for contacting us!");
      }
    });
  
    // Smooth Scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 50,  // Offset to avoid hiding under fixed header
          behavior: "smooth",
        });
      });
    });
  
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const navMenu = document.querySelector("nav ul");
  
    mobileNavToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  
    // Sticky Navigation Bar
    const header = document.querySelector("header");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  
    // Scroll Animations (for sections appearing as you scroll down)
    const sections = document.querySelectorAll("section");
    const scrollAnimation = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add("fade-in");
        }
      });
    };
  
    window.addEventListener("scroll", scrollAnimation);
  
    // Initial call to handle animations already visible at page load
    scrollAnimation();
  
  });
  