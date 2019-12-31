<template>
  <div>
    <a-popconfirm title="Are you sure delete this task?" @confirm="confirm" @cancel="cancel" okText="Yes" cancelText="No">
      <a href="#">Delete</a>
    </a-popconfirm>
  </div>
</template>
<script>
export default {
  name: 'AirAntdPopconfirmExample',
  methods: {
    confirm (e) {
      console.log(e)
      this.$message.success('Click on Yes')
    },
    cancel (e) {
      console.log(e)
      this.$message.error('Click on No')
    },
  },
}
</script>
