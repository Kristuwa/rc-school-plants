(() => {
  const buttonsRef = document.querySelector(".button-container");
  const serviceList = document.querySelectorAll(".service__item");
  const buttonsList = document.querySelectorAll(".service__button");

  let activeListBtn = [];
  let activeListItems = [];

  function onBtnClick(e) {
    // Если клик не по кнопке, то выходим
    if (e.target.nodeName !== "BUTTON") {
      return;
    }

    //Записываем в вспомогательный массив, какую кнопку нажали
    if (!activeListBtn.includes(e.target.dataset.name)) {
      //если ее нет в массиве, то добавляем
      activeListBtn.push(e.target.dataset.name);
      //если нажато уже 2 кнопки, то класс не добавляем
      if (activeListBtn.length <= 2) {
        e.target.classList.add("active");
        e.target.style = "color: #ffffff; background-color: #e06733";

        if (activeListBtn.length === 2) {
          [...buttonsList].map((item) => {
            if (item.classList.contains("active")) {
              item.disabled = false;
            } else {
              item.disabled = true;
            }
          });
        }
      }
    }
    // при повторном нажатии проверяем,если есть в массиве активных кнопок, то убираем класс и удаляем из массива
    else {
      activeListBtn = activeListBtn.filter(
        (item) => item !== e.target.dataset.name
      );
      e.target.classList.remove("active");
      e.target.style = "color: #e06733; background-color:transparent";
      if (activeListBtn.length === 1) {
        [...buttonsList].map((item) => {
          item.disabled = false;
        });
      }
    }
    // перебираем наши эементы галереи, и выбираем только те-которые совпадают с нажатой кнопкой
    activeListItems = [...serviceList]
      .map((item) => {
        if (item.classList.contains("no-active")) {
          item.classList.remove("no-active");
        }
        return item;
      })
      .filter((item) => {
        return !activeListBtn.includes(item.dataset.set);
      });

    activeListItems.map((item) => {
      return item.classList.toggle("no-active");
    });

    if (activeListItems.length === 6) {
      activeListItems = [...serviceList].map((item) => {
        if (item.classList.contains("no-active")) {
          item.classList.remove("no-active");
        }
        return item;
      });
    }
  }

  buttonsRef.addEventListener("click", onBtnClick);
})();
