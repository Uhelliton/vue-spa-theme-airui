<template>
  <div>
    <a-pagination v-model="current" :total="50" />
  </div>
</template>
<script>
export default {
  name: 'AirAntdPaginationExample',
  data() {
    return {
      current: 2,
    }
  },
}
</script>
