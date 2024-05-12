<template>
  <div
    v-if="openPopup"
    class="fixed top-0 left-0 w-full h-full bg-popup z-50 overflow-y-auto z-40 flex justify-center items-center"
    aria-labelledby="modal-title"
    role="popup"
    aria-modal="true"
    @click.stop.self="closePopup"
    @keydown.esc.stop="closePopup"
  >
<WrapForm/>
  </div>
</template>
<script>

export default {
  name: 'AppPopup',
  computed: {
    openPopup() {
      return this.$store.state.popup.open
    },
  },
  methods: {
    closePopup() {
      this.$store.dispatch('popup/close')
    },
    send() {
      return false
    },
  },
}
</script>

<style scoped>
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.5s;
}

.popup-enter,
.popup-leave-to {
  opacity: 0;
}
</style>
