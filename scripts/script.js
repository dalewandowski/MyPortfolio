(() => {
  // ==========================
  //  HAMBURGER MENU
  // ==========================
  const hamburger = document.getElementById("hamburger");
  const menu = document.querySelector("nav ul");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
    hamburger.classList.toggle("active");
  });

  // ==========================
  //  SMOOTH SCROLL (z uwzględnieniem headera)
  // ==========================
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      const headerHeight = document.getElementById("main-menu").offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition >= 0 ? targetPosition : 0,
        behavior: "smooth",
      });

      // Zamknij menu mobilne po kliknięciu
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        hamburger.classList.remove("active");
      }
    });
  });

  // ==========================
  //  ANIMACJE PRZY SCROLLOWANIU
  // ==========================
  document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    };

    function animateElements() {
      animatedElements.forEach((el, index) => {
        if (isInViewport(el) && !el.classList.contains("animate")) {
          const delay = el.dataset.delay || index * 50;
          setTimeout(() => {
            el.classList.add("animate");
          }, delay);
        }
      });
    }

    // Pierwsze uruchomienie
    animateElements();

    // Debounce scrolla – optymalizacja wydajności
    let scrollTimeout;
    window.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(animateElements, 100);
    });
  });

  // ==========================
  //  FALLING TAGS (spadające znaczniki HTML)
  // ==========================
  const tags = [
    "<div>",
    "<p>",
    "<h1>",
    "<span>",
    "<a>",
    "<section>",
    "<footer>",
    "<header>",
    "const",
    "let",
    "function",
    "try",
    "catch",
  ];

  const container = document.getElementById("falling-tags");
  const maxTags = 10;

  function createFallingTag() {
    const currentTags = document.querySelectorAll(".falling-tag").length;
    if (currentTags >= maxTags) return; // nie tworzymy więcej niż maxTags

    const tag = document.createElement("div");
    tag.classList.add("falling-tag");
    tag.textContent = tags[Math.floor(Math.random() * tags.length)];

    tag.style.left = Math.random() * 100 + "vw";
    tag.style.animationDuration = 6 + Math.random() * 15 + "s";

    container.appendChild(tag);

    // Usuwamy po zakończeniu animacji
    setTimeout(() => tag.remove(), 10000);
  }

  // Spadające znaczniki — rzadziej, żeby było subtelnie
  setInterval(createFallingTag, 1000);
})();

// cookie

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");
  const rejectBtn = document.getElementById("reject-cookies");

  // Jeśli użytkownik zaakceptował cookies wcześniej, ukryj pasek
  if (localStorage.getItem("cookiesDecision") === "accepted") {
    banner.style.display = "none";
    enableCookies();
  }

  acceptBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesDecision", "accepted");
    banner.style.display = "none";
    enableCookies();
  });

  rejectBtn.addEventListener("click", function () {
    // Odrzucenie = nic nie zapisujemy, pasek chowa się
    banner.style.display = "none";
    console.log("Użytkownik odrzucił cookies. Żadne dane nie są zapisywane.");
  });

  function enableCookies() {
    console.log(
      "Cookies zaakceptowane. Tutaj można uruchomić analitykę lub inne funkcje."
    );
    //  Google analitycs, jesli zostanie dodane
    // gtag('consent', 'update', { 'analytics_storage': 'granted' });
  }
});
