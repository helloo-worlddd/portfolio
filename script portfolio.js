// Toggle Light/Dark Theme
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Update Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();
