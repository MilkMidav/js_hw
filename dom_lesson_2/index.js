const img = [
  {id: 1, imgSrc: 'img/slide_1.jpg'},
  {id: 2, imgSrc: 'img/slide_2.jpg'},
  {id: 3, imgSrc: 'img/slide_3.jpg'},
  {id: 4, imgSrc: 'img/slide_4.jpg'},
  {id: 5, imgSrc: 'img/slide_5.jpg'},
  {id: 6, imgSrc: 'img/slide_6.jpg'},
  {id: 7, imgSrc: 'img/slide_7.jpg'},
];

function createImgNav(array) {
  const parentNode = document.getElementById('navigation');

  for(const item of array) {
    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.classList.add('nav__img');

    parentNode.appendChild(img);
  }

  return parentNode;
}

function hideShowButton(slides, prevButton, nextButton, targetIndex) {
  if (targetIndex === 0) {
    prevButton.classList.add('hidden');
    nextButton.classList.remove('hidden');
  }

  if (targetIndex === slides.length - 1) {
    nextButton.classList.add('hidden');
    prevButton.classList.remove('hidden');
  }

  if (targetIndex > 0 && targetIndex < slides.length - 1) {
    prevButton.classList.remove('hidden');
    nextButton.classList.remove('hidden');
  }

  return;
}

const mainSlide = document.querySelector('.main_img');
mainSlide.src = img[0].imgSrc;

const moveToSlide = (currentSlide, targetSlide) => {
  currentSlide.classList.remove('current_slide');
  targetSlide.classList.add('current_slide');
  mainSlide.src = targetSlide.src;

  return;
}

createImgNav(img);

const container = document.getElementById('navigation');
const firstChild = container.querySelector(':first-child');
firstChild.classList.add('current_slide');

const slides = Array.from(container.children);

const nextButton = document.querySelector('.slider__button--right');
const prevButton = document.querySelector('.slider__button--left');

nextButton.addEventListener('click', e =>{
  const currentSlide = container.querySelector('.current_slide');
  const targetSlide = currentSlide.nextElementSibling;
  const targetIndex = slides.findIndex(slide => slide === targetSlide);

  moveToSlide(currentSlide, targetSlide);
  hideShowButton(slides, prevButton, nextButton, targetIndex);
});

prevButton.addEventListener('click', e =>{
  const currentSlide = container.querySelector('.current_slide');
  const targetSlide = currentSlide.previousElementSibling;
  const targetIndex = slides.findIndex(slide => slide === targetSlide);

  moveToSlide(currentSlide, targetSlide);
  hideShowButton(slides, prevButton, nextButton, targetIndex);
});

container.addEventListener('click', e => {
  const currentSlide = container.querySelector('.current_slide');
  const targetImg = e.target;
  const targetIndex = slides.findIndex(slide => slide === targetImg);
  const targetSlide = slides[targetIndex];

  moveToSlide(currentSlide, targetSlide);
  hideShowButton(slides, prevButton, nextButton, targetIndex);
});

document.addEventListener('keydown', e => {
  const currentSlide = container.querySelector('.current_slide');

  if (e.key === 'ArrowRight') {
    const targetSlide = currentSlide.nextElementSibling;
    const targetIndex = slides.findIndex(slide => slide === targetSlide);
    
    if (!targetSlide) {
      targetSlide = slides[0];
      targetIndex = 0;
    }
    moveToSlide(currentSlide, targetSlide);
    hideShowButton(slides, prevButton, nextButton, targetIndex);   
  }

  if (e.key === 'ArrowLeft') {
    const targetSlide = currentSlide.previousElementSibling;
    const targetIndex = slides.findIndex(slide => slide === targetSlide);

    if (!targetSlide) {
      targetSlide = slides[slides.length - 1];
      targetIndex = slides.length - 1;
    }
    moveToSlide(currentSlide, targetSlide);
    hideShowButton(slides, prevButton, nextButton, targetIndex);    
  }
});