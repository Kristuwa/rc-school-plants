(() => {
  const listRef = document.querySelector(".prices__list");
  const dropdawnCards = document.querySelectorAll(".dropdawn-card");
  const orderBtns = document.querySelectorAll(".dropdawn-card__button");

  function onOrderClick(e) {
    document.querySelector("#contacts").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function onClickBtn(e) {
    if (e.target.nodeName !== "svg" && e.target.nodeName !== "BUTTON") {
      return;
    }

    [...dropdawnCards].map((item) => {
      if (item.dataset.name === e.target.dataset.name) {
        item.classList.add("open");

        item.closest(".prices__item").classList.add("open");

        const orderBtn = [...orderBtns].find(
          (item) => item.dataset.name === e.target.dataset.name
        );
        orderBtn.addEventListener("click", onOrderClick);
      } else {
        if (item.classList.contains("open")) {
          item.classList.remove("open");
          listRef.classList.remove("open");
          item.closest(".prices__item").classList.remove("open");
        }
      }
    });
  }
  listRef.addEventListener("click", onClickBtn);
})();
