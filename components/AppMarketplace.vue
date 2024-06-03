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
        <a href="https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%9F%D0%B8%D1%80%D0%B8%D0%BB%D0%B0%D0%BA%D1%81%20%D0%A1%D0%BF%D0%B5%D1%88%D0%BB" target="_blank"
          ><nuxt-img
          alt="Купить Pirilax Special на wildberess"
          format="webp"
          quality="100" src="img/will.png" width="228" height="50"
        /></a>
        <a href="https://www.ozon.ru/search/?from_global=true&text=pirilax+special" target="_blank"
          ><nuxt-img
          format="webp"
          alt="Купить Pirilax Special на ozon"
          quality="100" src="img/ozon.png" width="177" height="50"
        /></a>
        <a
          href="https://market.yandex.ru/catalog--propitki/18060868/list?hid=16407095&text=%D0%BF%D0%B8%D1%80%D0%B8%D0%BB%D0%B0%D0%BA%D1%81&rt=9&was_redir=1&cpa=1&rs=eJwzEgtgrGLl2L7lJfsqRi6Om-9msgkce_SQGQBiQQk7&_redirectCount=1"
          target="_blank"
          ><nuxt-img
          format="webp"
          alt="Купить Pirilax Special на яндекс маркете"
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
            href="https://www.wildberries.ru/catalog/0/search.aspx?search=%D0%9F%D0%B8%D1%80%D0%B8%D0%BB%D0%B0%D0%BA%D1%81%20%D0%A1%D0%BF%D0%B5%D1%88%D0%BB"
            target="_blank"
          >
            <nuxt-img
              format="webp"
              alt="Купить Pirilax Special на wildberess"
              quality="100" src="img/will-mob.png" width="58" height="58"
          /></a>
          <a href="https://www.ozon.ru/search/?from_global=true&text=pirilax+special" target="_blank">
            <nuxt-img
              format="webp"
              alt="Купить Pirilax Special на ozon"
              quality="100" src="img/ozon-mob.png" width="58" height="58"
          /></a>
          <a
            href=" https://market.yandex.ru/catalog--propitki/18060868/list?text=Krasula%20Aqua%20Top&hid=16407095&rs=eJxdT01IFGEYnvF3-rwMHqRWsq8IGkHY-dmZcdWtqUNEUUSXLsHs7OwsLqyu7rge7CKih6RDIkg_BEvRJSgiggrbdgmUBE-ihIfAW3nzKATZvg-bf3zw8PL8fe-rLzTeFieapY8ftluXRGEyLBPeICzNJmg-f7GGWxbwN_H8_QDNm8AzxPNXSK0sUuoFpXiZVOEXzVuLn2uYHCWP0EdM8s8X8t8E00FYvU8Mf0mqMAXPI8yf0NaN-Q1-fI7dzhE6tyrk9CkrVPoJV-GMk5r8TkzpB65o_kp-k7atXsK2VymVvIy2u-Sp7pXRT1c497DPQ6g9pJZ26Xcuo3mB5tIG0CXVcdCGW5x53HWNfuQd4KfR9gDOFnTO48YENVS74F9OrIlMqvxd_za3ujOVv_K4gXUySRJlfrKJN8ktkRPpIOMVc2OuzgVF2BcZZ4dF44gocvGwqEE8BVGE2BBprYuQDEgSSuXI6ZQXZn3X9wr5Yhjk3JGclx12w8Ar-IO1LV6_ZcrMM4XZCLVjTTly1vfCopc7SBWCcCQ_HGbHg3qU7063KT_XL7AYgm31YNfxoOFmx4Kh8H_q3ROmzD31ZfG6lLIDw7Ps2B1ds2vP0FRVM3UzmvZjmcCIx3tjadPSMmlTz1iWmrJTvVpctVQ1qkW1f-Cn6DU%2C&glfilter=7893318%3A13323952"
            target="_blank"
          >
            <nuxt-img
              format="webp"
              alt="Купить Pirilax Special на яндекс маркете"
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
