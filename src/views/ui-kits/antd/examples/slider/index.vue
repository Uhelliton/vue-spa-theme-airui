<template>
  <div>
    <a-slider id="test" :defaultValue="30" :disabled="disabled" />
    <a-slider range :defaultValue="[20, 50]" :disabled="disabled" />
    Disabled: <a-switch size="small" :checked="disabled" @change="handleDisabledChange" />
  </div>
</template>
<script>
export default {
  name: 'AirAntdSliderExample',
  data() {
    return {
      disabled: false,
    }
  },
  methods: {
    handleDisabledChange(disabled) {
      this.disabled = disabled
    },
  },
}
</script>
