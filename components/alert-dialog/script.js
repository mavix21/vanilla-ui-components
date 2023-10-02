const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelectorAll('.close-button');

openModal.addEventListener('click', () => {
  modal.showModal();
});

closeModal.forEach(button => {
  button.addEventListener('click', () => {
    modal.close();
  });
});
