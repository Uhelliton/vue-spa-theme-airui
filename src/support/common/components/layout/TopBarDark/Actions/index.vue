<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft">
    <div :class="$style.dropdown">
      <i class="fe fe-menu" :class="$style.icon"></i>
      {{ $t('actions') }}
    </div>
    <div slot="overlay" :class="$style.darkDropdown">
      <div class="card air__utils__shadow width-350 mb-0">
        <div class="card-body pb-2">
          <list3 />
        </div>
      </div>
    </div>
  </a-dropdown>
</template>

<script>
import List3 from '@/components/widgets/Lists/3'

export default {
  components: {
    List3,
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
