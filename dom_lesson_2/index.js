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

  const slidesGallery = document.querySelectorAll('.slider__gallery');
  const nextButton = document.querySelectorAll('.slider__button--right');
  const prevButton = document.querySelectorAll('.slider__button--left');

  const currentSlide = {
    selectedSlide: 0,
    visibleSlides: 4,
  };

  if (window.matchMedia("(max-width: 768px)").matches) currentSlide.visibleSlides = 3;
   
  if (window.matchMedia("(max-width: 468px)").matches) currentSlide.visibleSlides = 2;
  
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
    const slidesGallery = document.querySelectorAll('.slider__gallery');
    const mainSlide = document.querySelectorAll('.slider__hero');
    
    mainSlide.forEach((slide) => {
      slide.src = updatedSlides[0].src;
    });

    slidesGallery.forEach(gallery => {
      gallery.replaceChildren();

      updatedSlides.forEach((slide, index) => {
        const img = document.createElement('img');
    
        img.src = slide.src;
        img.classList.add('gallery__img');

        if (index === 0) img.classList.add('gallery__img--active');
      
        gallery.appendChild(img);
      });
    });

    return;
  }

  nextButton.forEach(button => {
    button.addEventListener('click', () =>{
      currentSlide.selectedSlide += 1;
  
      if (currentSlide.selectedSlide === array.length) currentSlide.selectedSlide = 0;
     
      updateSliderImages(array);
    });
  })
  
  prevButton.forEach(button => {
    button.addEventListener('click', () =>{
      currentSlide.selectedSlide -= 1;
  
      if (currentSlide.selectedSlide < 0) currentSlide.selectedSlide = array.length - 1;
    
      updateSliderImages(array);
    });
  })

  slidesGallery.forEach(gallery => {
    gallery.addEventListener('click', e => {
      const slides = Array.from(gallery.children);
      const targetImg = e.target;
      const targetIndex = slides.findIndex(slide => slide === targetImg);
      currentSlide.selectedSlide += targetIndex;
  
      if (currentSlide.selectedSlide >= array.length) currentSlide.selectedSlide = currentSlide.selectedSlide - array.length
  
      updateSliderImages(array);
    });
  })

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
      currentSlide.selectedSlide += 1;
  
      if (currentSlide.selectedSlide === array.length) currentSlide.selectedSlide = 0;
  
      updateSliderImages(array);
    }
  
    if (e.key === 'ArrowLeft') {
      currentSlide.selectedSlide -= 1;
  
      if (currentSlide.selectedSlide < 0) currentSlide.selectedSlide = array.length - 1;
      
      updateSliderImages(array)
    }
  });

  updateSliderImages(array);

  return;
}

createSlider('slider', imgData);
