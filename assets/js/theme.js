const LOCAL_STORAGE_KEY = "dark-mode";
let isDark = localStorage.getItem(LOCAL_STORAGE_KEY) === "true";
loadTheme();

function toggleTheme() {
  isDark = !isDark;
  loadTheme();
  localStorage.setItem(LOCAL_STORAGE_KEY, isDark);
}

function loadTheme() {
  const THEME_TOGGLER = document.getElementById("theme-toggler");
  const BODY = document.getElementsByTagName("BODY")[0];

  if (isDark) {
    BODY.classList.remove("bootstrap");
    BODY.classList.add("bootstrap-dark");
    THEME_TOGGLER.innerHTML = "🌞";
  } else {
    BODY.classList.remove("bootstrap-dark");
    BODY.classList.add("bootstrap");
    THEME_TOGGLER.innerHTML = "🌙";
  }
}
