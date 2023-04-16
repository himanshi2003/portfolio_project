const rootElement = document.querySelector(":root");
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
// console.log(styleSwitcherToggle);

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.toggle("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});
const alternateStyles = document.querySelectorAll(".color");

alternateStyles.forEach((colorEle) =>
  colorEle.addEventListener("click", (e) => {
    const colorClass = Array.from(e.target.classList);

    if (colorClass.includes("color-1")) return changeRootColor("#ec1839");
    if (colorClass.includes("color-2")) return changeRootColor("#fa5b0f");
    if (colorClass.includes("color-3")) return changeRootColor("#37b182");
    if (colorClass.includes("color-4")) return changeRootColor("#1854b4");
    if (colorClass.includes("color-5")) return changeRootColor("#f021b2");
  })
);

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

const changeRootColor = (newColor) => {
  rootElement.style.setProperty("--skin-color", newColor);
};
