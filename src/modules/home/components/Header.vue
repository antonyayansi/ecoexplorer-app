<template>
   <div class="flex justify-between items-center pb-4">
      <div class="font-bold flex-1">
        EcoX 🏝
      </div>
      <div class="flex justify-center flex-1">
        <ListCities />
      </div>
      <div class="flex justify-end space-x-2 flex-1">
        <Profile />
      </div>
    </div>    
<Menu />
</template>

<script setup>
import ListCities from './ListCities.vue'
import Menu from './Menu.vue';
import Profile from './Profile.vue';
</script>
