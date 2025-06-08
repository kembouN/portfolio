// Theme toggle script
const toggleBtn = document.getElementById("toggle-theme");
const html = document.documentElement;

function toggleTheme() {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", toggleTheme);
}

const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  html.setAttribute("data-theme", storedTheme);
}

// Scroll progress bar
const scrollBar = document.createElement("div");
scrollBar.id = "scroll-bar";
document.body.prepend(scrollBar);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollBar.style.width = scrollPercent + "%";
});

// Effet de trace de curseur
window.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 2000);
});
