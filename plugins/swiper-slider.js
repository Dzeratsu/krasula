import Swiper from 'swiper/core/core';
import Pagination from 'swiper/modules/pagination/pagination'
import Navigation from 'swiper/modules/navigation/navigation'
import Vue from 'vue';

const swiper = {
  install(Vue, options) {
    Vue.prototype.$swiper = Swiper
    Vue.prototype.$swiperModules = {
      Pagination,
      Navigation,
    }
  },
}

Vue.use(swiper)
