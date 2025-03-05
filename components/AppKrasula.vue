<template>
  <section>
    <span id="about" class="block absolute -mt-32 lg:-mt-24"></span>
    <div class="mx-auto px-6 max-sm:py-[27px] sm:my-[80px]">
      <h2 class="text-center text-[21px] font-bold lp:text-4xl 2xl:text-6xl uppercase">
        Лак по дереву на водной основе <br>
        «KRASULA®» Aqua TOP</h2>
      <div>
        <div class=" mt-4 bg-bg-gray rounded-xl max-w-[970px] mx-auto align-middle items-center lg:text-center py-[20px] lg:text-[21px] p-4 text-[16px]">
          <div class="flex gap-2 max-sm:items-baseline lg:ml-[100px]">
            <nuxt-img
              src="img/ellipse.svg"
              alt="krasula"
              width="8"
              height="8"
            />
            <p> наносится на необработанную древесину</p>
          </div>
          <div
class="flex gap-2 max-sm:items-baseline lg:ml-[100px]">
            <nuxt-img
              src="img/ellipse.svg"
              alt="krasula"
              width="8"
              height="8"
            />
            <p>в качестве дополнительного защитного покрытия</p>
          </div>
          <div class="flex gap-2   max-sm:items-baseline lg:ml-[100px]">
            <nuxt-img
              src="img/ellipse.svg"
              alt="krasula"
              width="8"
              height="8"
            />
            <p>поверх огнезащитного состава «Pirilax®»- Special</p>
          </div>
        </div>
        <div
          class="mt-5 flex flex-col items-center md:flex-row sm:justify-center sm:gap-[57px]"
        >
          <nuxt-img
            class="hidden sm:block lp:max-w-[320px] max-w-full"
            src="img/krasula.png"
            alt="Защитный декоратинвный состав для древесины krasula top"
            width="417"
            height="408"
          />
          <nuxt-img
            src="img/krasula-mob.png"
            alt="Защитный декоратинвный состав для древесины krasula top"
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
        link="https://www.nort-udm.ru/upload/iblock/d0d/d0dbae0c3972ae50123b21170f322608.pdf"
        class="mt-[39px]"
      >
        <div class="flex items-center justify-center gap-4">
          <span>Инструкция</span>
          <nuxt-img
            format="webp"
            quality="100" src="img/load.svg" width="23" height="23" alt="Смотреть инструкцию krasula top" />
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
        `<p>Придает водо- и грязеотталкивающие свойства</p>`,
        `<p>Защищает от синевы, плесени, водорослей <br> <span class="text-[18px] font-normal">Высокоэффективный антисептик по ГОСТ 30028.4</span></p>`,
        `<p>Препятствует потемнению от УФ-лучей</p>`,
        `<p>Снижает растрескивание из-за усушки</p>`,
      ],
    }
  },
}
</script>
