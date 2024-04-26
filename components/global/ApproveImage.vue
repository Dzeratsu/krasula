<template>
  <div
    class="flex items-center gap-2 pt-3 text-base font-semibold leading-[16px] sm:text-[21px] sm:leading-[21px] flex-shrink-1"
  >
    <div class="max-sm:min-w-[40px] min-w-[60px] hidden sm:block">
      <nuxt-img
        v-if="!white"
        format="webp"
        quality="100"
        alt="approve"
        src="img/approve.svg"
        width="40"
        height="40"
      />
      <nuxt-img
        v-else
        format="webp"
        quality="100"
        alt="approve"
        src="img/approve-white.svg"
        width="40"
        height="40"
      />
    </div>
    <div class="block sm:hidden max-sm:min-w-[40px] min-w-[60px]">
      <nuxt-img
        v-if="!white"
        format="webp"
        quality="100"
        alt="approve"
        src="img/approve.svg"
        width="29"
        height="29"
      />
      <nuxt-img
        v-else
        format="webp"
        quality="100"
        alt="approve"
        src="img/approve-white.svg"
        width="29"
        height="29"
      />
    </div>
    <p class="lg:text-[21px] text-[16px]" v-html="name"></p>
  </div>
</template>

<script>
export default {
  name: 'ApproveImage',
  props: {
    white: {
      type: Boolean,
      require: false,
      default: false,
    },
    name: {
      type: String,
      require: false,
      default: ''
    }
  },
}
</script>
