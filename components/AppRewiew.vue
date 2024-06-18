<template>
  <section>
    <span id="reviews" class="block absolute -mt-32 lg:-mt-24"></span>
    <div class="mx-auto px-6">
      <app-title>ОТЗЫВЫ ПОКУПАТЕЛЕЙ</app-title>
      <article class="mt-[25px]  lp:mt-[16px] 2xl:mt-[61px]">
        <div
          class="flex items-center justify-center rounded-[10px] px-2 py-4 shadow-review-shadow bg-white"
        >
          <nuxt-img
            format="webp"
            quality="100"
            class="sm:hidden"
            src="img/rewiew/rewiew-mob3.png"
            alt="защита от плесени"
            width="267"
            height="374"
          />
          <nuxt-img
            format="webp"
            quality="100"
            class="hidden sm:block lp:max-w-[70%]"
            src="img/rewiew/rewiew1.png"
            alt="Защита от старения"
            width="1031"
            height="664"
          />
        </div>
      </article>
      <article class="mt-[25px] sm:mt-[50px]">
        <div
          class="flex items-center justify-center rounded-[10px] px-2 py-4 shadow-review-shadow bg-white"
        >
          <nuxt-img
            format="webp"
            quality="100"
            class="sm:hidden"
            src="img/rewiew/rewiew-mob3.png"
            alt="Защита древесины"
            width="267"
            height="374"
          />
          <nuxt-img
            format="webp"
            quality="100"
            class="hidden sm:block lp:max-w-[70%]"
            src="img/rewiew/rewiew2.png"
            alt="С гидрофобным покрытием"
            width="1031"
            height="664"
          />
        </div>
      </article>
      <article class="sm:mt-[50px] mt-[25px]">
        <div
          class="flex items-center justify-center rounded-[10px] px-2 py-4 shadow-review-shadow bg-white"
        >
          <nuxt-img
            format="webp"
            quality="100"
            class="sm:hidden"
            src="img/rewiew/rewiew-mob3.png"
            alt="защитит ваш дом"
            width="267"
            height="374"
          />
          <nuxt-img
            format="webp"
            quality="100"
            class="hidden sm:block lp:max-w-[70%]"
            src="img/rewiew/rewiew3.png"
            alt="Krasula top  отзывы"
            width="1031"
            height="664"
          />
        </div>
      </article>
    </div>
  </section>
</template>
<script setup>
import AppTitle from '@/components/global/AppTitle.vue'
</script>
