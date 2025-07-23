document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("hamburger");
  const navMenu = document.getElementById("navLinks");

  // Toggle menu
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Close menu on link click
    document.querySelectorAll("nav ul li a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
});
