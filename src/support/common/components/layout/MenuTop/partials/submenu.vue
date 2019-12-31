<template>
  <li
    :class="{
      [styles.air__menuTop__item]: true,
      [styles.air__menuTop__submenu]: true,
      [styles.air__menuTop__submenu__active]: item.key === activeSubmenu,
    }"
  >
    <a
      href="javascript: void(0);"
      :class="styles.air__menuTop__link"
      @click="() => handleSubmenuClick(item.key)"
      @mouseenter="(event) => handleFlyoutOver(event, item.key, item.children)"
      @mouseleave="handleFlyoutOut(item.key)"
    >
      <i
        :class="{
          [item.icon]: true,
          [styles.air__menuTop__icon]: true,
        }"
      />
      <span>{{ item.title }}</span>
    </a>
    <ul :class="styles.air__menuTop__list">
      <template v-for="(item, index) in item.children">
        <item
          v-if="!item.children && !item.category"
          :key="index"
          :item="item"
          :styles="styles"
          :activeItem="activeItem"
        />
      </template>
    </ul>
  </li>
</template>

<script>
import Item from './item'

export default {
  name: 'SubMenu',
  components: { Item },
  props: {
    item: Object,
    styles: Object,
    activeSubmenu: String,
    activeItem: String,
    handleSubmenuClick: Function,
    handleFlyoutOver: Function,
    handleFlyoutOut: Function,
  },
}
</script>
