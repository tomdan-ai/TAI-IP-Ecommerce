const menuToggle = document.querySelector("#menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.style.visibility = menu.style.visibility === "visible" ? "hidden" : "visible";
});
