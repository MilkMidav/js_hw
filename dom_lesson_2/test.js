function createSlider(images) {
  const visibleSlides = 4;
  const slideNavigation = {
    startIndex: 0,
    endIndex: visibleSlides,
  };
  const parentNode = document.getElementById('navigation');
  const mainSlide = document.querySelector('.main_img');

  function updateSliderImages() {
    const navImages = parentNode.querySelectorAll('.nav__img');
    for (let i = 0; i < navImages.length; i++) {
      navImages[i].remove();
    }

    mainSlide.src = images[slideNavigation.startIndex].imgSrc;
    for (let i = slideNavigation.startIndex; i < slideNavigation.endIndex; i++) {
      const img = document.createElement('img');
      img.src = images[i].imgSrc;
      img.classList.add('nav__img');
      parentNode.appendChild(img);

      if (i === slideNavigation.startIndex) {
        img.classList.add('nav__img--active');
      }
    }
  }

  function updateSlideNavigation(step) {
    slideNavigation.startIndex = (slideNavigation.startIndex + step) % images.length;
    slideNavigation.endIndex = (slideNavigation.startIndex + visibleSlides) % images.length;
    if (slideNavigation.endIndex <= slideNavigation.startIndex) {
      slideNavigation.endIndex = images.length;
    }
    updateSliderImages();
  }

  function handleNextButtonClick() {
    updateSlideNavigation(visibleSlides);
  }

  function handlePrevButtonClick() {
    updateSlideNavigation(images.length - visibleSlides);
  }

  function handleImageClick(event) {
    const targetImg = event.target;
    const navImages = parentNode.querySelectorAll('.nav__img');
    for (let i = 0; i < navImages.length; i++) {
      if (navImages[i] === targetImg) {
        updateSlideNavigation(i - slideNavigation.startIndex);
        break;
      }
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'ArrowRight') {
      handleNextButtonClick();
    } else if (event.key === 'ArrowLeft') {
      handlePrevButtonClick();
    }
  }

  updateSliderImages();
  const nextButton = document.querySelector('.slider__button--right');
  nextButton.addEventListener('click', handleNextButtonClick);

  const prevButton = document.querySelector('.slider__button--left');
  prevButton.addEventListener('click', handlePrevButtonClick);

  parentNode.addEventListener('click', handleImageClick);
  document.addEventListener('keydown', handleKeyPress);
}
