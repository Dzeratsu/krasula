<template>
  <div>
    <div class="max-sm:hidden block">
    <h3 class="uppercase font-bold text-[40px] mx-auto text-center mt-[80px]">Варианты нанесения</h3>
    <div class="flex gap-[6px]">
      <div v-for="item in painted" :key="item.hred" class="text-[18px] leading-[24px]">
        <nuxt-img
          format="webp"
          quality="100"
         :src="item.hred" width="230" height="137" />
        <p class="mt-4" v-html="item.text"/>
      </div>

    </div>
    </div>
    <div class="swiper max-sm:block hidden">
      <h3 class="uppercase font-bold lg:text-[40px] text-[21px] mx-auto text-center mt-[80px] ">Варианты нанесения</h3>

      <ul class="swiper-wrapper mt-4">
        <li
          v-for="item in painted"
          :key="item.text"
          class="swiper-slide flex flex-col items-center text-center"
        >
          <nuxt-img
            width="270"
            heigh="151"
            format="webp"
            :alt="item.text"
            quality="100" :src="item.hred" />
          <span class="mt-[21px] text-[16px] leading-[16px]" v-html="item.text"/>
        </li>
      </ul>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPainted",
  data () {
    return {
      painted: [
        {hred: '/img/painted/painted1.png', alt: '#', text: `<b>Krasula Aqua Top</b></br> 100 г/м<sup>2</sup>` },
        {hred: '/img/painted/painted2.png', alt: '#', text:`<b>Krasula «Серый»</b> 120 г/м<sup>2</sup> <br> (2 слоя) + <br><b>Krasula Aqua Top</b>100 г/м<sup>2</sup> </br>(3 слоя)`},
        {hred: '/img/painted/painted3.png', alt: '#', text:`<b>Krasula «Орех»</b> 120 г/м<sup>2</sup> <br> (2 слоя) + <br>  <b>Pirilax-Special 180 г/м<sup>2</sup> </b> <br>(2 слоя) + <br><b>Krasula Aqua Top</b>100 г/м<sup>2</sup> </br>(3 слоя)`},
        {hred: '/img/painted/painted4.png', alt: '#', text: `<b>Biofa</b> RAL7516</br> <b>+ Krasula Aqua Top</b><br>100 г/м<sup>2</sup>(3 слоя)`},
        {hred: '/img/painted/painted5.png', alt: '#', text: `<b>Biofa</b> RAL7502</br><b>+ Pirilax-Special</b> <br> 180 г/м<sup>2</sup>(2 слоя) <b><br>+ Krasula Aqua Top</b><br>100 г/м<sup>2</sup>(3 слоя)`}
      ]
    }
},
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper = new this.$swiper('.swiper4', {
      grabCursor: true,
      modules: [this.$swiperModules.Navigation, this.$swiperModules.Pagination],
      navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
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
  margin-top: -70px;
  color: #ffee00;
  width: 15px;
}
.swiper-button-prev{
  font-weight: 900;
  margin-top: -70px;
  color: #ffee00;
}
.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
  color: #545454;
  cursor: auto;
  pointer-events: none;
}
</style>

