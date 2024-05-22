<template>
    <h1>Map</h1>    
    <div class="w-full h-52" id="map"></div>
</template>
  
<script setup>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { onMounted } from "vue";

onMounted(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW50b255d3lhdHQiLCJhIjoiY2xyZmFmdmN2MDMyYjJrcm1uMHgwZ3ZjbiJ9.49lhOvUiuPu0R38iSmVv2w'
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v9",
    });
    map.on("load", () => {
        // Here we want to load a layer
        map.addSource("usa", {
          type: "geojson",
          data:
            "https://raw.githubusercontent.com/johan/world.geo.json/master/countries/USA.geo.json",
        });
        map.addLayer({
          id: "usa-fill",
          type: "fill",
          source: "usa",
          paint: {
            "fill-color": "red",
          },
        });
    });
})
</script>

<style scoped>
</style>