<template>
  <div>
    <div
      class="lg:flex text-center lg:text-left pt-[105px] pb-[65px] items-center relative block max-sm:hidden"
    >
      <p class="text-[45px] leading-[45px] font-semibold">
        Покупайте <span class="inline lg:block">на маркетплейсах</span>
      </p>
      <nuxt-img
        format="webp"
        quality="100"
        alt="arrow"
        src="img/arrow.svg"
        width="117"
        height="46"
        class="absolute left-[350px] top-[70px] lg:block hidden"
      />
      <div
        class="lg:ml-[105px] flex gap-x-[25px] mt-[25px] lg:mt-0 justify-center"
      >
        <a href="https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%BA%D1%80%D0%B0%D1%81%D1%81%D1%83%D0%BB%D0%B0%20%D0%B0%D0%BA%D0%B2%D0%B0%20%D1%82%D0%BE%D0%BF" target="_blank"
          ><nuxt-img
          alt="Купить Krasula aqua top на wildberess"
          format="webp"
          quality="100" src="img/will.png" width="228" height="50"
        /></a>
        <a href="https://www.ozon.ru/search/?text=Krasula+Aqua+Top&from_global=true" target="_blank"
          ><nuxt-img
          format="webp"
          alt="Купить Krasula aqua top на ozon"
          quality="100" src="img/ozon.png" width="177" height="50"
        /></a>
        <a
          href="https://market.yandex.ru/search?suggest_text=%D0%9D%D0%9E%D0%A0%D0%A2&vendorId=13323952&rs=eJxVyaEOwjAQANCVLDCqKgmYk7je9W5ra5EogkORbkcVkv3_giHj2Rc2N3N52JPtOuPg0ELrtse9vmqZ359ngObc_NKCXSf_pQGzTvqmM9ddr2GqKPdAkRJLyhmJxfcDZaFJx8IxlVG5cgxJVIUKDoiePC0fzh4V&glfilter=7893318%3A13323952"
          target="_blank"
          ><nuxt-img
          format="webp"
          alt="Купить Krasula aqua top на яндекс маркете"
          quality="100" src="img/ya.png" width="242" height="51"
        /></a>
      </div>
    </div>
    <div>
      <div class="max-sm:block hidden text-center my-[25px]">
        <p class="text-[21px] font-semibold leading-[21px]">
          Покупайте на маркетплейсах
        </p>
        <div class="flex gap-x-[30px] mt-[19px] justify-center">
          <a
            href="https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%BA%D1%80%D0%B0%D1%81%D1%81%D1%83%D0%BB%D0%B0%20%D0%B0%D0%BA%D0%B2%D0%B0%20%D1%82%D0%BE%D0%BF"
            target="_blank"
          >
            <nuxt-img
              format="webp"
              alt="Купить Krasula aqua top на wildberess"
              quality="100" src="img/will-mob.png" width="58" height="58"
          /></a>
          <a href="https://www.ozon.ru/search/?text=Krasula+Aqua+Top&from_global=true" target="_blank">
            <nuxt-img
              format="webp"
              alt="Купить Krasula aqua top на ozon"
              quality="100" src="img/ozon-mob.png" width="58" height="58"
          /></a>
          <a
            href="https://market.yandex.ru/search?suggest_text=%D0%9D%D0%9E%D0%A0%D0%A2&vendorId=13323952&rs=eJxVyaEOwjAQANCVLDCqKgmYk7je9W5ra5EogkORbkcVkv3_giHj2Rc2N3N52JPtOuPg0ELrtse9vmqZ359ngObc_NKCXSf_pQGzTvqmM9ddr2GqKPdAkRJLyhmJxfcDZaFJx8IxlVG5cgxJVIUKDoiePC0fzh4V&glfilter=7893318%3A13323952" target="_blank"
          >
            <nuxt-img
              format="webp"
              alt="Купить Krasula aqua top на яндекс маркете"
              quality="100" src="img/ya-mob.png" width="58" height="58"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppMarketplace',
}
</script>
