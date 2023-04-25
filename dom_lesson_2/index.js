const imgData = [
  { id: 1, src: 'img/slide_1.jpg' },
  { id: 2, src: 'img/slide_2.jpg' },
  { id: 3, src: 'img/slide_3.jpg' },
  { id: 4, src: 'img/slide_4.jpg' },
  { id: 5, src: 'img/slide_5.jpg' },
  { id: 6, src: 'img/slide_6.jpg' },
  { id: 7, src: 'img/slide_7.jpg' },
];

function createSlider(id, array) {
  const slider = document.getElementById(`${id}`);

  const galleryContainer = document.createElement('div');
  galleryContainer.classList.add('slider__gallery');

  const nav = document.createElement('div');
  nav.classList.add('slider__nav_container');

  const nextButtonElem = document.createElement('button');
  const prevButtonElem = document.createElement('button');
  nextButtonElem.textContent = '⇒';
  prevButtonElem.textContent = '⇐';
  nextButtonElem.classList.add('slider__button', 'slider__button--right');
  prevButtonElem.classList.add('slider__button', 'slider__button--left');

  const mainImg = document.createElement('img');
  mainImg.classList.add('slider__hero');
  mainImg.alt = 'slider__hero';
  
  nav.appendChild(prevButtonElem);
  nav.appendChild(mainImg);
  nav.appendChild(nextButtonElem);

  slider.appendChild(nav);
  slider.appendChild(galleryContainer);

  const slidesGallery = document.querySelector('.slider__gallery');
  const nextButton = document.querySelector('.slider__button--right');
  const prevButton = document.querySelector('.slider__button--left');

  const currentSlide = {
    stepForward: 0,
    stepBack : 0,
    visibleSlides: 4,
  };

  if (window.matchMedia("(max-width: 768px)").matches) currentSlide.visibleSlides = 3;
   
  if (window.matchMedia("(max-width: 468px)").matches) currentSlide.visibleSlides = 2;
  
  const createSlidesArray = (array) =>  {
    const { stepForward, stepBack } = currentSlide;
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
    const updatedSlides = createSlidesArray(array);
     
    const slidesGallery = document.querySelector('.slider__gallery');
    const mainSlide = document.querySelector('.slider__hero');
    const images = slidesGallery.querySelectorAll('img');

    mainSlide.src = updatedSlides[0].src;

    const img = document.createElement('img');

    img.src = updatedSlides[0].src;
    img.classList.add('gallery__img', 'gallery__img--active');
    slidesGallery.appendChild(img);

    for (const slide of updatedSlides.slice(1)) {
      const img = document.createElement('img');

      img.src = slide.src;
      img.classList.add('gallery__img');
      slidesGallery.appendChild(img);
    }

    images.forEach(img => {
      img.remove();
    });

    return;
  }

  nextButton.addEventListener('click', () =>{
    currentSlide.stepForward += 1;
    currentSlide.stepBack -= 1;

    if (currentSlide.stepForward === array.length) {
      currentSlide.stepForward = 0;
      currentSlide.stepBack = 0;
    }
   
    updateSliderImages(array);
  });

  prevButton.addEventListener('click', () =>{
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

createSlider('slider', imgData);