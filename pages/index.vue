<template>
<main>
<AppHeader/>
<AppBanner/>

<AppKrasula/>
  <div class="bg-bg-gray py-[27px] sm:pt-[80px] py-[20px]">
  <AppProperties class="max-w-[1170px] mx-auto" />
  </div>
  <AppCoverage class="py-[27px] sm:py-[80px] max-w-[1170px] mx-auto"/>
  <div class="bg-bg-gray py-[27px] sm:pt-[80px] py-[20px]">
  <AppAdvantages  class="max-w-[1170px] mx-auto" />
  </div>
  <AppForJobs class="py-[27px] sm:py-[80px] max-w-[1170px] mx-auto"/>
  <div class="bg-bg-gray py-[27px] sm:pt-[80px] py-[20px]">
  <AppReady class="max-w-[1170px] mx-auto" />
  </div>
  <AppRewiew class="py-[27px] sm:py-[80px] max-w-[1170px] mx-auto" />
  <AppMarketplace class="max-w-[1170px] mx-auto" />
  <AppVk/>
  <AppPopup/>
  <AppPhone/>
<AppScrollToTop />
  <AppFooter/>
</main>
</template>

<script>


export default {
  name: 'IndexPage',
}
</script>
