(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
modal-window-button:hover,
modal-window-button:focus {
  background-color: #404bbf;
  border: none;
}
close-button {
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin: 1px solid rgba(0, 0, 0, 0, 0.1);
  transition: background-colour 250ms cubic-bezier(0.4, 0, 0.2, 1),border 250ms cubic-bezier(0.4, 0, 0.2, 1);
}
close-button:hover,
close-button:focus {
  fill: #ffffff;
}