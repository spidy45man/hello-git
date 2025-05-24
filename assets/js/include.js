document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar-placeholder");
  const footer = document.getElementById("footer-placeholder");

  if (navbar) {
    fetch("components/header.html")
      .then(res => res.text())
      .then(data => {
        navbar.innerHTML = data;
      })
      .catch(err => console.error("Header load failed:", err));
  }

  if (footer) {
    fetch("components/footer.html")
      .then(res => res.text())
      .then(data => {
        footer.innerHTML = data;
      })
      .catch(err => console.error("Footer load failed:", err));
  }
});
