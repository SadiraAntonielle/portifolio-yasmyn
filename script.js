// ano automático
document.getElementById("year").textContent = new Date().getFullYear();

// menu mobile
const btn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  const isOpen = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.hidden = isOpen;
});

// fecha menu ao clicar
mobileMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    btn.setAttribute("aria-expanded", "false");
    mobileMenu.hidden = true;
  });
});

// fade-in ao rolar
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
