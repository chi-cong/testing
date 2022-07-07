const navIcons = document.querySelectorAll(".material-symbols-outlined");
const navTitles = document.querySelectorAll(".navText");

const showHide = () => {
  if (screenWidth <= 640) {
    navIcons.forEach((icon) => {
      icon.classList.remove("hide");
    });
    navTitles.forEach((title) => {
      title.classList.add("hide");
    });
  } else {
    navIcons.forEach((icon) => {
      icon.classList.add("hide");
    });
    navTitles.forEach((title) => {
      title.classList.remove("hide");
    });
  }
};

let screenWidth = window.innerWidth;
showHide();

window.addEventListener("resize", () => {
  screenWidth = window.innerWidth;
  showHide();
});
