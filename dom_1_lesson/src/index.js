const items = [
  { id: 1, brand: 'LamereI', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 120, imgSrc: 'img/card_img/product_img_1.png' },
  { id: 2, brand: 'LamereI', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 121, imgSrc: 'img/card_img/product_img_2.png' },
  { id: 3, brand: 'LamereI', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 122, imgSrc: 'img/card_img/product_img_3.png' },
  { id: 4, brand: 'LamereI', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 123, imgSrc: 'img/card_img/product_img_4.png' },
  { id: 5, brand: 'LamereI', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 124, imgSrc: 'img/card_img/product_img_5.png' },
  { id: 6, brand: 'LamereI', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 125, imgSrc: 'img/card_img/product_img_1.png' },
  { id: 7, brand: 'LamereI', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 126, imgSrc: 'img/card_img/product_img_2.png' },
  { id: 8, brand: 'LamereI', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 127, imgSrc: 'img/card_img/product_img_3.png' },
  { id: 9, brand: 'LamereI', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 128, imgSrc: 'img/card_img/product_img_4.png' },
  { id: 10, brand: 'LamereI', title: 'Recycle Boucle Knit Cardigan Pink', rating: 4.5, price: 129, imgSrc: 'img/card_img/product_img_5.png' },
];


function createList(array) {
  const parentNode = document.getElementById('item_list');

  for (const item of array) {
    const container = document.createElement('div');
    container.classList.add('flex', 'pt-3',);
    
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('pl-3', 'w-full');

    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.classList.add('w-24', 'cursor-pointer');

    const brand  = document.createElement('p');
    brand.textContent = item.brand.toUpperCase();
    brand.classList.add('tracking-widest', 'text-sm', 'leading-5');

    const title = document.createElement('p');
    title.textContent = item.title;
    title.classList.add('text-neutral-600', 'text-sm', 'leading-6');

    const price = document.createElement('p');
    price.textContent = '$' + item.price;
    price.classList.add('text-[#DD8560]', 'text-[15px]');

    const ratingContainer = document.createElement('div');
    ratingContainer.classList.add('flex', 'items-center', 'pt-2')

    const starImg = document.createElement('img');
    starImg.src = 'img/card_img/star.png';

    const rating = document.createElement('p');
    rating.textContent = item.rating + ' Ratings';
    rating.classList.add('text-neutral-600', 'text-xs', 'pt-[1px]', 'pl-[3px]');

    const bottomInfo = document.createElement('div');
    bottomInfo.classList.add('flex', 'items-center', 'justify-between');

    const likeImg = document.createElement('img');
    likeImg.src = 'img/card_img/like.png';
    likeImg.classList.add('cursor-pointer');

    const sizeSelector = document.createElement('div');
    sizeSelector.classList.add('flex', 'items-center', 'pt-2');
 
    const sizeText = document.createElement('p');
    sizeText.textContent = 'Size';
    sizeText.classList.add('text-neutral-600', 'pr-1.5', 'text-xs');

    const sizeS = document.createElement('p');
    sizeS.textContent = 'S';
    sizeS.classList.add('cursor-pointer', 'text-neutral-600', 'mr-1.5', 'text-[10px]', 'border', 'rounded-full', 'border-neutral-300', 'px-[9px]', 'py-1', 'text-center');

    const sizeM = document.createElement('p');
    sizeM.textContent = 'M';
    sizeM.classList.add('cursor-pointer', 'text-neutral-600', 'mr-1.5', 'text-[10px]', 'border', 'rounded-full', 'border-neutral-300', 'px-[7px]', 'py-1', 'text-center');

    const sizeL = document.createElement('p');
    sizeL.textContent = 'L';
    sizeL.classList.add('cursor-pointer', 'text-neutral-600', 'text-[10px]', 'border', 'rounded-full', 'border-neutral-300', 'px-[9px]', 'py-1', 'text-center');

    sizeSelector.appendChild(sizeText);
    sizeSelector.appendChild(sizeS);
    sizeSelector.appendChild(sizeM);
    sizeSelector.appendChild(sizeL);

    bottomInfo.appendChild(sizeSelector);
    bottomInfo.appendChild(likeImg);

    ratingContainer.appendChild(starImg);
    ratingContainer.appendChild(rating);

    infoContainer.appendChild(brand);
    infoContainer.appendChild(title);
    infoContainer.appendChild(price);
    infoContainer.appendChild(ratingContainer);
    infoContainer.appendChild(bottomInfo);
    
    container.appendChild(img);
    container.appendChild(infoContainer);

    parentNode.appendChild(container);
  }

  return parentNode;
}

createList(items);
