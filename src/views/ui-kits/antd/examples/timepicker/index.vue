<template>
  <div>
    <a-time-picker @change="onChange" :defaultOpenValue="moment('00:00:00', 'HH:mm:ss')" />
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'AirAntdTimePickerExample',
  methods: {
    moment,
    onChange(time, timeString) {
      console.log(time, timeString)
    },
  },
}
</script>
