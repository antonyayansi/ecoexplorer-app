<template>
    <button 
        v-if="cities.length" 
        @click="openListCities"
        class="rounded-full py-2 px-4 text-white cursor-pointer backdrop-blur bg-primary-500 dark:bg-primary-400
        active:translate-y-1 transition-transform duration-300 ease-in-out"
    >
        <h1 class="font-bold text-sm">
            <fa icon="location-dot"/> 
            <span class="ml-2">{{ current_city.city }} - {{ current_city.country }}</span>
        </h1>
    </button>
    <Transition name="slide-fade">
        <div v-if="open" class="z-10 absolute top-14 py-2 px-4 bg-white dark:text-white rounded-md shadow-md backdrop-blur-md dark:bg-gray-900/50">
            <ul>
                <li v-for="city in cities" 
                    :key="city.id"
                    class="cursor-pointer p-2 rounded border-b dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 ease-in-out"
                    >
                    <h1>{{ city.city }} - {{ city.country }}</h1>
                </li>
            </ul>
            <div class="pt-2">
                <button class="bg-skin-success hover:bg-skin-success text-sm text-white py-2 px-4 rounded-full">
                    Agregar ciudad
                </button>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import useHome from '../hooks/useHome';

const open = ref(false);

const {
    cities,
    current_city,
    getCurrentCityByIp
} = useHome();

function openListCities() {
    open.value = !open.value;
}

onMounted(async () => {
    await getCurrentCityByIp();
});
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
