const img = [
  {id: 1, imgSrc: 'img/slide_1.jpg'},
  {id: 2, imgSrc: 'img/slide_2.jpg'},
  {id: 3, imgSrc: 'img/slide_3.jpg'},
  {id: 4, imgSrc: 'img/slide_4.jpg'},
  {id: 5, imgSrc: 'img/slide_5.jpg'},
  {id: 6, imgSrc: 'img/slide_6.jpg'},
  {id: 7, imgSrc: 'img/slide_7.jpg'},
];

function createSlider(array) {
  const currentSlide = {
    stepForward: 0,
    stepBack : 0,
    visibleSlides: 4,
  };

  const createSlideNav = (array) =>  {
    const stepForward = currentSlide.stepForward
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
    const parentNode = document.getElementById('navigation');
    const mainSlide = document.querySelector('.main_img');
    const images = parentNode.querySelectorAll('img');

    mainSlide.src = array[0].imgSrc;
    for (let i = 0; i < array.length; i++) {
      const img = document.createElement('img');
    
      img.src = array[i].imgSrc;
      img.classList.add('nav__img');
      parentNode.appendChild(img);

      if (i === 0) {
        img.classList.add('nav__img--active');
      }
    }
    images.forEach(img => {
      img.remove();
    });

    return;
  }

  const parentNode = document.getElementById('navigation');
  const nextButton = document.querySelector('.slider__button--right');
  const prevButton = document.querySelector('.slider__button--left');
  
  
  updateSliderImages(createSlideNav(array))

  nextButton.addEventListener('click', e =>{
    currentSlide.stepForward += 1;
    currentSlide.stepBack -= 1;

    if (currentSlide.stepForward === array.length) {
      currentSlide.stepForward = 0;
      currentSlide.stepBack = 0;
    }

    updateSliderImages(createSlideNav(array));
  });

  prevButton.addEventListener('click', e =>{
    currentSlide.stepBack += 1;
    currentSlide.stepForward -= 1;

    if (currentSlide.stepBack === array.length) {
      currentSlide.stepBack = 0;
      currentSlide.stepForward = 0;
    }
  
    updateSliderImages(createSlideNav(array));
  });

  parentNode.addEventListener('click', e => {
    const slides = Array.from(parentNode.children);
    const targetImg = e.target;
    const targetIndex = slides.findIndex(slide => slide === targetImg);
    currentSlide.stepForward += targetIndex;

    if (currentSlide.stepForward >= array.length) currentSlide.stepForward = currentSlide.stepForward - array.length

    updateSliderImages(createSlideNav(array))
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
      currentSlide.stepForward += 1;
      currentSlide.stepBack -= 1;
  
      if (currentSlide.stepForward === array.length) {
        currentSlide.stepForward = 0;
        currentSlide.stepBack = 0;
      }
  
      updateSliderImages(createSlideNav(array));
    }
  
    if (e.key === 'ArrowLeft') {
      currentSlide.stepBack += 1;
      currentSlide.stepForward -= 1;
  
      if (currentSlide.stepBack === array.length) {
        currentSlide.stepBack = 0;
        currentSlide.stepForward = 0;
      }
    
      updateSliderImages(createSlideNav(array))
    }
  });
  
  return;
}

createSlider(img);