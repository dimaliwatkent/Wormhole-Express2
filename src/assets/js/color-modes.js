// Check if the user has a preferred color scheme (light/dark) set in their browser
const prefersDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply the appropriate theme based on user preference
function applyTheme(darkMode) {
  const body = document.querySelector("body");
  if (darkMode) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
}

// Toggle the dark mode
function toggleDarkMode() {
  const body = document.querySelector("body");
  body.classList.toggle("dark-mode");
}

// Initialize the theme based on user preference or default to light mode
applyTheme(prefersDarkMode);

// Add event listener to the dark mode toggle button
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", toggleDarkMode);
