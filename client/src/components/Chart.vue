<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const chartdata = ref({
  labels: ["January", "February", "march", "april", "june", "july", "august"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#36a2eb",
      data: [-50, 20, 30, 50, 70, 90, 100],
    },
  ],
});

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
});

const chartRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (chartRef.value) {
    new Chart(chartRef.value, {
      type: "line",
      data: chartdata.value,
      options: options.value,
    });
  }
});
</script>

<template>
  <canvas ref="chartRef" />
</template>
