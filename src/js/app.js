import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const recommendationSwiper = new Swiper('.recommendation__swiper', {

  modules: [Navigation],

  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 40,


  wrapperClass: 'recommendation__wrapper',
  slideClass: 'recommendation__slide',
  slideActiveClass: 'recommendation__slide--active',

  navigation: {
    nextEl: '.recommendation__button-next',
    prevEl: '.recommendation__button-prev',
    disabledClass: 'recommendation__button-disabled'
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