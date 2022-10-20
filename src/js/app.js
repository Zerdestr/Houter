import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const recommendationSwiper = new Swiper('.recommendation__swiper', {

  modules: [Navigation],

  direction: 'horizontal',
  loop: false,



  wrapperClass: 'recommendation__wrapper',
  slideClass: 'recommendation__slide',
  slideActiveClass: 'recommendation__slide--active',

  navigation: {
    nextEl: '.recommendation__button-next',
    prevEl: '.recommendation__button-prev',
    disabledClass: 'recommendation__button-disabled'
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    567: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    991: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },

});

const reviewSwiper = new Swiper('.review__swiper', {

  modules: [Pagination],

  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 56,
  loop: true,
  loopedSlides: 3,
  initialSlide: 1,
  autoHeight: true,



  wrapperClass: 'review__wrapper',
  slideClass: 'review__slide',
  slideActiveClass: 'review__slide--active',

  pagination: {
    el: '.review__pagination',
    type: 'bullets',
    bulletClass: 'review__pagination-bullet',
    bulletActiveClass: 'review__pagination-bullet--active',
    clickable: true
  },

});



let header = document.querySelector('.header');


window.addEventListener('scroll', function () {
  if (scrollY > 10) {
    header.classList.add('header--fixed');
  }
  else {
    header.classList.remove('header--fixed');
  }
});

let headerBurger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu');

headerBurger.addEventListener('click', function () {
  headerBurger.classList.toggle('burger--active');

  headerMenu.classList.toggle('header__menu--active');
});



let recommendation__button = document.querySelectorAll('.recommendation__button');

function recommendationSort(event) {
  let target = event.target.closest('.recommendation__button');

  let recommendationButtons = document.querySelectorAll('.recommendation__button');

  let recommendationSlides = document.querySelectorAll('.recommendation__slide');

  recommendationButtons.forEach(recommendationButton => {
    recommendationButton.classList.remove('recommendation__button--active')
  });

  target.classList.add('recommendation__button--active');

  for (let item of recommendationSlides) {
    let slideData = item.dataset.target;
    let buttunData = target.dataset.target + '-slide'

    item.classList.remove('recommendation__slide--visible')

    if (slideData == buttunData) {
      item.classList.add('recommendation__slide--visible');
    }

    recommendationSwiper.update();
  }

}

recommendation__button.forEach(recommendationItem => {
  recommendationItem.addEventListener('click', recommendationSort);
});


