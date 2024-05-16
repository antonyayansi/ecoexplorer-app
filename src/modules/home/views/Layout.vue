<template>
  <div 
    class="w-full h-screen p-2 
      bg-gradient-to-t to-cyan-100 from-indigo-100
      dark:to-cyan-700 dark:from-indigo-800">
    <Header />
    <div class="flex">
      <Sidebar />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'

</script>
