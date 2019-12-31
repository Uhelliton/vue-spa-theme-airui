<template>
  <div>
    <a-tag>Tag 1</a-tag>
    <a-tag><a href="https://github.com/vueComponent/ant-design">Link</a></a-tag>
    <a-tag closable @close="log">Tag 2</a-tag>
    <a-tag closable @close="preventDefault">Prevent Default</a-tag>
  </div>
</template>
<script>
export default {
  name: 'AirAntdTagExample',
  methods: {
    log (e) {
      console.log(e)
    },
    preventDefault (e) {
      e.preventDefault()
      console.log('Clicked! But prevent default.')
    },
  },
}
</script>
