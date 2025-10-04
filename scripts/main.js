
// Show the "Back to Top" button when scrolling down
window.onscroll = function() {
  const backToTopButton = document.querySelector(".back-to-top");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Scroll smoothly to the top when the button is clicked
document.querySelector(".back-to-top").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==========================
// Back to Top Button Script
// ==========================

window.addEventListener("scroll", () => {
  const backToTopButton = document.querySelector(".back-to-top");
  if (!backToTopButton) return;

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const backToTopButton = document.querySelector(".back-to-top");
  if (!backToTopButton) return;

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
