// 完全版 theme-switcher.js

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
    } else {
      applyTheme("light");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initTheme();
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme");
      const newTheme = current === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }
});
