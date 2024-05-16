<template>
  <div 
    class="w-full h-screen p-2 
      bg-gradient-to-t to-sky-50 from-sky-100
      dark:to-zinc-700 dark:from-zinc-800">
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'

</script>
