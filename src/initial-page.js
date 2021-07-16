function createBtn(id, text) {
  const btn = document.createElement('button');
  btn.setAttribute('id', id);
  const span = document.createElement('span');
  span.textContent = text;
  btn.appendChild(span);
  btn.classList.add('tab');
  return btn
}


function createNav() {
  const nav = document.createElement('nav');
  nav.setAttribute('id', 'navbar')
  
  const logo = document.createElement('div');
  logo.id = 'logo';
  logo.innerHTML = `
  <img src="./img/drinklabLogo.png"></div>
  `

  const tabs = document.createElement('div')
  tabs.classList.add('tab-group');

  const homeBtn = createBtn('home', 'Home');
  const productBtn = createBtn('product', 'Product');
  const contactBtn = createBtn('contact', 'Contact');
  
  tabs.appendChild(homeBtn);
  tabs.appendChild(productBtn);
  tabs.appendChild(contactBtn);

  nav.appendChild(logo);
  nav.appendChild(tabs)

  return nav
}

function createContent() {
  const content = document.createElement('div')
  content.id = 'content';
  return content
}

function createFooter() {
  const footer = document.createElement('footer');
  
  const copyright = document.createElement('p');
  copyright.textContent = 'Copyright © 2021 kimchavsov';

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/kimchavsov';

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('iconify')
  githubIcon.setAttribute('data-icon', 'logos-github-icon')
  githubIcon.setAttribute('data-inline', 'false')

  githubLink.appendChild(githubIcon);
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  return footer
}

function initializeWebsite() {
  const body = document.querySelector('body');
  
  body.appendChild(createNav());
  body.appendChild(createContent());
  body.appendChild(createFooter());
}

export default initializeWebsite;