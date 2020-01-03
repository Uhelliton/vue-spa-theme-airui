<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft">
    <div :class="$style.searchContainer">
      <i class="fe fe-search" :class="$style.searchIcon"></i>
      <input :class="$style.searchInput" type="text" :placeholder="$t('topBar.typeToSearch')" />
    </div>
    <div slot="overlay" class="card air__utils__shadow width-330">
      <div class="card-body p-1 height-350">
        <vue-custom-scrollbar :style="{ height: '100%' }">
          <div class="pt-4 px-4 pb-2">
            <List1 />
          </div>
        </vue-custom-scrollbar>
      </div>
    </div>
  </a-dropdown>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import List1 from 'src/support/common/components/widgets/Lists/1'

export default {
  components: {
    List1,
    vueCustomScrollbar
  }
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
