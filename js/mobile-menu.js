(() => {
  const menuBtnRef = document.querySelector("[data-menu-btn]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const linkBtn = document.querySelector(".site-nav");

  const toggleMenu = () => {
    mobileMenuRef.classList.toggle("is-open");
    menuBtnRef.classList.toggle("is-open");
    document.body.classList.toggle("is-open");
  };

  linkBtn.addEventListener("click", (e) => {
    if (e.target.nodeName !== "A") {
      return;
    }
    toggleMenu();
  });

  function onClickBackdrop(e) {
    const target = e.target;
    const its_menu = target === mobileMenuRef || mobileMenuRef.contains(target);
    const its_btnMenu = target === menuBtnRef;
    const menu_is_active = mobileMenuRef.classList.contains("is-open");

    if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleMenu();
    }
  }

  document.addEventListener("click", onClickBackdrop);

  menuBtnRef.addEventListener("click", (e) => {
    e.stopPropagation();
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.setAttribute("aria-expanded", !expanded);

    toggleMenu();
  });
})();
