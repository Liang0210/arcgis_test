<script setup>
import { onMounted } from 'vue'
import Map from "@arcgis/core/Map.js"
import MapView from "@arcgis/core/views/MapView.js"

onMounted(() => {
  const map = new Map({
    basemap: "topo-vector",
    ground: "world-elevation"
  })
  console.log(map);
  
  const view = new MapView({
    container:'map',
    map:map,
    zoom:4,
    center:[15,65],
  });
  console.log(view);
  
})
</script>

<template>
  <div id="map"></div>
</template>

<style>
@import "@arcgis/core/assets/esri/themes/light/main.css";

#map {
  height:600px;
  width: 100%;
  margin: 0;
  padding: 0;
  
}

</style>
