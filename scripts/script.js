// Hamburger menu
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("active");
});

// Smooth scroll z uwzględnieniem fixed header
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // dynamiczna wysokość header
    const headerHeight = document.getElementById("main-menu").offsetHeight;

    // pozycja docelowa
    const targetPosition = targetElement.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition >= 0 ? targetPosition : 0,
      behavior: "smooth",
    });

    // zamknięcie menu mobilnego
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      hamburger.classList.remove("active");
    }
  });
});
// Czekamy aż strona się załaduje
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  // Funkcja sprawdzająca, czy element jest widoczny w oknie
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // Funkcja dodająca klasę 'animate' z opóźnieniem
  function animateElements() {
    animatedElements.forEach((el, index) => {
      if (isInViewport(el) && !el.classList.contains("animate")) {
        // Dodajemy opóźnienie dla elementów w tej samej sekcji
        const delay = el.dataset.delay || index * 50; // 150ms między elementami
        setTimeout(() => {
          el.classList.add("animate");
        }, delay);
      }
    });
  }

  // Wstępne odpalenie przy załadowaniu strony
  animateElements();

  // Odpalenie przy scrollowaniu
  window.addEventListener("scroll", animateElements);
});
