function contactPage() {
  const pageContent = document.createElement('div');
  pageContent.id = 'contact-page'
  const title = document.createElement('h2');
  title.textContent = 'Contact Us';

  const subcontent = document.createElement('div');
  const subtitle = document.createElement('h4');
  const detail = document.createElement('p');
  const linebreak = document.createElement('hr');

  const drinkLab = document.createElement('h4');
  const slogan = document.createElement('p')

  drinkLab.textContent = 'Drink Lab';
  slogan.textContent = 'Specialty Coffee & Tea';

  subtitle.textContent = 'Contact'
  detail.textContent = "We will try our best to provide you the industry’s best customer experience with our team. Contact us today to see how we can be the best partner to satified your coffee/tea needs.";

  subcontent.append(subtitle);
  subcontent.append(detail);
  subcontent.append(linebreak);
  subcontent.append(drinkLab);
  subcontent.append(slogan);
  subcontent.append(createInfo('Phone:', ' +855 (95) 262 526'));
  subcontent.append(createInfo('Email:', ' sales@drinklabkh.store'));
  subcontent.append(createInfo('Store:', ' No.33A, Street. 229, Sangkat Phsar Depo 1, Khan Toul Kork,  Phnom Penh'));
  const openHour = document.createElement('p');
  openHour.innerHTML = `
    <span>Shop Opening Hours:</span>
    <ul>
      <li>Monday - Friday: 7:30am - 5:30pm</li>
      <li>Saturday - Sunday: 8:00 - 4:00pm</li>
    </ul>
  `
  subcontent.append(openHour);
  pageContent.append(subcontent);
  return pageContent
}

function createInfo(key, value) {
  const p = document.createElement('p');
  const spanKey = document.createElement('span');
  const spanValue = document.createElement('span');

  spanKey.classList.add('keys');
  spanValue.classList.add('value');

  spanKey.textContent = key;
  spanValue.textContent = value;

  p.appendChild(spanKey);
  p.appendChild(spanValue);
  return p
}

function setBtnActive(id){
  const btnActive = document.querySelector('.active');
  if (btnActive) btnActive.classList.remove('active');

  const contactBtn = document.getElementById(id)
  contactBtn.classList.add('active')
}

function loadContact() {
  const content = document.getElementById('content');
  content.textContent = '';

  setBtnActive('contact');
  content.appendChild(contactPage());
}

export default loadContact;