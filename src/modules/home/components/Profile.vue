<template>
    <button
        @click="setDarkMode"
        class="text-zinc-800 dark:text-white"
      >
      <fa v-if="isDark" icon="sun" />
      <fa v-else icon="moon" />
    </button>
    <button 
        v-if="!authenticated"
        class="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-full text-white"
        >
        Login
    </button>

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
