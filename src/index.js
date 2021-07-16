import initializeWebsite from './initial-page';
import loadContact from './contact';
import loadMenu from './menu';
import loadHomepage from './home';

init()
function addNavEvent() {
  const homeBtn = document.getElementById('home');
  const productBtn = document.getElementById('product');
  const contactBtn = document.getElementById('contact');

  homeBtn.addEventListener('click', loadHomepage);
  productBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);
}
function init() {
  initializeWebsite();
  loadHomepage();
  addNavEvent();
}