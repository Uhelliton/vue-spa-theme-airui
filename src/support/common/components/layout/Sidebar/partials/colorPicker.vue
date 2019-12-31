<template>
  <div>
    <template v-for="item in colors">
      <a
        :key="item"
        href="javascript: void(0);"
        @click="colorPickerHandler(setting, item)"
        :class="{
          [$style.air__sidebar__select__item]: true,
          [$style.air__sidebar__select__item__active]: value === item,
          [$style.air__sidebar__select__item__black]: item === 'dark',
          [$style.air__sidebar__select__item__white]: item === 'white',
          [$style.air__sidebar__select__item__gray]: item === 'gray',
          [$style.air__sidebar__select__item__blue]: item === 'blue',
          [$style.air__sidebar__select__item__img]: item === 'image',
        }"
      />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    setting: String,
    value: String,
    colors: Array,
  },
  methods: {
    colorPickerHandler(setting, value) {
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
  },
}
</script>

<style lang="scss" module>
@import "../style.module.scss";
</style>
