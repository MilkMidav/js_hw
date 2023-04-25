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
  const slider = document.getElementById(id);

  const galleryContainer = document.createElement('div');
  galleryContainer.classList.add('slider__gallery');

  const nav = document.createElement('div');
  nav.classList.add('slider__nav_container');

  const nextButton = document.createElement('button');
  const prevButton = document.createElement('button');

  nextButton.textContent = '⇒';
  prevButton.textContent = '⇐';
  nextButton.classList.add('slider__button', 'slider__button--right');
  prevButton.classList.add('slider__button', 'slider__button--left');

  const mainImg = document.createElement('img');
  mainImg.classList.add('slider__hero');
  mainImg.alt = 'slider__hero';
  
  nav.appendChild(prevButton);
  nav.appendChild(mainImg);
  nav.appendChild(nextButton);

  slider.appendChild(nav);
  slider.appendChild(galleryContainer);

  const currentSlide = {
    selectedSlide: 0,
    visibleSlides: 4,
  };

  if (window.matchMedia("(max-width: 768px)").matches) currentSlide.visibleSlides = 3;
   
  if (window.matchMedia("(max-width: 468px)").matches) currentSlide.visibleSlides = 2;

  const move = (direction) => {
    if (direction === 'next') {
      currentSlide.selectedSlide += 1;

      if (currentSlide.selectedSlide === array.length) currentSlide.selectedSlide = 0;
    }

    if (direction === 'prev') {
      currentSlide.selectedSlide -= 1;

      if (currentSlide.selectedSlide < 0) {
        currentSlide.selectedSlide = array.length - 1;
      }
    }

    return;
  }
  
  const createSlidesArray = (array) =>  {
    const { selectedSlide } = currentSlide;
    const toShowFromStart = currentSlide.visibleSlides - (array.length - selectedSlide);

    if (array.length - selectedSlide >= currentSlide.visibleSlides) {
      return array.slice(selectedSlide, selectedSlide + currentSlide.visibleSlides);
    }

    return [...array.slice(selectedSlide, array.length), ...array.slice(0, toShowFromStart)];
  };

  const updateSliderImages = (array) => {
    const updatedSlides = createSlidesArray(array);
    const slideArr = [];
  
    mainImg.src = updatedSlides[0].src;

    updatedSlides.forEach((slide, index) => {
      const img = document.createElement('img');
    
      img.src = slide.src;
      img.classList.add('gallery__img');

      if (index === 0) img.classList.add('gallery__img--active');
      
      slideArr.push(img)
    });
    galleryContainer.replaceChildren(...slideArr);

    return;
  }

  nextButton.addEventListener('click', () =>{
    move('next');
    updateSliderImages(array);
  });
  
  
  prevButton.addEventListener('click', () =>{
    move('prev');
    updateSliderImages(array);
  });

  galleryContainer.addEventListener('click', e => {
    const slides = Array.from(galleryContainer.children);
    const targetImg = e.target;
    const targetIndex = slides.findIndex(slide => slide === targetImg);
    currentSlide.selectedSlide += targetIndex;
  
    if (currentSlide.selectedSlide >= array.length) {
      currentSlide.selectedSlide = currentSlide.selectedSlide - array.length
    }
    updateSliderImages(array);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
      move('next');
      updateSliderImages(array);
    }
  
    if (e.key === 'ArrowLeft') {
      move('prev');
      updateSliderImages(array)
    }
  });

  updateSliderImages(array);

  return;
}

createSlider('slider', imgData);
