<template>
  <section>
    <span id="about" class="block absolute -mt-32 lg:-mt-24"></span>
    <div class="mx-auto px-6 max-sm:py-[27px] sm:my-[80px]">
      <h2 class="text-center text-[21px] font-bold lp:text-4xl 2xl:text-6xl uppercase">
        Финишное атмосферостойкое покрытие <br>
        «KRASULA®» Aqua TOP</h2>
      <div>
        <div
          class="mt-5 flex flex-col items-center md:flex-row sm:justify-center sm:gap-[57px]"
        >
          <nuxt-img
            format="webp"
            quality="100"
            class="hidden sm:block lp:max-w-[320px] max-w-full"
            src="img/krasula.png"
            alt="pirilax-special"
            width="417"
            height="408"
          />
          <nuxt-img
            format="webp"
            quality="100"
            src="img/krasula-mob.png"
            alt="pirilax-special-mob"
            width="275"
            height="269"
            class="sm:hidden"
          />
          <div class="mt-[21px]">
            <div v-for="(item, index) in text" :key="index" class="">
              <ApproveImage :name="item"/>
            </div>
          </div>
        </div>
      </div>
      <AppButton
        link="https://www.nort-udm.ru/upload/iblock/ed7/ed76fe858cd997c9dcf2585e53cc3da9.pdf"
        class="mt-[39px]"
      >
        <div class="flex items-center justify-center gap-4">
          <span>Инструкция</span>
          <nuxt-img
            format="webp"
            quality="100" src="img/load.svg" width="23" height="23" alt="load" />
        </div>
      </AppButton>
    </div>
  </section>
</template>
<script>
import ApproveImage from '@/components/global/ApproveImage.vue'
import AppButton from '@/components/global/AppButton.vue'

export default {
  name: 'AppKrasula',
  components: { AppButton, ApproveImage },
  data() {
    return {
      text: [
        `<p>Замедляет старение древесины</p>`,
        `<p>Продлевает срок службы ЛКМ</p>`,
        `<p>Защищает от синевы, плесени, водорослей <br> <span class="text-[18px] font-normal">Высокоэффективный антисептик по ГОСТ 30028.4</span> </p>`,
        `<p>Препятствует потемнению от УФ-лучей</p>`,
        `<p>Снижает растрескивание из-за усушки</p>`,
      ],
    }
  },
}
</script>
