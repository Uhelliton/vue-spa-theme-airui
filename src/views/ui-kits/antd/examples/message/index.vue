<template>
  <div>
    <a-button type="primary" @click="info">Display normal message</a-button>
  </div>
</template>
<script>
export default {
  name: 'AirAntdMessageExample',
  methods: {
    info () {
      console.log('this', this.$message)
      this.$message.info('This is a normal message')
    },
  },
}
</script>
