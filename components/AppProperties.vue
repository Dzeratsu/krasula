<template>
<div>
  <h2 class="text-center text-[21px] font-bold lp:text-4xl 2xl:text-6xl uppercase">
    придает атмосферостойкие, антисептические и декоративные свойства древесине
  </h2>
<div class="max-sm:hidden block">
  <div class="flex flex-wrap mt-[48px] justify-center">
    <div v-for="(item, index) in slide" :key="item.text" class="w-[233px]">
      <div class="flex flex-col justify-center items-center gap-3">
      <nuxt-img :src="item.imgSrc" width="180" height="180" class="align-middle"/>
      <div
class="font-semibold text-[21px] text-center"
      :class="[index > 0 ? 'mt-4': '']"
      >{{ item.text }}</div>
      </div>
    </div>
  </div>
<div class="mx-auto text-center text-tGray font-semibold text-[18px] mt-10">Полный перечень смотрите в инструкции по применению</div>
</div>
  <div class="swiper max-sm:block hidden">
    <ul class="swiper-wrapper mt-4">
      <li
        v-for="item in slide"
        :key="item.text"
        class="swiper-slide flex flex-col items-center text-center "
      >
        <nuxt-img
          width="230"
          heigh="230"
          format="webp"
          :alt="item.text"
          quality="100" :src="item.imgSrc" />
        <span class="mt-[21px] text-[21px] text-center font-semibold w-[233px]">{{item.text}}</span>
      </li>
    </ul>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</div>
</template>
<script>
export default {
  name: 'AppProperties',
  data() {
    return {
      slide: [
        { imgSrc: 'img/prop/prop1.png', text: `Клееные деревянные конструкции` },
        { imgSrc: 'img/prop/prop2.png', text: 'Брус LVL' },
        { imgSrc: 'img/prop/prop3.png', text: 'Фанера' },
        { imgSrc: 'img/prop/prop4.png', text: 'Вагонка' },
        { imgSrc: 'img/prop/prop5.png', text: 'ОСП'},
      ],
    }
  },
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper = new this.$swiper('.swiper', {
      grabCursor: true,
      modules: [this.$swiperModules.Navigation, this.$swiperModules.Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 16,
    })
  },
}
</script>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  object-fit: cover;
}
.swiper-button-next {
  font-weight: 900;
  margin-top: -50px;
  color: #ffee00;
  width: 15px;
}
.swiper-button-prev {
  font-weight: 900;
  margin-top: -50px;
  color: #ffee00;
}
.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
  color: #545454;
  cursor: auto;
  pointer-events: none;
}
</style>
