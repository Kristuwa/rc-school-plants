(() => {
  const dropdawnMenuBtn = document.querySelector(".btn-contacts");
  const listContacts = document.querySelector(".dropdown-menu");
  const titleMenu = document.querySelector(".menu-text");
  const cardInformation = document.querySelectorAll(".card-information");
  const cityMenu = document.querySelector(".city-menu");
  const contactsImg = document.querySelector(".contacts__img");
  const sectionContacts = document.querySelector(".contacts");

  dropdawnMenuBtn.addEventListener("click", onDropdawnMenuClick);
  listContacts.addEventListener("click", onCityClick);

  function onDropdawnMenuClick(e) {
    listContacts.classList.toggle("active");
    cityMenu.classList.toggle("active");
  }

  function onCityClick(e) {
    if (e.target.nodeName !== "P") {
      return;
    }
    titleMenu.textContent = e.target.textContent;

    [...cardInformation].map((item) => {
      if (item.dataset.name === e.target.dataset.name) {
        item.classList.add("is-open");
      } else {
        if (item.classList.contains("is-open")) {
          item.classList.remove("is-open");
        }
      }
    });
    cityMenu.classList.toggle("active");
    contactsImg.classList.add("active");
    sectionContacts.classList.add("active");
  }
})();
