<template>
    <div class="w-full pb-2 flex space-x-2 justify-center">
        <button 
            v-for="menu in menus" 
            :key="menu"
            class="py-2 px-4 rounded-md 
            backdrop-blur text-white 
            hover:-translate-y-1 transition-transform duration-300 ease-in-out"
            :class="menu.path === route.path ? 'bg-primary-500/80 dark:bg-gray-900/50' : ' bg-primary-500/40 dark:bg-gray-900/20 hover:bg-primary-500/50 dark:hover:bg-gray-900/40'"
            >
            <fa :icon="menu.icon"/>
        </button>
    </div>
</template>

<script setup>
import useHome from '../hooks/useHome';
import { useRoute } from 'vue-router';

const route = useRoute();

const {
    menus
} = useHome()


</script>