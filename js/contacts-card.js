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
    if (cityMenu.classList.contains("active")) {
      cityMenu.classList.remove("active");
    } else {
      cityMenu.classList.add("active");
    }
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

    listContacts.classList.add("active");
    cityMenu.classList.remove("active");
    if (!contactsImg.classList.contains("active")) {
      contactsImg.classList.add("active");
    }
    if (!sectionContacts.classList.contains("active")) {
      sectionContacts.classList.add("active");
    }
  }
})();
