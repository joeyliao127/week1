const hamburger = document.querySelector(".hamburger");
const topItems = document.querySelector(".top-items");
const body = document.querySelector("body");
console.log(hamburger);
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  topItems.style.display = "block";
  body.classList.add("no-scroll");
  body.style.overflow = "hidden";
});

body.addEventListener("click", (e) => {
  if (!e.target.closest(".hamburger")) {
    body.classList.remove("no-scroll");
    body.style.overflow = "auto";
  }
  topItems.style.display = "none";
});

topItems.addEventListener("click", (e) => {
  e.stopPropagation();
  topItems.style.display = "block";
});
