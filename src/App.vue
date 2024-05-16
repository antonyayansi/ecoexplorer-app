<template>
  <div :class="{'dark':isDark}">
    <div :class="`theme-${isTheme}`">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import useHome from './modules/home/hooks/useHome'

const {
  isDark,
  isTheme
} = useHome()

watch(
  () => isDark.value,
  (value) => {
    const htmlElement = document.documentElement;
      if (value) {
          htmlElement.classList.add('dark');
      } else {
          htmlElement.classList.remove('dark');
      }
  }
)

onMounted(() => {
  const htmlElement = document.documentElement;
  if (isDark.value) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }
})

</script>
