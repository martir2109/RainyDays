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

//for the password eye icon\\
const togglerpassword = document.querySelector("#toggler");
const password = document.querySelector("#password");

togglerpassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  this.classList.toggle("bi-eye-slash");
});
