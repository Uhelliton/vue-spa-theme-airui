<template>
  <div>
    <a-input-number :min="1" :max="10" v-model="value" @change="onChange" />
    value：{{value}}
  </div>
</template>
<script>
export default {
  name: 'AirAntdInputNumberExample',
  data() {
    return {
      value: 3,
    }
  },
  methods: {
    onChange(value) {
      console.log('changed', value)
    },
  },
}
</script>
