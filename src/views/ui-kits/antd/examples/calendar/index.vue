<template>
  <div>
    <a-calendar @panelChange="onPanelChange" />
  </div>
</template>
<script>
export default {
  name: 'AirAntdCalendarExample',
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode)
    },
  },
}
</script>
