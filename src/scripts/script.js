const toggleNavBarBtn = document.getElementById("toggle-navbar-btn");
const navBarModal = document.getElementById("responsive-nav-bar");
const closeNavBarBtn = document.getElementById("close-nav-bar-btn");

const toggleNavBar = () => {
  navBarModal.classList.toggle("hidden");
  document.body.style.overflow = document.body.style.overflow.length ? "" : "hidden";
}

toggleNavBarBtn.addEventListener("click", toggleNavBar);
closeNavBarBtn.addEventListener("click", toggleNavBar);

const productSectionRef = document.getElementById("product-section");
const customerSectionRef = document.getElementById("customer-section");
const pricingSectionRef = document.getElementById("pricing-section");

const navigate = (htmlElement, scrollLogicalPosition = "start") => htmlElement.scrollIntoView({ behavior: "smooth", block: scrollLogicalPosition });

document.getElementById("product-nav-link").addEventListener("click", (event) => {
  event.preventDefault();
  navigate(productSectionRef);
});

document.getElementById("customer-nav-link").addEventListener("click", (event) => {
  event.preventDefault();
  navigate(customerSectionRef);
});

document.getElementById("pricing-nav-link").addEventListener("click", (event) => {
  event.preventDefault();
  navigate(pricingSectionRef)
});

document.getElementById("product-mobile-nav-link").addEventListener("click", (event) => {
  event.preventDefault();
  toggleNavBar();
  navigate(productSectionRef);
});

document.getElementById("customer-mobile-nav-link").addEventListener("click", (event) => {
  event.preventDefault();
  toggleNavBar();
  navigate(customerSectionRef);
});

document.getElementById("pricing-mobile-nav-link").addEventListener("click", (event) => {
  event.preventDefault();
  toggleNavBar();
  navigate(pricingSectionRef);
});

document.getElementById("pricing-footer-nav-link").addEventListener("click", () => navigate(pricingSectionRef));

const toggleLanguageSwitcher = document.getElementById("language-switcher-btn");
const languageSwitcherModal = document.getElementById("language-menu");

const toggleLanguageNav = () => {
  languageSwitcherModal.classList.toggle("hidden");
  document.body.style.overflow = document.body.style.overflow.length ? "" : "hidden";
}

toggleLanguageSwitcher.addEventListener("click", toggleLanguageNav);