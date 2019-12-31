<template>
  <div>
    <a-switch defaultChecked @change='onChange'/>
  </div>
</template>
<script>
export default {
  name: 'AirAntdSwitchExample',
  data () {
    return {
    }
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`)
    },
  },
}
</script>
