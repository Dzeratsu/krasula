<template>
  <div class="mx-auto px-6 max-sm:py-[27px] lg:my-[80px]">
    <h2 class="text-center text-[21px] font-bold lp:text-4xl 2xl:text-6xl uppercase">
      Преимущества состава «KRASULA®» Aqua TOP
    </h2>
    <div class="md:grid lg:grid-cols-3 md:grid-cols-2 block gap-y-8 lg:justify-items-center content-center mt-[36px]">
      <div v-for="(item, index) in advantages" :key="item.text" class="text-[21px] leading-[21px] lg:w-[350px] ">
        <div class="flex items-center align-middle mx-auto md:mx-0"><ApproveImage/>
          <div class="mt-2">
            <span class="leading-[21px] text-[21px] font-semibold">{{index == 1 ? `Совместим с большинством ЛКМ` : item.text}}</span><br>
            <span class="leading-[16px] text-[16px]" v-html="item.subText"/>
        </div></div>
      </div>
    </div>
    <div class="lg:mt-[80px] mt-6">
      <nuxt-img
        quality="100"
        format="webp"
src="/img/youtube.png" width="1170" height="633"/>
    </div>
</div>
</template>
<script>


export default {
  name: 'AppAdvantages',
  data (){
    return {
      advantages: [{
        text: 'Готов к применению', subText: 'Нужно лишь хорошо перемешать'
      },
        {
          text: 'Совместим с большинством ЛКМ'
        },
        {
          text: 'На водной основе', subText: 'нет резкого и неприятного запаха'
        },
        {
          text: 'Быстро сохнет', subText: '24 часа в естественных условиях'
        },
        {
          text: 'Низкий расход', subText:`от 100 г/м<sup>2</sup>`
        },
        {
          text: 'Долго служит', subText: 'не менее 10 лет внутри, снаружи - 5 лет'}]
    }
  }
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
