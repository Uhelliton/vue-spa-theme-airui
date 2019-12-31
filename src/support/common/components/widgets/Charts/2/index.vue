<template>
  <div class="position-relative">
    <div class="card-body">
      <div class="text-dark font-size-18 font-weight-bold mb-1">Year Profit</div>
      <div class="text-gray-6 mb-2">Revenue by location and date</div>
      <div class="font-weight-bold font-size-36 text-dark">$437,246.00</div>
    </div>
    <vue-chartist
      class="height-200"
      type="Line"
      :data="data"
      :options="options"
    />
  </div>
</template>
<script>
import data from './data.json'
import VueChartist from 'v-chartist'
export default {
  name: 'AirChart2',
  components: {
    'vue-chartist': VueChartist,
  },
  data: function () {
    const options = {
      low: 0,
      chartPadding: {
        right: 0,
        left: 0,
        top: 5,
        bottom: 0,
      },
      fullWidth: true,
      showPoint: false,
      lineSmooth: false,
      axisY: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      axisX: {
        showGrid: false,
        showLabel: false,
        offset: 0,
      },
      showArea: true,
    }

    return {
      data,
      options,
    }
  },
}
</script>
