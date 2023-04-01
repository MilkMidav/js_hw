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
  let parentNode = document.getElementById('item_list');

  array.forEach(item => {
    let card = document.createElement('div');
    card.classList.add('flex', 'pt-3', 'items-center')
    
    let info = document.createElement('div');
    info.classList.add('pl-3')

    let itemImg = document.createElement('img');
    itemImg.src = item.imgSrc;
    itemImg.classList.add('w-24')

    let brand  = document.createElement('p');
    brand.textContent = item.brand.toUpperCase();
    brand.classList.add('tracking-widest', 'text-sm', 'leading-5')

    let title = document.createElement('p');
    title.textContent = item.title;
    title.classList.add('text-neutral-600', 'text-sm', 'leading-6');

    let price = document.createElement('p');
    price.textContent = '$' + item.price;
    price.classList.add('text-[#DD8560]', 'text-[15px]');

    let divRating = document.createElement('div');
    divRating.classList.add('flex', 'items-center', 'pt-2')

    let starImg = document.createElement('img')
    starImg.src = 'img/card_img/star.png'

    let rating = document.createElement('p');
    rating.textContent = item.rating + ' Ratings';
    rating.classList.add('text-neutral-600', 'text-xs', 'pt-[1px]', 'pl-[3px]');

    let bottomInfo = document.createElement('div');
    bottomInfo.classList.add('flex', 'items-center', 'justify-between');

    let likeImg = document.createElement('img');
    likeImg.src = 'img/card_img/like.png';
    likeImg.classList.add('cursor-pointer')

    let sizeChoicer = document.createElement('div');
    sizeChoicer.classList.add('flex', 'items-center', 'pt-2');
    
    let sizeText = document.createElement('p');
    sizeText.textContent = 'Size';
    sizeText.classList.add('text-neutral-600', 'pr-1.5', 'text-xs');

    let sizeS = document.createElement('div').appendChild(document.createElement('p'));
    sizeS.textContent = 'S';
    sizeS.classList.add('cursor-pointer', 'text-neutral-600', 'mr-1.5', 'text-[10px]', 'border', 'rounded-full', 'border-neutral-300', 'px-[9px]', 'py-1', 'text-center');

    let sizeM = document.createElement('div').appendChild(document.createElement('p'));
    sizeM.textContent = 'M';
    sizeM.classList.add('cursor-pointer', 'text-neutral-600', 'mr-1.5', 'text-[10px]', 'border', 'rounded-full', 'border-neutral-300', 'px-[7px]', 'py-1', 'text-center');

    let sizeL = document.createElement('div').appendChild(document.createElement('p'));
    sizeL.textContent = 'L';
    sizeL.classList.add('cursor-pointer', 'text-neutral-600', 'text-[10px]', 'border', 'rounded-full', 'border-neutral-300', 'px-[9px]', 'py-1', 'text-center');

    sizeChoicer.appendChild(sizeText);
    sizeChoicer.appendChild(sizeS);
    sizeChoicer.appendChild(sizeM);
    sizeChoicer.appendChild(sizeL);


    bottomInfo.appendChild(sizeChoicer);
    bottomInfo.appendChild(likeImg);

    divRating.appendChild(starImg);
    divRating.appendChild(rating);

    info.appendChild(brand);
    info.appendChild(title);
    info.appendChild(price);
    info.appendChild(divRating);
    info.appendChild(bottomInfo);

    card.appendChild(itemImg);
    card.appendChild(info);

    parentNode.appendChild(card)
  });

  return parentNode;
}

createList(items);
