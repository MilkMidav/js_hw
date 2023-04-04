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
  //assign the parentNode div variable for its id
  const parentNode = document.getElementById('item_list');

  //use forEach to create product cards
  array.forEach(item => {
    //card variable that will store 'div' with product information and that we will add to the DOM tree
    const card = document.createElement('div');
    card.classList.add('flex', 'pt-3',);
    
    //info - a variable in which the information in the 'div' will be stored separately from the product images
    const info = document.createElement('div');
    info.classList.add('pl-3', 'w-full');

    //The itemImg variable will create the 'img' tag with the path to the product image 
    const itemImg = document.createElement('img');
    itemImg.src = item.imgSrc;
    itemImg.classList.add('w-24', 'cursor-pointer');

    //Create a 'p' tag with information about the brand of the product
    const brand  = document.createElement('p');
    brand.textContent = item.brand.toUpperCase();
    brand.classList.add('tracking-widest', 'text-sm', 'leading-5');

    //Create a 'p' tag with information about the title of the product
    const title = document.createElement('p');
    title.textContent = item.title;
    title.classList.add('text-neutral-600', 'text-sm', 'leading-6');

    //Create a 'p' tag with information about the price of the product
    const price = document.createElement('p');
    price.textContent = '$' + item.price;
    price.classList.add('text-[#DD8560]', 'text-[15px]');

    //create a 'div' that will store customer ratings
    const divRating = document.createElement('div');
    divRating.classList.add('flex', 'items-center', 'pt-2')

    //In itemImg variable will create the 'img' tag with the path to the star image 
    const starImg = document.createElement('img');
    starImg.src = 'img/card_img/star.png';

    //Create a 'p' tag with information about the rating of the product
    const rating = document.createElement('p');
    rating.textContent = item.rating + ' Ratings';
    rating.classList.add('text-neutral-600', 'text-xs', 'pt-[1px]', 'pl-[3px]');

    //In bottomInfo variable will create the 'div' which will contain information about the size of the product
    const bottomInfo = document.createElement('div');
    bottomInfo.classList.add('flex', 'items-center', 'justify-between');

     //In likeImg variable will create the 'img' tag with the path to the like image 
    const likeImg = document.createElement('img');
    likeImg.src = 'img/card_img/like.png';
    likeImg.classList.add('cursor-pointer');

    //In sizeChoicer variable will create the 'div' which will have size selection buttons
    const sizeChoicer = document.createElement('div');
    sizeChoicer.classList.add('flex', 'items-center', 'pt-2');
    
    //Create a 'p' tag with SIZE text
    const sizeText = document.createElement('p');
    sizeText.textContent = 'Size';
    sizeText.classList.add('text-neutral-600', 'pr-1.5', 'text-xs');

    //Create three buttons 'L', 'S', 'M' with the corresponding styles
    const sizeS = document.createElement('div').appendChild(document.createElement('p'));
    sizeS.textContent = 'S';
    sizeS.classList.add('cursor-pointer', 'text-neutral-600', 'mr-1.5', 'text-[10px]', 'border', 'rounded-full', 'border-neutral-300', 'px-[9px]', 'py-1', 'text-center');

    const sizeM = document.createElement('div').appendChild(document.createElement('p'));
    sizeM.textContent = 'M';
    sizeM.classList.add('cursor-pointer', 'text-neutral-600', 'mr-1.5', 'text-[10px]', 'border', 'rounded-full', 'border-neutral-300', 'px-[7px]', 'py-1', 'text-center');

    const sizeL = document.createElement('div').appendChild(document.createElement('p'));
    sizeL.textContent = 'L';
    sizeL.classList.add('cursor-pointer', 'text-neutral-600', 'text-[10px]', 'border', 'rounded-full', 'border-neutral-300', 'px-[9px]', 'py-1', 'text-center');

    //add all blocks related to the size to the parent block sizeChoicer
    sizeChoicer.appendChild(sizeText);
    sizeChoicer.appendChild(sizeS);
    sizeChoicer.appendChild(sizeM);
    sizeChoicer.appendChild(sizeL);

    //add sizeChoicer and likeImg to the bottomInfo
    bottomInfo.appendChild(sizeChoicer);
    bottomInfo.appendChild(likeImg);

    //add rating and starImg to the divRating
    divRating.appendChild(starImg);
    divRating.appendChild(rating);

    //add all text information to the parent 'info' element
    info.appendChild(brand);
    info.appendChild(title);
    info.appendChild(price);
    info.appendChild(divRating);
    info.appendChild(bottomInfo);
    
    //create a full-fledged product card
    card.appendChild(itemImg);
    card.appendChild(info);

    //At each iteration we add a product card to the DOM tree
    parentNode.appendChild(card);
  });

  return parentNode;
}

createList(items);
