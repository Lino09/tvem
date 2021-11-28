<template>
  <div class="container grid grid-cols-3 gap-2 lg:gap-8 min-h-screen ">
    <div class="col-span-3 md:col-span-1 border border-gray-300 filtered self-start sticky top-4">
      <left-main></left-main>
    </div>
    <div id="main-container" class="col-span-3 md:col-span-2 border border-gray-300 filtered">
      <div class="h-96"></div>
      <div class="h-96"></div>
      <div class="h-96"></div>
      <div class="h-96"></div>
      <div class="h-96"></div>
    </div>
  </div>
</template>

<script>
import LeftMain from '@/components/LeftMain.vue';

export default {
  name: 'Home',
  components: {
    LeftMain,
  },
};
</script>
