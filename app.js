const hamburger = document.querySelector(".hamburger");
const topItems = document.querySelector(".top-items");
const body = document.querySelector("body");
const windowWidth = window.innerWidth;
console.log(windowWidth);
hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  topItems.style.display = "block";
  body.classList.add("no-scroll");
  body.style.overflow = "hidden";
});

if (windowWidth > 360 && windowWidth < 600) {
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
}

console.log(window);
