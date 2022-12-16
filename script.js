const images = document.querySelectorAll(".container>.icons>.img>img");
const targetImage = document.querySelector(".target-image");
const inner = document.querySelector(".inner-content");

for (const image of images) {
  image.addEventListener("mouseover", () => {
    targetImage.src = image.src;
    inner.classList.add("active");
  });
  image.addEventListener("mouseout", () => {
    inner.classList.remove("active");
  });
}
