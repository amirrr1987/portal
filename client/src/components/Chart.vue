<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: [
        "January",
        "February",
        "march",
        "april",
        "june",
        "july",
        "august",
      ],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#36a2eb",
          data: [-50, 20, 30, 50, 70, 90, 100],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>