<template>
  <div class="font-bold bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm w-full rounded-xl shadow-md p-4">
    <div class="flex flex-wrap">
        <div class="w-full md:w-1/3">
          <AmbienteCard />
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
import AmbienteCard from '../modules/ambiente/components/CardIndex.vue'
import ChartLine from '../modules/ambiente/components/ChartLine.vue';
import Map from '../modules/ambiente/components/Map.vue'

</script>
