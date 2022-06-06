import Books from './constructor.js'
import { link1, link2 , link3 } from './pages.js';

const booksContainer = document.querySelector('.books-container');
const form = document.querySelector('form');
// const list = document.getElementById('list');
// const addNew = document.getElementById('add-new');
// const contactSection = document.getElementById('contact-section');
// const contact = document.getElementById('contact');


const book = new Books();
book.showBooks();

// Add book and update UI as well as localStorage

form.addEventListener('submit', (e) => {
  e.preventDefault();
  book.updateBooks();
  form.reset();
  console.log(book)
});

// Remove that Book

booksContainer.addEventListener('click', (e) => {
  book.removeBook(e);
});


function refreshTime() {
  const timeDisplay = document.getElementById('time');
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(', ', ' - ');
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);

