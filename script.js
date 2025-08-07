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
  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.impact-count');

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText.replace("+", "");
        const increment = target / 200;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target.toLocaleString() + "+";
        }
      };

      updateCount();
    });
  });