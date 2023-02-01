(() => {
  const listRef = document.querySelector(".prices__list");
  const dropdawnCards = document.querySelectorAll(".dropdawn-card");
  const orderBtns = document.querySelectorAll(".dropdawn-card__button");

  function onOrderClick(e) {
    window.scrollTo({
      top: 3800,
      left: 0,
      behavior: "smooth",
    });
  }

  function onClickBtn(e) {
    if (e.target.nodeName !== "svg") {
      return;
    }

    [...dropdawnCards].map((item) => {
      if (item.dataset.name === e.target.dataset.name) {
        item.classList.add("open");
        const orderBtn = [...orderBtns].find(
          (item) => item.dataset.name === e.target.dataset.name
        );
        orderBtn.addEventListener("click", onOrderClick);
      } else {
        if (item.classList.contains("open")) {
          item.classList.remove("open");
        }
      }
    });
  }
  listRef.addEventListener("click", onClickBtn);
})();
