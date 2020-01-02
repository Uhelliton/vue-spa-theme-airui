<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft">
    <div :class="$style.dropdown">
      <i class="fe fe-menu" :class="$style.icon"></i>
      <span class="d-none d-xl-inline">{{ $t('actions') }}</span>
    </div>
    <div slot="overlay">
      <div class="card air__utils__shadow width-350">
        <div class="card-body pb-2">
          <list3 />
        </div>
      </div>
    </div>
  </a-dropdown>
</template>

<script>
import List3 from 'src/support/common/components/widgets/Lists/3'

export default {
  components: {
    List3
  }
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
