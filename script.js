// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuList = document.getElementById("menu-list");

  menuToggle.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
  });
});

// Scroll-to-top button
window.addEventListener("scroll", () => {
  document.getElementById("scrollBtn").style.display =
    window.scrollY > 300 ? "block" : "none";
});
<script>
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    });
</script>
