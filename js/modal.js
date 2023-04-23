(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelectorAll('[data-modal]'),
  };

  refs.openModalBtn.forEach(button => {
    button.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.forEach(button => {
    button.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.modal.forEach(modal => {
      modal.classList.toggle('backdrop--hidden');
    });
  }
})();
