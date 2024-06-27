<template>
    <div class="text-center">
        <h1 class="font-medium text-lg text-zinc-800 dark:text-zinc-200">Indice UV</h1>
        <VueEcharts :option="options" class="h-52"/>
    </div>
</template>
    
<script setup>
import { VueEcharts } from 'vue3-echarts';

const props = defineProps({
    valor: String
})

const options = {
    series: [
    {
      type: 'gauge',
      axisLine: {
        lineStyle: {
          width: 10,
          color: [
            [0.2, '#289517'],
            [0.5, '#F7E419'],
            [0.7, '#F85900'],
            [1, '#D8251D']
          ]
        }
      },
      pointer: {
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        distance: 0,
        length: 0,
        lineStyle: {
          color: '#fff',
          width: 2
        }
      },
      splitLine: {
        distance: -30,
        length: 0,
        lineStyle: {
          color: '#fff',
          width: 4
        }
      },
      axisLabel: {
        color: 'inherit',
        distance: 40,
        fontSize: 0
      },
      detail: {
        valueAnimation: true,
        formatter: '{value}',
        color: 'inherit'
      },
      data: [
        {
          value: props.valor ? parseFloat(props.valor) : 80
        }
      ]
    }
  ]
}
</script>