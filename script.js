let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slides = document.getElementsByClassName("slide");
slides = Array.from(slides);

prev.addEventListener("click", (e) => {
  slides.forEach((item) => {
    item.classList.toggle("disabled");
  });
});

next.addEventListener("click", (e) => {
  slides.forEach((item) => {
    item.classList.toggle("disabled");
  });
});

document.onkeydown = (e) => {
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    slides.forEach((item) => {
      item.classList.toggle("disabled");
    });
  }
};
