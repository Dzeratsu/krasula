<template>
  <div class="mx-auto max-sm:py-[27px] lg:my-[80px]">
    <h2 class="text-center text-[21px] font-bold lp:text-4xl 2xl:text-6xl uppercase">
      Подходит для наружных и  внутренних работ
    </h2>
    <div class="flex flex-wrap max-sm:hidden gap-[20px] lg:mt-[44px] mx-auto items-center justify-center">
      <nuxt-img quality=100 format=webp src="/img/jobs/forJobs1.png" width="570" height="394"/>
      <nuxt-img quality=100 format=webp src="/img/jobs/forJobs2.png" width="570" height="394"/>
      <nuxt-img quality=100 format=webp src="/img/jobs/forJobs3.png" width="570" height="394"/>
      <nuxt-img quality=100 format=webp src="/img/jobs/forJobs4.png" width="570" height="394"/>
    </div>
    <div class="swiper max-sm:block hidden">
      <ul class="swiper-wrapper mt-4">
        <li
          class="swiper-slide flex flex-col items-center text-center "
        >
          <nuxt-img
            width="375"
            heigh="259"
            format="webp"
            quality="100" src="/img/jobs/forJobs1.png" />
        </li>
        <li
          class="swiper-slide flex flex-col items-center text-center "
        >
          <nuxt-img
            width="375"
            heigh="259"
            format="webp"
            quality="100" src="/img/jobs/forJobs2.png" />
        </li>
        <li
          class="swiper-slide flex flex-col items-center text-center "
        >
          <nuxt-img
            width="375"
            heigh="259"
            format="webp"
            quality="100" src="/img/jobs/forJobs3.png" />
        </li>\
        <li
          class="swiper-slide flex flex-col items-center text-center "
        >
          <nuxt-img
            width="375"
            heigh="259"
            format="webp"
            quality="100" src="/img/jobs/forJobs4.png" />
        </li>
      </ul>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppForJobs',
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper = new this.$swiper('.swiper3', {
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
  margin-top: -20px;
  color: #ffee00;
  width: 15px;
}
.swiper-button-prev {
  font-weight: 900;
  margin-top: -20px;
  color: #ffee00;
}
.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
  color: #545454;
  cursor: auto;
  pointer-events: none;
}
</style>
