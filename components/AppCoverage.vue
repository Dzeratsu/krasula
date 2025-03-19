<template>
  <div>
    <div class="flex lg:flex-row-reverse flex-col gap-[30px]">
      <div class="lg:w-5/12 lg:mx-0 mx-4">
        <p class="uppercase font-semibold lg:text-[48px] lg:leading-[48px] text-[21px] max-sm:text-center lg:w-8/12 w-full mx-auto lg:ml-0 text-center lg:text-left">создает покрытие с гидрофобным эффектом</p>
        <p class="mt-6 text-[18px]">Эластичный защитный слой с гидрофобным эффектом отталкивает воду и грязь, не позволяет им проникать внутрь древесины, поверхность «самоочищается». Обработанные «Krasula» Aqua Top поверхности надолго сохраняют прочность и красивый внешний вид.</p>
      </div>
      <div class="lg:w-7/12 w-full">
        <client-only >
          <iframe class="max-sm:hidden" width="100%" height="403" src="https://vk.com/video_ext.php?oid=-117164278&id=456239135&hd=2" title="Krasula top" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </client-only>
        <client-only>
          <iframe   class="hidden max-sm:block" width="100%" height="219" src="https://vk.com/video_ext.php?oid=-117164278&id=456239135&hd=2" title="Krasula top" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </client-only>
      </div>
    </div>
    <div class="max-sm:hidden block">
      <div class="flex flex-wrap mt-[56px] justify-around w-9/12 mx-auto">
        <div v-for="(item) in slide" :key="item.text" class="w-[244px]">
          <div class="flex flex-col justify-center items-center gap-x-[86px]">
            <img :src="item.imgSrc" width="180" height="180" class="align-middle"/>
            <div
              class="font-semibold text-[18px] text-center mt-4">
<!--              :class="[index > 0 ? 'mt-4': '']"-->
            {{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper max-sm:block hidden">
      <ul class="swiper-wrapper mt-4">
        <li
          v-for="item in slide"
          :key="item.text"
          class="swiper-slide flex flex-col items-center text-center "
        >
          <img
            width="193"
            heigh="193"
            format="webp"
            :alt="item.text"
            quality="100" :src="item.imgSrc" />
          <span class="mt-[21px] text-[21px] text-center font-semibold w-11/12">{{item.text}}</span>
        </li>
      </ul>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppCoverage',
  data() {
    return {
      slide: [
        { imgSrc: '/img/coverage/coverage1.png', text: 'Гидрофобный эффект'},
        { imgSrc: '/img/coverage/coverage2.png', text: 'Бесцветное, шелковистое полуматовое покрытие, подчеркивает текстуру дерева' },
        { imgSrc: '/img/coverage/coverage3.png', text: 'Обработанные поверхности безопасны для людей и животных' },
      ],
    }
  },
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper2 = new this.$swiper('.swiper2', {
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
.swiper-button-next .swiper-button-disabled, .swiper-button-prev2.swiper-button-disabled {
  color: #545454;
  cursor: auto;
  pointer-events: none;
}
</style>

