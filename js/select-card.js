const buttonsRef = document.querySelector(".button-container");
const gardensRef = document.querySelectorAll("[data-garden]");
const lawnRef = document.querySelectorAll("[data-lawn]");
const plantingRef = document.querySelectorAll("[data-planting]");
const buttons = document.querySelectorAll(".service__button");

function select(array) {
  array.forEach((item) => item.classList.toggle("active"));
}
const btnList = Array.from(buttons);

function onBtnClick(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  e.target.classList.toggle("active");
  const btnActive = btnList.filter((item) => {
    return item.className === "button service__button active";
  });
  const noActiveBtn = btnActive.find(
    (item) =>
      item.className !== "button service__button active" &&
      btnActive.length === 2
  );
  console.log(noActiveBtn);
  noActiveBtn.setAttribute("disabled");
  if (e.target.textContent === "Gardens") {
    select(plantingRef);
    select(lawnRef);
  }
  if (e.target.textContent === "Lawn") {
    select(gardensRef);
    select(plantingRef);
  }
  if (e.target.textContent === "Planting") {
    select(gardensRef);
    select(lawnRef);
  }
}

buttonsRef.addEventListener("click", onBtnClick);
