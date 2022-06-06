import Books from './constructor.js';

/* eslint-disable */
import { link1, link2, link3 } from './pages.js';
import { DateTime } from './luxon.js';

const booksContainer = document.querySelector('.books-container');
const form = document.querySelector('form');

const book = new Books();
book.showBooks();

  
// Add book and update UI as well as localStorage

form.addEventListener('submit', (e) => {
  e.preventDefault();
  book.updateBooks();
  form.reset();
  console.log(book);
});

// Remove that Book

booksContainer.addEventListener('click', (e) => {
  book.removeBook(e);
});

const time = () => {
  const timeDisplay = document.getElementById('time');
  timeDisplay.textContent = DateTime.now().toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });
};
setInterval(time, 1000);
