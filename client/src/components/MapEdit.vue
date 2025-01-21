<template>
  <!-- Usage:
    <Map defaultLat="5721151.527117471" defaultLng="4269715.072238731"></Map>
  -->
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
  >
    <div id="map" />
  </v-col>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { EventBus } from "@/mixins/EventBus"; // Ensure EventBus is compatible with Vue 3

interface Props {
  defaultLat?: string;
  defaultLng?: string;
  cols?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  defaultLat: "null",
  defaultLng: null,
  cols: "12",
  sm: null,
  md: null,
  lg: null,
  xl: null,
});

const map = ref<any>(null);
const lat = ref<string>("");
const lng = ref<string>("");

onMounted(() => {
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

  let latLng: number[] = [];
  if (props.defaultLat !== "null" && props.defaultLng !== null) {
    latLng = window.ol.proj.transform(
      [parseFloat(props.defaultLat), parseFloat(props.defaultLng)],
      "EPSG:3857",
      "EPSG:4326"
    );
  } else {
    latLng = [51.338076, 35.699756];
  }

  map.value = new window.ol.Map({
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

  EventBus.on("startMap", () => {
    setTimeout(() => {
      map.value.updateSize();
    }, 400);
  });

  if (props.defaultLat !== "null" && props.defaultLng !== null) {
    const defaultFeatures = new window.ol.Feature(
      new window.ol.geom.Point([
        parseFloat(props.defaultLat),
        parseFloat(props.defaultLng),
      ])
    );
    vectorSource.addFeatures([defaultFeatures]);
  }

  map.value.on("click", (evt: any) => {
    EventBus.emit("selectLatLng", {
      lat: `${evt.coordinate[0]}`,
      lng: `${evt.coordinate[1]}`,
    });

    vectorSource.clear();
    const feature = new window.ol.Feature(
      new window.ol.geom.Point(evt.coordinate)
    );
    vectorSource.addFeatures([feature]);
  });
});

onBeforeUnmount(() => {
  EventBus.off("startMap");
});
</script>

<style>
.ol-viewport div {
  z-index: 0 !important;
}
</style>
