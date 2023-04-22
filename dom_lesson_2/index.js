const imgData = [
  {id: 1, imgSrc: 'img/slide_1.jpg'},
  {id: 2, imgSrc: 'img/slide_2.jpg'},
  {id: 3, imgSrc: 'img/slide_3.jpg'},
  {id: 4, imgSrc: 'img/slide_4.jpg'},
  {id: 5, imgSrc: 'img/slide_5.jpg'},
  {id: 6, imgSrc: 'img/slide_6.jpg'},
  {id: 7, imgSrc: 'img/slide_7.jpg'},
];

function createSlider(array) {
  const slider = document.querySelector('.slider');

  const galleryContainer = document.createElement('div');
  galleryContainer.classList.add('slider__gallery');
  galleryContainer.setAttribute('id', 'gallery');

  const navContainer = document.createElement('div');
  navContainer.classList.add('slider__nav_container');

  const nextButtonElem = document.createElement('button');
  const prevButtonElem = document.createElement('button');
  nextButtonElem.innerHTML = '&#8658;';
  prevButtonElem.innerHTML = '&#8656;';
  nextButtonElem.classList.add('slider__button', 'slider__button--right');
  prevButtonElem.classList.add('slider__button', 'slider__button--left');

  const mainImg = document.createElement('img');
  mainImg.classList.add('main_img');
  mainImg.src = '';
  mainImg.alt = 'main_img';
  
  navContainer.appendChild(prevButtonElem);
  navContainer.appendChild(mainImg);
  navContainer.appendChild(nextButtonElem);

  slider.appendChild(navContainer);
  slider.appendChild(galleryContainer);

  const slidesGallery = document.getElementById('gallery');
  const nextButton = document.querySelector('.slider__button--right');
  const prevButton = document.querySelector('.slider__button--left');

  const currentSlide = {
    stepForward: 0,
    stepBack : 0,
    visibleSlides: 4,
  };

  if (window.matchMedia("(max-width: 768px)").matches) {
    currentSlide.visibleSlides = 3;
  } 

  if (window.matchMedia("(max-width: 468px)").matches) {
    currentSlide.visibleSlides = 2;
  } 

  console.log(window.matchMedia("(max-width: 768px)").matches)

  const createSlideNav = (array) =>  {
    const stepForward = currentSlide.stepForward;
    const stepBack = currentSlide.stepBack;
    const toShowFromStart = currentSlide.visibleSlides - (array.length - stepForward);
    const toShowFromEnd = (array.length - stepBack) - currentSlide.visibleSlides;

    if (currentSlide.stepBack > 0 && currentSlide.stepBack <= currentSlide.visibleSlides) {
      return [...array.slice(array.length - stepBack, array.length), ...array.slice(0, toShowFromEnd + 1)];
    }

    if (array.length - stepForward >= currentSlide.visibleSlides) {
      return array.slice(stepForward, stepForward + currentSlide.visibleSlides);
    }

    return [...array.slice(stepForward, stepForward + currentSlide.visibleSlides), ...array.slice(0, toShowFromStart)];
  };

  const updateSliderImages = (array) => {
    const visibleSlidesArr = createSlideNav(array);
     
    const slidesGallery = document.getElementById('gallery');
    const mainSlide = document.querySelector('.main_img');
    const images = slidesGallery.querySelectorAll('img');

    mainSlide.src = visibleSlidesArr[0].imgSrc;
    for (let i = 0; i < visibleSlidesArr.length; i++) {
      const img = document.createElement('img');
    
      img.src = visibleSlidesArr[i].imgSrc;
      img.classList.add('gallery__img');
      slidesGallery.appendChild(img);

      if (i === 0) img.classList.add('gallery__img--active');
    }
    images.forEach(img => {
      img.remove();
    });

    return;
  }

  nextButton.addEventListener('click', e =>{
    currentSlide.stepForward += 1;
    currentSlide.stepBack -= 1;

    if (currentSlide.stepForward === array.length) {
      currentSlide.stepForward = 0;
      currentSlide.stepBack = 0;
    }
   
    updateSliderImages(array);
  });

  prevButton.addEventListener('click', e =>{
    currentSlide.stepBack += 1;
    currentSlide.stepForward -= 1;

    if (currentSlide.stepBack === array.length) {
      currentSlide.stepBack = 0;
      currentSlide.stepForward = 0;
    }
  
    updateSliderImages(array);
  });

  slidesGallery.addEventListener('click', e => {
    const slides = Array.from(slidesGallery.children);
    const targetImg = e.target;
    const targetIndex = slides.findIndex(slide => slide === targetImg);
    currentSlide.stepForward += targetIndex;

    if (currentSlide.stepForward >= array.length) currentSlide.stepForward = currentSlide.stepForward - array.length

    updateSliderImages(array);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
      currentSlide.stepForward += 1;
      currentSlide.stepBack -= 1;
  
      if (currentSlide.stepForward === array.length) {
        currentSlide.stepForward = 0;
        currentSlide.stepBack = 0;
      }
  
      updateSliderImages(array);
    }
  
    if (e.key === 'ArrowLeft') {
      currentSlide.stepBack += 1;
      currentSlide.stepForward -= 1;
  
      if (currentSlide.stepBack === array.length) {
        currentSlide.stepBack = 0;
        currentSlide.stepForward = 0;
      }
    
      updateSliderImages(array)
    }
  });

  updateSliderImages(array);

  return;
}

createSlider(imgData);