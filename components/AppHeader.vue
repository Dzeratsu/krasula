<template>
  <header
    class="fixed top-0 z-[101] mx-auto w-full border-b border-gray bg-white px-3"
  >
    <div class="mx-auto 2xl:max-w-[1380px] lg:max-w-[600]">
      <div class="my-2 flex items-center justify-between">
        <div class="flex items-center lg:gap-x-4 gap-x-2">
          <img
            format="webp"
            quality="100"
            width="145"
            height="68"
            src="img/logo.png"
            alt="logo nort"
            class="hidden lg:block"
            @click="closeMenu"
          />
          <img
            format="webp"
            quality="100"
            width="76"
            height="35"
            src="img/logo-mob.png"
            alt="logo nort-mob"
            class="lg:hidden"
            @click="closeMenu"
          />
          <div
            class="sm:text-lg text-left sm:block lg:max-w-full max-sm:text-left leading-[13px] max-sm:text-[11px] text-[21px]"
          >
            <p class="font-normal">
              <a href="mailto:krasulatop@ooonort.ru" class="underline">krasulatop@ooonort.ru</a>
            </p>
            <p class="font-semibold">
              <a href="tel:88002509017" class="underline">8 (800) 250 90 17</a>
            </p>
          </div>
        </div>
        <ul class="flex gap-x-8 text-lg only-md:hidden max-lg:hidden">
          <li v-for="item in link" :key="item.link" class="hover:underline">
            <NuxtLink :to="item.link">{{ item.name }} </NuxtLink>
          </li>
          <li>
            <a href="https://www.nort-udm.ru/mesta-prodazh/" target="_blank">Где купить </a>
          </li>
        </ul>
        <div class="block flex gap-x-3 sm:gap-x-5 lg:hidden">
          <button
            type="button"
            class="z-40 ml-auto w-6 flex-wrap items-center justify-center text-white"
            @click="openMenu = !openMenu"
          >
            <svg
              v-if="!openMenu"
              class="fill-current block cursor-pointer"
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="21" height="2" :fill="'#000000'" />
              <rect y="5" width="21" height="2" :fill="'#000000'" />
              <rect y="10" width="21" height="2" :fill="'#000000'" />
            </svg>
            <svg
              v-else
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="20.6739"
                height="1.72282"
                transform="matrix(0.699746 -0.714391 0.699746 0.714391 0.328125 14.769)"
                :fill="'#000000'"
              />
              <rect
                width="20.6739"
                height="1.72282"
                transform="matrix(-0.699746 -0.714391 -0.699746 0.714391 15.6719 14.769)"
                :fill="'#000000'"
              />
            </svg>
          </button>
          <div
            class="fixed left-0 top-[3rem] h-full w-full transition-all sm:static sm:block sm:bg-[rgba(0,0,0,0)]"
            :class="[{ hidden: !openMenu }, { ['z-100 block']: openMenu }]"
            @click="closeMenu"
          >
            <ul
              class="absolute right-0 top-0 flex-nowrap items-end justify-center bg-white p-4 pb-[24px] text-left transition-opacity duration-200 ease-in-out sm:opacity-100 md:w-auto lg:static lg:flex lg:justify-end lg:p-0 w-[200px] lg:text-xs xl:w-[45rem] xl:text-sm 2xl:w-[38rem]"
              :class="{
                'max-lg:pointer-events-none max-lg:opacity-0': !openMenu,
                'max-lg:opacity-100': openMenu,
              }"
              @click="openMenu = false"
            >
              <li v-for="item in link" :key="item.link" class="mt-[10px]">
                <NuxtLink :to="item.link">{{ item.name }} </NuxtLink>
              </li>
              <li class="mt-[10px]">
                <a href="https://www.nort-udm.ru/mesta-prodazh/" target="_blank">Где купить </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      openMenu: false,
      link: [
        { name: 'О продукте', link: '#about' },
        { name: 'Преимущества', link: '#succession' },
        { name: 'Где применять', link: '#apply' },
        { name: 'Готовые комплексы', link: '#ready-solutions' },
        /*        { name: 'Отзывы', link: '#buy' } , */
        // { name: 'Где купить', link: '#reviews' },
      ],
    }
  },
  watch: {
    openMenu() {
      if (this.openMenu) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    },
  },
  mounted() {
    document.body.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.openMenu = false
      }
    })
  },
  methods: {
    closeMenu() {
      if (this.openMenu === true) {
        this.openMenu = false
      }
    },
  },
}
</script>
