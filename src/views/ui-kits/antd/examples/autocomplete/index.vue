<template>
  <div>
    <a-auto-complete
      :dataSource="dataSource"
      style="width: 200px"
      @select="onSelect"
      @search="handleSearch"
      placeholder="input here"
    />
  </div>
</template>
<script>
export default {
  name: 'AirAntdAutoCompleteExample',
  data() {
    return {
      dataSource: [],
    }
  },
  methods: {
    handleSearch(value) {
      this.dataSource = !value ? [] : [
        value,
        value + value,
        value + value + value,
      ]
    },
    onSelect(value) {
      console.log('onSelect', value)
    },
  },
}
</script>
