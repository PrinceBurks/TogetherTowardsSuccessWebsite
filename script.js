const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const quotes = Array.from(document.querySelectorAll("#testimonialCarousel .quote"));
const nextQuoteBtn = document.getElementById("nextQuote");
const prevQuoteBtn = document.getElementById("prevQuote");

let quoteIndex = 0;
let quoteTimer = null;

function showQuote(index) {
  if (!quotes.length) {
    return;
  }
  quoteIndex = (index + quotes.length) % quotes.length;
  quotes.forEach((quote, idx) => {
    quote.classList.toggle("is-active", idx === quoteIndex);
  });
}

function startQuoteRotation() {
  if (!quotes.length) {
    return;
  }
  if (quoteTimer) {
    clearInterval(quoteTimer);
  }
  quoteTimer = setInterval(() => {
    showQuote(quoteIndex + 1);
  }, 5500);
}

if (quotes.length) {
  showQuote(0);
  startQuoteRotation();
}

if (nextQuoteBtn) {
  nextQuoteBtn.addEventListener("click", () => {
    showQuote(quoteIndex + 1);
    startQuoteRotation();
  });
}

if (prevQuoteBtn) {
  prevQuoteBtn.addEventListener("click", () => {
    showQuote(quoteIndex - 1);
    startQuoteRotation();
  });
}
