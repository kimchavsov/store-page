const content = document.querySelector('#content')

const createHomepage = function() {
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

  content.appendChild(homePage);
}

createHomepage();

