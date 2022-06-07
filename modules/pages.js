const form = document.querySelector('form');
const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const contactSection = document.getElementById('contact-section');
const contact = document.getElementById('contact');

const booksContainerParent = document.querySelector('.books-container-parent');

const link1 = list.addEventListener('click', (e) => {
  e.preventDefault();
  booksContainerParent.style.display = 'block';
  form.style.display = 'none';
  contactSection.style.display = 'none';
});

const link2 = addNew.addEventListener('click', (e) => {
  e.preventDefault();
  form.style.display = 'flex';
  booksContainerParent.style.display = 'none';
  contactSection.style.display = 'none';
});

const link3 = contact.addEventListener('click', (e) => {
  e.preventDefault();
  contactSection.style.display = 'block';
  booksContainerParent.style.display = 'none';
  form.style.display = 'none';
});

export { link1, link2, link3 };