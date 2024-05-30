<template>
  <div>
    <h1>Characters Chart</h1>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default {
  components: {
    Bar,
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Height",
            data: [],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Character Heights",
          },
        },
      },
    };
  },
  methods: {
    fetchCharacters() {
      fetch("https://swapi.dev/api/people/?page=1")
        .then((response) => response.json())
        .then((data) => {
          const characters = data.results.slice(0, 10); // берем первых 10 персонажей
          const labels = characters.map((c) => c.name);
          const dataValues = characters.map((c) => parseInt(c.height, 10) || 0);

          this.chartData = {
            labels: labels,
            datasets: [
              {
                label: "Height",
                data: dataValues,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          };
        });
    },
  },
  mounted() {
    this.fetchCharacters();
  },
};
</script>
