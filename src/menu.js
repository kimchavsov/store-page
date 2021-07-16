
function createMenu(img, name, price, alt) {
  const item = document.createElement('div')
  item.classList.add = 'items'

  const itemImg = document.createElement('img');
  itemImg.classList.add('item-img')
  itemImg.src = img;
  itemImg.alt = alt;

  const itemName = document.createElement('h4');
  itemName.textContent = name;
  
  const itemPrice = document.createElement('h3');
  itemPrice.textContent = price;
  
  item.appendChild(itemImg);
  item.appendChild(itemName);
  item.appendChild(itemPrice);
  return item  
}
function setBtnActive(id){
  const btnActive = document.querySelector('.active');
  if (btnActive) btnActive.classList.remove('active');

  const menuBtn = document.getElementById(id)
  menuBtn.classList.add('active')
}

function loadMenu() {
  const content = document.getElementById('content');
  content.textContent = '';

  setBtnActive('product')
  const items = [
    createMenu(
      'https://cdn.shopify.com/s/files/1/0293/1231/9626/products/Image_from_iOS-5_600x.jpg?v=1582480271',
      'Brazil - Pedra Branca',
      '$6.48',
      'coffee package'
    ), 
    createMenu(
      'https://cdn.shopify.com/s/files/1/0293/1231/9626/products/Image_from_iOS-6_400x.jpg?v=1582480280',
      'Columbia : Cauca - Piendamo',
      '$6.48',
      'coffee package'
    ),
    createMenu(
      'https://cdn.shopify.com/s/files/1/0293/1231/9626/products/21FE652A-EAF8-41BA-82CD-9E18149F1EA3_400x.jpg?v=1582480283',
      'Ethiopia - Organic Limu',
      '$7.98',
      'coffee package'
    ),
    createMenu(
      'https://cdn.shopify.com/s/files/1/0293/1231/9626/products/Image_from_iOS-4_400x.jpg?v=1582480287',
      'Guatemala - El Templo',
      '$8.98',
      'coffee package'
    ),
    createMenu(
      'https://cdn.shopify.com/s/files/1/0293/1231/9626/products/Image_from_iOS-7_400x.jpg?v=1582480290',
      'Kenya : Gichatha-ini -Gikanda F.C.S. - Nyrei - AA',
      '$9.98',
      'coffee package'
    ),
    createMenu(
      'https://cdn.shopify.com/s/files/1/0293/1231/9626/products/21FE652A-EAF8-41BA-82CD-9E18149F1EA3_b914fdbf-b145-4759-813b-ad98c0f7cf03_400x.jpg?v=1582480292',
      'Organic Limu - 630g',
      '$17.99',
      'coffee package'
    ),
    createMenu(
      'https://cdn.shopify.com/s/files/1/0293/1231/9626/products/Image_from_iOS-3_400x.jpg?v=1582480294',
      'PEEBIES DECAF',
      '$8.98',
      'coffee package'
    ),
    createMenu(
      'https://cdn.shopify.com/s/files/1/0293/1231/9626/products/IMG_1182_400x.png?v=1616740125',
      'Zheng Shan Xiao Zhong (正山小种红茶)',
      '$6.99',
      'coffee package'
    ),
    createMenu(
      'https://cdn.shopify.com/s/files/1/0293/1231/9626/products/Image_from_iOS-8_400x.jpg?v=1582480292',
      'Organic Matcha Powder',
      '$6.99',
      'coffee package'
    ),
    createMenu(
      'https://cdn.shopify.com/s/files/1/0293/1231/9626/products/IMG_1188_400x.png?v=1616739487',
      'Jin Jun Mei(金骏眉红茶)',
      '$7.49',
      'coffee package'
    ),
    createMenu(
      'https://cdn.shopify.com/s/files/1/0293/1231/9626/products/IMG_1179_400x.jpg?v=1616734358',
      'Da Hong Pao (大红袍)',
      '$6.99',
      'coffee package'
    )
  ]

  items.forEach((item) => {
    content.appendChild(item);
  })
}

export default loadMenu;