<template>
  <div
    v-if="$store.state.positionY > 750"
    class="fixed z-50 left-[70px] bottom-[120px] pointer hidden lg:block"
    @click="scroll"
  >
    <button class="px-[18px] py-[21px] rounded-full shadowCircle  bg-white">
      <img
        src="img/scroll.svg"
        alt="scroll"
        width="18"
        height="26"
        class="text-xl"
      />
    </button>
  </div>
</template>
<script>
export default {
  name: 'AppScrollToTo',
  data: () => ({
    scroolBoolean: false,
  }),
  mounted() {
    window.addEventListener('scroll', this.setPosition)
  },
  methods: {
    scroll() {
      this.scroolBoolean = 123
      window.scrollTo(0, 0)
    },
    setPosition() {
      this.$store.commit('setPositionY', window.scrollY)
    },
  },
}
</script>
<style>
.shadowCircle {
  box-shadow: 0 0 10px 0 rgb(9 6 12 / 10%);
}
</style>
