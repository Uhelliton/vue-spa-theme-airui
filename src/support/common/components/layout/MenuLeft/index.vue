<template>
  <a-layout-sider :width="'auto'">
    <transition-group name="air__menuFlyout__animation" :duration="1">
      <template v-for="(item, index) in renderedFlyoutItems">
        <div
          :key="index"
          :style="{
          left: `${item.itemDimensions.left + item.itemDimensions.width - 10}px`,
          top: `${item.itemDimensions.top}px`,
        }"
          :class="{
          [$style.air__menuFlyout]: true,
          [$style.air__menuFlyoutLeft]: settings.menuLayoutType === 'left',
          [$style.air__menuFlyout__black]: settings.flyoutMenuColor === 'dark',
          [$style.air__menuFlyout__white]: settings.flyoutMenuColor === 'white',
          [$style.air__menuFlyout__gray]: settings.flyoutMenuColor === 'gray',
        }"
        >
          <ul
            :class="$style.air__menuLeft__list"
            @mouseenter="handleFlyoutContainerOver(item.key)"
            @mouseleave="handleFlyoutOut(item.key)"
          >
            <template v-for="(item, index) in item.items">
              <item :key="index" :item="item" :styles="$style" :activeItem="activeItem" />
            </template>
          </ul>
        </div>
      </template>
    </transition-group>
    <div
      :class="{
        [$style.air__menuLeft]: true,
        [$style.air__menuLeft__mobileToggled]: settings.isMobileMenuOpen,
        [$style.air__menuLeft__toggled]: settings.isMenuCollapsed,
        [$style.air__menuLeft__unfixed]: settings.isMenuUnfixed,
        [$style.air__menuLeft__shadow]: settings.isMenuShadow,
        [$style.air__menuLeft__flyout]: settings.menuType === 'flyout',
        [$style.air__menuLeft__compact]: settings.menuType === 'compact',
        [$style.air__menuLeft__blue]: settings.menuColor === 'blue',
        [$style.air__menuLeft__white]: settings.menuColor === 'white',
        [$style.air__menuLeft__gray]: settings.menuColor === 'gray',
        [$style.air__menuFlyout__black]: settings.flyoutMenuColor === 'dark' && settings.menuType !== 'default',
        [$style.air__menuFlyout__white]: settings.flyoutMenuColor === 'white' && settings.menuType !== 'default',
        [$style.air__menuFlyout__gray]: settings.flyoutMenuColor === 'gray' && settings.menuType !== 'default',
      }"
    >
      <div :class="$style.air__menuLeft__outer">
        <a
          href="javascript: void(0);"
          :class="$style.air__menuLeft__mobileToggleButton"
          @click="toggleMobileMenu"
        >
          <span />
        </a>
        <a
          href="javascript: void(0);"
          :class="$style.air__menuLeft__toggleButton"
          @click="toggleMenu"
        >
          <span />
          <span />
        </a>
        <a href="javascript: void(0);" :class="$style.air__menuLeft__logo">
          <img src="https://www.airuitemplate.com/preview/vue/resources/images/air-logo.png" alt="Air UI" />
          <div :class="$style.air__menuLeft__logo__name">AIR UI</div>
          <div :class="$style.air__menuLeft__logo__descr">Admin Template</div>
        </a>
        <a href="javascript: void(0);" :class="$style.air__menuLeft__user">
          <div :class="$style.air__menuLeft__user__avatar">
            <img src="https://www.airuitemplate.com/preview/vue/resources/images/avatars/avatar.png" alt="David Beckham" />
          </div>
          <div :class="$style.air__menuLeft__user__name">David Beckham</div>
          <div :class="$style.air__menuLeft__user__role">Administrator</div>
        </a>
        <vue-custom-scrollbar>
          <div :class="$style.air__menuLeft__container">
            <ul :class="$style.air__menuLeft__list">
              <li :class="$style.air__menuLeft__category">
                <span>Information</span>
              </li>
              <li :class="$style.air__menuLeft__item">
                <a
                  href="javascript: void(0);"
                  :class="$style.air__menuLeft__link"
                  @click="toggleSettings"
                >
                  <i class="fe fe-settings" :class="$style.air__menuLeft__icon" />
                  <span>Settings</span>
                </a>
              </li>
              <li :class="$style.air__menuLeft__item">
                <a
                  href="https://docs.airuitemplate.com/"
                  :class="$style.air__menuLeft__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fe fe-compass" :class="$style.air__menuLeft__icon" />
                  <span>Documentation</span>
                </a>
              </li>
              <template v-for="(item, index) in menuData">
                <item
                  v-if="!item.children && !item.category"
                  :key="index"
                  :item="item"
                  :styles="$style"
                  :activeItem="activeItem"
                />
                <sub-menu
                  v-if="item.children"
                  :key="index"
                  :item="item"
                  :styles="$style"
                  :activeItem="activeItem"
                  :activeSubmenu="activeSubmenu"
                  :handleSubmenuClick="handleSubmenuClick"
                  :handleFlyoutOver="handleFlyoutOver"
                  :handleFlyoutOut="handleFlyoutOut"
                />
                <category v-if="item.category" :key="index" :item="item" :styles="$style" />
              </template>
            </ul>
            <div :class="$style.air__menuLeft__banner">
              <p>More components, more styles, more themes, and premium support!</p>
              <a
                href="https://themeforest.net/item/air-ui-multi-concept-admin-template/24434456"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-white text-center d-block"
              >Buy Air UI</a>
            </div>
          </div>
        </vue-custom-scrollbar>
      </div>
    </div>
    <a
      href="javascript: void(0);"
      :class="$style.air__menuLeft__backdrop"
      @click="toggleMobileMenu"
    />
  </a-layout-sider>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import _ from 'lodash'
import { mapState } from 'vuex'
import { getMenuData } from 'src/support/services/menu'
import SubMenu from './partials/submenu'
import Item from './partials/item'
import Category from './partials/category'

export default {
  name: 'menu-left',
  components: { vueCustomScrollbar, SubMenu, Item, Category },
  computed: {
    ...mapState(['settings']),
    flyoutActive () {
      return (this.settings.menuType === 'flyout' || this.settings.menuType === 'compact' || this.settings.isMenuCollapsed) && !this.settings.isMobileView
    }
  },
  mounted () {
    this.setActiveItems()
  },
  data () {
    return {
      menuData: getMenuData,
      activeSubmenu: '',
      activeItem: '',
      renderedFlyoutItems: {},
      flyoutTimers: {}
    }
  },
  watch: {
    '$route' () {
      this.setActiveItems()
    }
  },
  methods: {
    toggleMobileMenu () {
      const setting = 'isMobileMenuOpen'
      const value = !this.settings[setting]
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    toggleMenu () {
      const setting = 'isMenuCollapsed'
      const value = !this.settings[setting]
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    toggleSettings () {
      const setting = 'isSidebarOpen'
      const value = !this.settings[setting]
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    handleSubmenuClick (key) {
      const currentKey = this.activeSubmenu
      if (this.flyoutActive) {
        return
      }
      this.activeSubmenu = currentKey === key ? '' : key
    },
    setActiveItems () {
      const menuData = this.menuData
      const pathname = this.$route.path

      const flattenItems = (items, key) =>
        items.reduce((flattenedItems, item) => {
          flattenedItems.push(item)
          if (Array.isArray(item[key])) {
            return flattenedItems.concat(flattenItems(item[key], key))
          }
          return flattenedItems
        }, [])
      const activeItem = _.find(flattenItems(menuData, 'children'), ['url', pathname])
      const activeSubmenu = menuData.reduce((key, parent) => {
        if (Array.isArray(parent.children)) {
          parent.children.map(child => {
            if (child.key === activeItem.key) {
              key = parent
            }
            return ''
          })
        }
        return key
      })

      this.activeItem = activeItem.key
      this.activeSubmenu = activeSubmenu.key
    },
    handleFlyoutOver (event, key, items) {
      if (this.flyoutActive) {
        clearInterval(this.flyoutTimers[key])
        const item = event.currentTarget
        const itemDimensions = item.getBoundingClientRect()
        this.renderedFlyoutItems = {
          ...this.renderedFlyoutItems,
          [key]: {
            key,
            itemDimensions,
            items
          }
        }
      }
    },
    handleFlyoutOut (key) {
      if (this.flyoutActive) {
        this.flyoutTimers[key] = setTimeout(() => {
          const updatedFlyoutItems = Object.assign({}, this.renderedFlyoutItems)
          delete updatedFlyoutItems[key]
          this.renderedFlyoutItems = {
            ...updatedFlyoutItems
          }
        }, 100)
      }
    },
    handleFlyoutContainerOver (key) {
      clearInterval(this.flyoutTimers[key])
    }
  }
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
