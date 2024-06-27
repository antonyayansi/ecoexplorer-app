<template>
    <button
        @click="setDarkMode"
        class="text-zinc-800 dark:text-white"
      >
      <fa v-if="isDark" icon="sun" />
      <fa v-else icon="moon" />
    </button>
    <!-- <button 
        v-if="!authenticated"
        class="text-primary-500 dark:text-primary-300 hover:bg-skin-primary/20 font-medium px-4 py-2 rounded-full transition-colors duration-200"
        >
        Login
    </button> -->
</template>

<script setup>
import useAuth from '../../auth/hooks/useAuth';
import useHome from '../../home/hooks/useHome';

const {
    user,
    authenticated
} = useAuth()

const {
  isDark,
  setDarkMode
} = useHome()

</script>
