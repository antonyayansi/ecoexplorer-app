<template>
  <div class="bg-gradient-to-t to-primary-300 from-primary-200 rounded-xl p-4 m-2">
    <label class="text-primary-900">El tiempo de hoy</label>
    <h1 class="text-4xl text-white">23 ºC</h1>
    <div>
      <button 
        v-for="option in optionsView"
        @click="viewSelected = option"
        :class="viewSelected == option ? 'border-2 border-white' : ''"
        class="w-full font-medium text-left my-1 text-white bg-white/20 dark:bg-zinc-900/20 rounded-lg px-2 py-1
              hover:-translate-x-1 transition-transform duration-200 ease-in-out"
        :key="option">
        {{ option }}
      </button>    
    </div>
  </div>
</template>

<script setup>
import useHome from '../../../hooks/useHome'

const {
  optionsView,
  viewSelected
} = useHome()

</script>
