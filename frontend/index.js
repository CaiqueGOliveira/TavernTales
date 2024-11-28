const navMobile = document.querySelector(".nav-mobile");

const menuHamburguer1 = document.querySelector("#icon1");
menuHamburguer1.addEventListener("click", () => {
  navMobile.style.display = "flex";
});

const menuHamburguer2 = document.querySelector("#icon2");
menuHamburguer2.addEventListener("click", () => {
  navMobile.style.display = "none";
});
