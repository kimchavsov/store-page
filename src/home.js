function createHomepage() {
  const homePage = document.createElement('div');
  homePage.id = 'home-page-des';
  const heading = document.createElement('h2');
  const subhead = document.createElement('h4');
  const para = document.createElement('p');

  heading.textContent = 'Welcome to Drink Lab';
  subhead.textContent = 'Explore the mavelous world of coffee';
  para.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus dolor alias, velit id dolorem doloribus aliquid autem aspernatur, iure earum, dignissimos sed eum omnis ducimus magnam officia non. A, voluptate.';

  homePage.appendChild(heading);
  homePage.appendChild(subhead);
  homePage.appendChild(para);

  return homePage
}

function setBtnActive(id) {
  const btnActive = document.querySelector('.active');
  if (btnActive) btnActive.classList.remove('active');

  const homeBtn = document.getElementById(id)
  homeBtn.classList.add('active')
}

function loadHomepage() {
  const content = document.getElementById('content');
  content.textContent = '';

  setBtnActive('home');
  content.appendChild(createHomepage());
}

export default loadHomepage;