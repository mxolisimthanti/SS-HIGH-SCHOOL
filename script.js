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
 <script src="js/header.js"></script>
  <script>
    function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
      }

      alert("Message sent successfully!");
      return true;
    }
  </script>
