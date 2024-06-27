<template>
  <div v-if="!isLoading" class="m-2 p-2 shadow-md rounded-xl bg-primary-50/10">
    <div class="w-full flex justify-center space-x-2 py-2">
      <button 
        @click="typeRange = 'Hoy'"
        :class="typeRange == 'Hoy' ? 'bg-primary-500' : 'bg-primary-200'"
        class="text-white p-2 rounded-xl">Hoy</button>
        <button 
        @click="typeRange = 'Semana'"
        :class="typeRange == 'Semana' ? 'bg-primary-500' : 'bg-primary-100'"
        class="text-white p-2 rounded-xl">Semana</button>
    </div>
    <div class="w-full">
      <Line :data="data" :options="options" />
    </div>
  </div>
</template>
  
<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import useHome from '../../../hooks/useHome';
import { onMounted, ref, watch } from 'vue';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const { 
  isDark,
  history, 
  typeRange,
  getDataByTipo,
  viewSelected
} = useHome()

const isLoading = ref(true)
const data = ref([])
const options = ref(null)

const setOptions = () => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          color: isDark.value ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
        }
      },
      filler: {
        propagate: false,
      },
    },
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: true,
          drawOnChartArea: true,
          drawTicks: true,
        }
      },
      y: {
        border: {
          display: false
        },
        grid: {
          color: "rgba(0, 0, 0, 0)",
        }
      }
    }
  }
}

const setData = async () => {
  await getDataByTipo() 
  //format ranges
  let labels = []
  let dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
  if(typeRange.value == 'Hoy') {
    for(let i = 0; i < 23; i++) {
      labels.push(`${i}:00`)
    }
  } else {
    for(let i = 0; i < 7; i++) {
      labels.push(dias[i])
    }
  }

  const temp_data = [];
  history.value.map(item => {
    temp_data.push(item.promedio)
  })

  return {
    labels: labels,
    datasets: [
      {
        label: viewSelected.value,
        backgroundColor: isDark.value ? '#C1D9FD' : '#5774AE',
        data: temp_data,
        fill: false,
        borderColor: isDark.value ? '#C1D9FD' : '#5774AE',
        lineTension: 0.8
      }
    ]
  }
}

watch(
  () => isDark.value,
  async () => {
    isLoading.value = true
    options.value = setOptions()
    data.value = await setData()
    isLoading.value = false
  }
)

watch(
  () => typeRange.value,
  async () => {
    isLoading.value = true
    options.value = setOptions()
    data.value = await setData()
    isLoading.value = false
  }
)

watch(
  () => viewSelected.value,
  async () => {
    isLoading.value = true
    options.value = setOptions()
    data.value = await setData()
    isLoading.value = false
  }
)

onMounted(async () => {
  options.value = setOptions() 
  data.value = await setData()
  isLoading.value = false
})

</script>
  
