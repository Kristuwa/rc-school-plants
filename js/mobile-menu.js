(() => {
  const menuBtnRef = document.querySelector("[data-menu-btn]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const linkBtn = document.querySelector(".site-nav");

  const close = () => {
    mobileMenuRef.classList.toggle("is-open");
    menuBtnRef.classList.toggle("is-open");
  };

  linkBtn.addEventListener("click", (e) => {
    if (e.target.nodeName !== "A") {
      return;
    }
    close();
  });

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.setAttribute("aria-expanded", !expanded);
    close();
  });
})();
