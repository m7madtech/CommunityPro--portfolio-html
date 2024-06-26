const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

function applyPreferredMode() {
  // Check if user prefers dark mode
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDarkScheme) {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleSwitch.checked = true;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleSwitch.checked = false;
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

else {
  // Call the function to apply the preferred mode on page load
  applyPreferredMode();
}

// Optional: Listen for changes in the user's preferred color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyPreferredMode);

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;
