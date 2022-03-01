<template>
  <div class="mapbox">
    <h2>Carte OpenStreetMap</h2>

    <LMap
      :center="center"
      :zoom="zoom"
      class="map"
      ref="map"
      @update:zoom="updateZoom"
      @update:center="updateCenter"
    >
      <LTileLayer :url="url" />
    </LMap>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: { LMap, LTileLayer },

  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      center: [48.6937223, 6.1834097],
      zoom: 13,
      markers: [
        { id: 1, coordinates: [48.6964074, 6.1792289] },
        { id: 2, coordinates: [48.6844, 6.185] },
        { id: 3, coordinates: [48.6935244, 6.1832861] },
      ],
    };
  },

  methods: {
    updateZoom(zoom) {
      this.zoom = zoom;
    },
    updateCenter(center) {
      this.center = center;
    },
  },
};
</script>

<style>
.mapbox {
  position: relative;
  margin: auto;
  width: 600px;
  height: 500px;
}

.map {
  position: absolute;
}
</style>
