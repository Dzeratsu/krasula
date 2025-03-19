<template>
  <div>
    <img
      quality="100"
      format="webp"
      src="img/banner.png"
      alt="krasula top"
      class="mx-auto hidden mob:block lp:w-[90%]"
    />
    <img
      format="webp"
      quality="100"
      src="img/banner-mob.png"
      alt="krasula top"
      width="375"
      height="279"
      class="mob:hidden w-full pt-6"
    />
  </div>
</template>
<script>
export default {
  name: 'AppBanner',
}
</script>
