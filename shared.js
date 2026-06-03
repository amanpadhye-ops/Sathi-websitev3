function toggleMenu() {
  document.body.classList.toggle("mobile-nav-open");
}
document.addEventListener("click", function(e) {
  if (!e.target.closest("nav")) document.body.classList.remove("mobile-nav-open");
});
