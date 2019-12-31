<template>
  <div>
    <div class="font-weight-bold text-dark font-size-24">900</div>
    <div>Completed</div>
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
  name: 'AirChart4v2',
  components: {
    'vue-chartist': VueChartist,
  },
  data: function () {
    const options = {
      chartPadding: {
        right: 0,
        left: 0,
        top: 5,
        bottom: 5,
      },
      fullWidth: true,
      showPoint: false,
      lineSmooth: true,
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
      showArea: false,
    }

    return {
      data,
      options,
    }
  },
}
</script>
