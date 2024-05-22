<template>
  <div class="font-bold bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm w-full rounded-xl shadow-md p-4">
    <div class="flex flex-wrap">
        <div class="w-full md:w-1/3">
          <CardTemperature />
        </div>
        <div class="w-full md:w-2/3">
          <ChartLine />
        </div>
        <div class="w-full">
          <Map />
        </div>
    </div>
  </div>
</template>

<script setup>
import CardTemperature from '../modules/temperature/components/CardIndex.vue'
import ChartLine from '../modules/temperature/components/ChartLine.vue';
import Map from '../modules/temperature/components/Map.vue'

</script>
