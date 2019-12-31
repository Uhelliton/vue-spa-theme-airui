<template>
  <div>
    <a-rate v-model='value'/>
  </div>
</template>
<script>
export default {
  name: 'AirAntdRateExample',
  data() {
    return {
      value: 2,
    }
  },
}
</script>
