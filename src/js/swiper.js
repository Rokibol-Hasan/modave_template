import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// Configure Swiper to use modules
Swiper.use([Pagination]);

const swiper = new Swiper('.mySwiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


var swiper2 = new Swiper(".swiper-two", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});