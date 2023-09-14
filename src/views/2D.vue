<script setup>
import { onMounted } from 'vue'
import Map from "@arcgis/core/Map.js"
import MapView from "@arcgis/core/views/MapView.js"
import Graphic from "@arcgis/core/Graphic"
import { locationToAddress } from "@arcgis/core/rest/locator/locationToAddress";
const locatorUrl = "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer";
//创建Graphic
const polyGon = {
  type: 'polygon',
  rings: [
    [102.7184, 25.041],
    [102.7217, 25.041],
    [102.7217, 25.0392],
    [102.7184, 25.0392]
  ]
};
const polyGonSymbol = {
  type: "simple-fill",
  color: [255, 255, 20, 0.4],
  style: "solid",
  outline: {
    color: "black",
    width: 1
  }
}
const attributes = {
  Name: '恒隆广场spring city 66'
};
// const polygonGraphic = new Graphic({
//   geometry: polyGon,
//   symbol: polyGonSymbol,
//   attributes: attributes,
//   popupTemplate: {
//     title: '{Name}'
//   }
// });
onMounted(() => {
  const map = new Map({
    basemap: 'hybrid'
  })


  const view = new MapView({
    container: 'map',
    map: map,
    zoom: 16,
    center: [102.721, 25.04],
  });
  // view.graphics.add(polygonGraphic)
  view.popupEnabled = false;
  view.on('click', (e) => {
    const lat = Math.round(e.mapPoint.latitude * 1000) / 1000;
    const lon = Math.round(e.mapPoint.longitude * 1000) / 1000;
    console.log('point', e.mapPoint);
    let address
    locationToAddress(locatorUrl, { location: e.mapPoint })
      .then((res) => {
        address = res.address
        view.popup.content = address
        // view.openPopup({
        //   location: e.mapPoint
        // })
      })
      .catch((err) => {
        address = '无地址信息'

      })
    view.hitTest(e).then(function (response) {

      if (response.results.length) {
        const selectedGraphic = response.results[0].graphic;
        selectedGraphic.geometry = polyGon;
        selectedGraphic.symbol = polyGonSymbol
        selectedGraphic.attributes = attributes
        view.graphics.removeAll();
        view.graphics.add(selectedGraphic)
        view.openPopup({
          location: e.mapPoint,
          title: response.results[0].graphic.attributes.Name
        })
        console.log(response);
      } else {
        // view.graphics.removeAll();
        view.popup.title = `[${lon},${lat}]`
        view.graphics.removeAll();
        view.openPopup({
          location: e.mapPoint,
        })
      }
    });



  })

})
</script>

<template>
  <div id="map"></div>
</template>

<style>
@import "@arcgis/core/assets/esri/themes/light/main.css";

#map {
  height: 600px;
  width: 100%;
  margin: 0;
  padding: 0;

}
</style>
