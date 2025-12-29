// --- script.js ---
(function () {
  // mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobileNav");
  menuToggle &&
    menuToggle.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", String(!expanded));
      if (mobileNav) {
        mobileNav.hidden = !mobileNav.hidden;
      }
    });
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".view-panel");

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      // remove active everywhere
      tabs.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      // activate clicked tab + corresponding panel
      btn.classList.add("active");
      document.getElementById(btn.dataset.target).classList.add("active");
    });
  });

  // populate current year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // sample simple lazy-load for images
  const imgs = document.querySelectorAll("img");
  imgs.forEach((img) => {
    if ("loading" in HTMLImageElement.prototype) {
      img.loading = "lazy";
    }
  });

  // simple form feedback for demo
  const form = document.querySelector(".contact-form");
  form &&
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks — your message has been recorded (demo).");
      form.reset();
    });
})();
// --- end script.js ---
