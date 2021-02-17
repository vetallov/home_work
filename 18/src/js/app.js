const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileNav");
const NavList = document.getElementById("nav-list");

console.log(NavList);

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    NavList.classList.toggle("list-active");
  });

