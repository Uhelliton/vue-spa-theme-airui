<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft">
    <div :class="$style.dropdown">
      <i class="fe fe-menu mr-2"></i>
      Pages
    </div>
    <a-menu slot="overlay" style="width: 200px" mode="vertical">
      <template v-for="item in menuData">
        <template v-if="!item.category && item.children">
          <a-sub-menu :key="item.key">
            <span slot="title">
              <i class="mr-2" :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </span>
            <template v-for="subItem in item.children">
              <a-menu-item :key="subItem.key">
                <router-link :to="subItem.url">{{ subItem.title }}</router-link>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
        <template v-if="!item.category && item.url">
          <a-menu-item :key="item.key">
            <router-link to="/dashboard/helpdesk">
              <i class="mr-2" :class="item.icon"></i>
              {{ item.title }}
            </router-link>
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { getMenuData } from '@/services/menu'
export default {
  data() {
    return {
      menuData: getMenuData,
    }
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
