<template>
  <section>
    <span id="ready-solutions" class="block absolute -mt-32 lg:-mt-24"></span>
    <div class="mx-auto px-6">
      <app-title>ГОТОВЫЕ КОМПЛЕКСНЫЕ РЕШЕНИЯ</app-title>
      <div
        class="max-sm:flex-col flex gap-x-[30px] max-sm:mt-[18px] 2xl:mt-[61px] lp:mt-[23px] flex-row-reverse"
      >
        <div class="sm:w-6/12">
          <div class="flex items-center sm:items-center flex-shrink-1 lg:h-[100px]">
            <img
              format="webp"
              quality="100"
              class="hidden sm:block"
              src="img/ready-icon2.png"
              width="70"
              height="70"
              alt="Защита древесины  - финищное покрытие"
            />
            <img
              format="webp"
              quality="100"
              class="sm:hidden "
              src="img/ready-icon1mob.png"
              width="48"
              height="48"
              alt="Защита древесины от огня для наружных работ"
            />
            <ul class="ml-[18px] sm:ml-[30px] leading-[25px]">
<!--              <li class="text-[16px] font-semibold lg:text-[21px]">
                Для ВНУТРЕННИХ работ
              </li>-->
              <li class="text-[16px] max-sm:leading-[15px] lg:text-[21px] font-semibold">
                Цвет +
                защита от плесени, растрескивания, старения, выцветания, влаги
              </li>
            </ul>
          </div>
          <img
            format="webp"
            quality="100"
            class="mt-[46px] lp:mt-[16px]"
            src="img/ready2.png"
            width="570"
            height="428"
            alt="Защита от старения и влаги"
          />
        </div>
        <div class="max-sm:mt-[36px] sm:w-6/12">
          <div class="flex items-center sm:items-center lg:h-[100px]">
            <img
              format="webp"
              quality="100"
              class="sm:hidden"
              src="img/ready-icon2mob.png"
              width="48"
              height="48"
              alt="защита от плесени, растрескивания, старения,
                выцветания, влаги"
            />
            <img
              format="webp"
              quality="100"
              class="hidden sm:block"
              src="img/ready-icon1.png"
              width="70"
              height="70"
              alt="Защитный состав с гидрофобным покрытием"
            />
            <ul class="ml-[18px] sm:ml-[30px] leading-[25px]">
<!--              <li class="text-[16px] font-semibold lg:text-[21px]">
                Для НАРУЖНЫХ работ
              </li>-->
              <li class="text-[16px] max-sm:leading-[15px] lg:text-[21px] font-semibold">
                Цвет  +
                <p class="text-red"> защита от огня +</p>
                защита от плесени, растрескивания, старения,
                выцветания, влаги
              </li>
            </ul>
          </div>
          <img
            format="webp"
            quality="100"
            class="mt-[46px] lp:mt-[16px] lp:max-w-[80%]"
            src="img/ready1.png"
            width="570"
            height="428"
            alt="Защитный состав с гидрофобным покрытием"
          />
        </div>
      </div>
    </div>
    <div>
      <AppPainted/>
    </div>
    <AppButton
      link="https://www.nort-udm.ru/mesta-prodazh/"
      class="2xl:mt-[66px] mt-[33px] lp:mt-[15px]"
      >Узнайте, где купить
    </AppButton>
  </section>
</template>
<script>
import AppTitle from '@/components/global/AppTitle.vue'
import AppButton from '@/components/global/AppButton.vue'

export default {
  name: 'AppReady',
  components: { AppButton, AppTitle },
}
</script>
