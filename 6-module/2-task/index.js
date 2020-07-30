'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;

    this._render();
    this._showSlide(this.slides[0].id);

    /**
     * Обратите внимание, здесь используется arrow function, для того чтобы при наступлении события
     * в метод this.onClick не потерять this.
     */
    this.el.addEventListener('click', event => this.onClick(event));
  }

  onClick(event) {
    let target = event.target;
    const controlButton = target.closest('[role="button"]');
    const isIndicatorButton = !!target.dataset.slideTo;

    if (controlButton) {
      this._onControlButtonClick(controlButton);
      return;
    }

    if (isIndicatorButton) {
      this._onIndicatorClick(target);
    }
  }

  _onControlButtonClick(controlButton) {
    const activeSlideId = this.activeSlide;
    const slideTo = controlButton.dataset.slide;

    if (slideTo === 'next') {
      this._onNextButtonClick(activeSlideId);
    }

    if (slideTo === 'prev') {
      this._onPreviousButtonClick(activeSlideId);
    }
  }

  _onIndicatorClick(target) {
    const slideTo = parseInt(target.dataset.slideTo, 10);
    this._showSlide(slideTo);
  }

  _onNextButtonClick(activeSlideId) {
    const isLastSlide = !this.slides[activeSlideId + 1];
    let newSlideId;

    if (isLastSlide) {
      newSlideId = 0;
    } else {
      newSlideId = activeSlideId + 1;
    }

    this._showSlide(newSlideId);
  }

  _onPreviousButtonClick(activeSlideId) {
    const isFirstSlide = !this.slides[activeSlideId - 1];
    let newSlideId;

    if (isFirstSlide) {
      newSlideId = this.slides.length - 1;
    } else {
      newSlideId = activeSlideId - 1;
    }

    this._showSlide(newSlideId);
  }


  /**
   * Функция, которая отвечает за отрисовку компоненты
   */
  _render() {
    const indicators = this.slides.map((slide) => {
      return `<li data-target="#mainCarousel" data-slide-to="${slide.id}" class="carousel-indicator"></li>`;
    }).join('');
    const indicatorsBlock = `
    <ul class="carousel-indicators">
      ${indicators}
    </ul>
    `;

    this.el.innerHTML = `
      <div class="main-carousel carousel slide">
          ${indicatorsBlock}
          <div class="carousel-inner js-active-slide">
              <!-- Вот здесь будет активный слайд, после вызова this._showSlide -->
          </div>
          
          <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
          </button>
          <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
          </button>
      </div>
    `;
  }

  /**
   * Метод показывает выбранный слайд
   */
  _showSlide(id) {
    const el = this.el.querySelector('.js-active-slide');
    const slide = this.slides[id];

    this.activeSlide = id;

    // показываем новый активный слайд
    el.innerHTML = `
      <div class="carousel-item active">
          <img src="${slide.img}" alt="ActiveSlide"/>
          <div class="container">
              <div class="carousel-caption">
                  <h3 class="h1">${slide.title}</h3>
                  <div>
                      <a class="btn" href="#" role="button">
                          View all DEALS
                          <img src="../../assets/icons/icon-angle-white.svg" class="ml-3" alt=""/>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    `;

    // находим активный индикатор (все остальные деактивируем)
    for (const indicator of this.el.querySelectorAll('.carousel-indicator')) {
      indicator.classList.toggle('active', parseInt(indicator.dataset.slideTo, 10) === this.activeSlide);
    }
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
