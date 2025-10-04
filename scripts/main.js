// ==========================
// Back to Top Button Script
// ==========================

// Show or hide the button when scrolling
window.addEventListener("scroll", () => {
  const backToTopButton = document.querySelector(".back-to-top");
  if (!backToTopButton) return;

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Smooth scroll to top when clicked
document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.querySelector(".back-to-top");
  if (!backToTopButton) return;

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
