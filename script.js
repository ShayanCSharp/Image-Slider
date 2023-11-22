let index = 1;
let imgContainer = document.querySelector(".image-container");
let imgs = document.querySelectorAll("img");
let time;

document.querySelector("#right").addEventListener("click", () => {
  clearTimeout(time);
  index++;
  updateImage();
});

document.querySelector("#left").addEventListener("click", () => {
  clearTimeout(time);
  index--;
  updateImage();
});

let updateImage = () => {
  if (index >= imgs.length) {
    index = 1;
  } else if (index < 1) {
    index = imgs.length - 1;
  }
  imgContainer.style.transform = `translateX(-${(index - 1) * 500}px)`;

  time = setTimeout(() => {
    index++;
    updateImage();
  }, 3000);
};

updateImage();
