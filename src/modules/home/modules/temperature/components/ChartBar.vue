<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  setup() {
    const chartData = ref({
      labels: ['January', 'February', 'March'],
      datasets: [{ data: [40, 20, 12] }]
    })
    
    const chartOptions = ref({
      responsive: true
    })
    
    return {
      chartData,
      chartOptions
    }
  }
}
</script>
