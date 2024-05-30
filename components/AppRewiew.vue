<template>
  <div class="mx-auto px-6 max-sm:py-[27px] sm:my-[80px]">
    <h2 class="text-center text-[21px] font-bold lp:text-4xl 2xl:text-6xl uppercase">
      Отзывы покупателей
    </h2>
    <div class="swiper1 mySwiper mt-[56px] max-sm:hidden">
      <div class="swiper-wrapper">
      <div class="swiper-slide">
        <nuxt-img
          format="webp"
          quality="100"
          src="/img/rewiew/rewiew1.png" widht="889" height="552"/>
      </div>
      <div class="swiper-slide">
        <nuxt-img
          format="webp"
          quality="100"
          src="/img/rewiew/rewiew2.png" widht="889" height="552"/>
      </div>
      <div class="swiper-slide">
        <nuxt-img
          format="webp"
          quality="100"
          src="/img/rewiew/rewiew3.png" widht="889" height="552"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRewiew',
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper = new this.$swiper('.mySwiper', {
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
      },
     modules: [this.$swiperModules.Navigation,],
      slidesPerView: 'auto',
     // pagination: {
   //     clickable: true
// },
      spaceBetween: 40,
    })
  },
}
</script>
<style scoped>
.swiper1 {
  width: 100%;
  height: 100%;
}

.swiper-slide1 {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide{
  width: 50%;
}

.swiper-slide:nth-child(2n) {
  width: 50%;
}

.swiper-slide:nth-child(3n) {
  width: 50%;
}
.swiper-button-next {
  font-weight: 900;
  margin-top: -70px;
  right: 450px;
  color: #545454;
  width: 15px;
}
.swiper-button-prev {
  font-weight: 900;
  margin-top: -70px;
  left: 450px;
  color:#545454;
}
.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
  color: #545454;
  cursor: auto;
  pointer-events: none;
}
</style>
