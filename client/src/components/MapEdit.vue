<template>
  <!-- use
    <Map defaultLat="5721151.527117471" defaultLng="4269715.072238731"></Map>
   -->

  <v-col
    :cols="cols"
    :sm="sm"
    :md="md"
    :lg="lg"
    :xl="xl"
  >
    <div id="map" />
  </v-col>
</template>

<script lang="ts">
import { EventBus } from "@/mixins/EventBus";
export default {
  name: "TheMap",
  props: {
    defaultLat: { type: String, default: "null" },
    defaultLng: { type: String, default: null },
    cols: { type: String, default: "12" },
    sm: { type: String, default: null },
    md: { type: String, default: null },
    lg: { type: String, default: null },
    xl: { type: String, default: null },
  },
  data() {
    return {
      map: "",
      lat: "",
      lng: "",
    };
  },
  mounted() {
    const vectorSource = new window.ol.source.Vector();
    const vectorLayer = new window.ol.layer.Vector({
      source: vectorSource,
      style: new window.ol.style.Style({
        image: new window.ol.style.Icon({
          anchor: [0.5, 46],
          anchorXUnits: "fraction",
          anchorYUnits: "pixels",
          src: "/img/marker.svg",
          width: "300px",
        }),
      }),
    });

    let latLng = [];
    if (this.defaultLat != null && this.defaultLng != null) {
      latLng = window.ol.proj.transform(
        [this.defaultLat, this.defaultLng],
        "EPSG:3857",
        "EPSG:4326"
      );
    } else latLng = [51.338076, 35.699756];

    this.map = new window.ol.Map({
      target: "map",
      key: "web.W3WxdodRuCG1Kp7Tu9CyUOVYu08oCwyxMvDdjFfW",
      maptype: "dreamy",
      poi: true,
      traffic: false,
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat(latLng),
        zoom: 14,
      }),

      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM(),
        }),
        vectorLayer,
      ],
    });
    this.$root.$on("startMap", () => {
      setTimeout(() => {
        this.$forceUpdate();
        this.map.updateSize();
      }, 400);
    });

    if (this.defaultLat != null && this.defaultLng != null) {
      const defaultFeatures = new window.ol.Feature(
        new window.ol.geom.Point([this.defaultLat, this.defaultLng])
      );
      vectorSource.addFeatures([defaultFeatures]);
    }
    this.map.on("click", (evt) => {
      EventBus.$emit("selectLatLng", {
        lat: `${evt.coordinate[0]}`,
        lng: `${evt.coordinate[1]}`,
      });

      vectorSource.clear();
      const feature = new window.ol.Feature(
        new window.ol.geom.Point(evt.coordinate)
      );
      vectorSource.addFeatures([feature]);
    });
  },

  beforeUnmount() {
    this.$root.$off("startMap");
  },
};
</script>
<style>
.ol-viewport div {
    z-index: 0 !important;
}
</style>
