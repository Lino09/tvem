<template>
  <div class="container">
    <!-- LEFT COLUMN  -->
    <div class=" grid grid-cols-3 gap-2 lg:gap-8 min-h-screen">
    <div class="col-span-3 md:col-span-1 filtered self-start sticky top-4">
      <left-main></left-main>
      <div class="flex justify-center w-full mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vel ex cum, adipisci natus voluptatem a hic earum excepturi
        voluptates, exercitationem quaerat? Optio, quo.<br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Vel ex cum, adipisci natus voluptatem a hic earum excepturi
        voluptates, exercitationem quaerat? Optio, quo.
      </div>
    </div>

    <!-- RIGHT COLUMN -->
    <div id="main-container" class="col-span-3 md:col-span-2 filtered
    grid grid-cols-3 gap-4 self-start">
      <h1 class="col-span-3 text-4xl text-center mb-12 font-semibold">Sección 1</h1>
      <div v-for="el in 12" :key="el" class="flex flex-col items-center">
        <img class="rounded-full h-52 w-52 bg-opacity-30 bg-pink-400"
          src="../assets/services/fitness.svg" alt="">
        <span class="text-2xl text-center mt-4">Rehabilitación Deportiva</span>
      </div>

      <h1 class="col-span-3 text-4xl text-center mt-12 mb-8 py-8
      font-semibold border-t border-gray-200">
      Sección 2
      </h1>
      <div v-for="el in 12" :key="el" class="flex flex-col items-center">
        <img class="rounded-full h-52 w-52 bg-opacity-30 bg-pink-400"
          src="../assets/services/fitness.svg" alt="">
        <span class="text-2xl text-center mt-4">Rehabilitación Deportiva</span>
      </div>
    </div>
  </div>
  <div id="main-container" class="col-span-3 md:col-span-2 filtered
    grid grid-cols-3 gap-4 self-start mt-4">
      <h1 class="col-span-3 text-4xl text-center mb-12 font-semibold">Sección 3</h1>
      <div v-for="el in 12" :key="el" class="flex flex-col items-center">
        <img class="rounded-full h-52 w-52 bg-opacity-30 bg-pink-400"
          src="../assets/services/fitness.svg" alt="">
        <span class="text-2xl text-center mt-4">Rehabilitación Deportiva</span>
      </div>
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
