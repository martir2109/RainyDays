//Followed this tutorial: https://www.youtube.com/watch?v=OQZNAMjC6Vg
const productContainers = [...document.querySelectorAll(".product-container")];
const nextButton = [...document.querySelectorAll(".next-button")];
const previousButton = [...document.querySelectorAll(".previous-button")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextButton[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  previousButton[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
