<template>
  <div>
    <a-date-picker class="mb-2" @change="onChange" />
    <br />
    <a-month-picker class="mb-2" @change="onChange" placeholder="Select month" />
    <br />
    <a-range-picker class="mb-2" @change="onChange" />
    <br />
    <a-week-picker class="mb-2" @change="onChange" placeholder="Select week" />
  </div>
</template>
<script>
export default {
  name: 'AirAntdDatePickerExample',
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    },
  },
}
</script>
