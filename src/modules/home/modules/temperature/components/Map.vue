<template> 
  <div class="w-full h-52 rounded-xl" id="map"></div>
</template>

<script setup>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { onMounted, ref } from "vue";

const isLocationEnabled = ref(false);

const captureLatLong = (map) => {
  navigator.geolocation.getCurrentPosition(
      (position) => {
          const { latitude, longitude } = position.coords;
          isLocationEnabled.value = true;
          // Centra el mapa en las coordenadas del usuario.
          map.setCenter([longitude, latitude]);

          // Crea un marcador en la ubicación del usuario.
          new mapboxgl.Marker()
              .setLngLat([longitude, latitude])
              .addTo(map);
      },
      (error) => {
          console.error("Error al obtener la ubicación", error);
          // alert("No se pudo obtener la ubicación. Asegúrate de que los servicios de ubicación estén habilitados y que hayas concedido permisos.");
          map.setCenter([-13.5364608, -71.9519744])
      }
  );
}

onMounted(() => {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYW50b255d3lhdHQiLCJhIjoiY2xyZmFmdmN2MDMyYjJrcm1uMHgwZ3ZjbiJ9.49lhOvUiuPu0R38iSmVv2w';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    zoom: 13, // starting zoom
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0], // Centro inicial, se actualizará con la ubicación del usuario
  });

  captureLatLong(map);
});
</script>

<style scoped>
#w-full {
  width: 100%;
}
#h-52 {
  height: 52vh;
}
</style>
