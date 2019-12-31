<template>
  <div>
    <div
      :class="{[$style.air__sidebar]: true, [$style.air__sidebar__toggled]: settings.isSidebarOpen}"
    >
      <vue-custom-scrollbar :style="{ height: '100%' }">
        <div :class="$style.air__sidebar__inner">
          <a
            href="javascript: void(0);"
            :class="$style.air__sidebar__close"
            class="fe fe-x-circle"
            @click="toggleSidebar()"
          />
          <h5>
            <strong>Theme Settings</strong>
          </h5>
          <div class="air__utils__line" :style="{ marginTop: '25px', marginBottom: '30px' }" />
          <p class="text-muted mb-5">
            This component gives possibility to construct custom blocks with any widgets,
            components and elements inside, like this theme settings
          </p>
          <div :class="$style.air__sidebar__type">
            <div :class="$style.air__sidebar__type__title">
              <span>Menu Layout</span>
            </div>
            <div :class="$style.air__sidebar__type__items">
              <a-radio-group :defaultValue="settings.menuLayoutType" @change="selectMenuLayoutType">
                <div class="row">
                  <div class="col-6">
                    <div class="mb-2">
                      <a-radio :value="'left'">Left Menu</a-radio>
                    </div>
                    <div class="mb-2">
                      <a-radio :value="'top-dark'">Top Dark</a-radio>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-2">
                      <a-radio :value="'top'">Top Menu</a-radio>
                    </div>
                    <div class="mb-2">
                      <a-radio :value="'nomenu'">No menu</a-radio>
                    </div>
                  </div>
                </div>
              </a-radio-group>
            </div>
          </div>
          <div :class="$style.air__sidebar__type">
            <div :class="$style.air__sidebar__type__title">
              <span>Left Menu Type</span>
            </div>
            <div :class="$style.air__sidebar__type__items">
              <a-radio-group :defaultValue="settings.menuType" @change="selectMenuType">
                <div class="row">
                  <div class="col-6">
                    <div class="mb-2">
                      <a-radio
                        :value="'default'"
                        :disabled="settings.menuLayoutType !== 'left'"
                      >Default</a-radio>
                    </div>
                    <div class="mb-2">
                      <a-radio
                        :value="'flyout'"
                        :disabled="settings.menuLayoutType !== 'left'"
                      >Flyout</a-radio>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="mb-2">
                      <a-radio
                        :value="'compact'"
                        :disabled="settings.menuLayoutType !== 'left'"
                      >Compact</a-radio>
                    </div>
                  </div>
                </div>
              </a-radio-group>
            </div>
          </div>
          <div :class="$style.air__sidebar__type" class="mb-4">
            <div :class="$style.air__sidebar__type__title">
              <span>Router Animation</span>
            </div>
            <div :class="$style.air__sidebar__type__items">
              <a-select
                :defaultValue="settings.routerAnimation"
                style="width: 100%;"
                @change="selectRouterAnimation"
              >
                <a-select-option value="none">None</a-select-option>
                <a-select-option value="slide-fadein-up">Slide Up</a-select-option>
                <a-select-option value="slide-fadein-right">Slide Right</a-select-option>
                <a-select-option value="fadein">Fade In</a-select-option>
                <a-select-option value="zoom-fadein">Zoom</a-select-option>
              </a-select>
            </div>
          </div>
          <div :class="$style.air__sidebar__type" class="mb-4">
            <div :class="$style.air__sidebar__type__title">
              <span>Internationalization</span>
            </div>
            <div :class="$style.air__sidebar__type__items">
              <a-select :defaultValue="settings.locale" style="width: 100%;" @change="selectLocale">
                <a-select-option value="en-US">English (en-US)</a-select-option>
                <a-select-option value="fr-FR">French (fr-FR)</a-select-option>
                <a-select-option value="ru-RU">Русский (ru-RU)</a-select-option>
                <a-select-option value="zh-CN">简体中文 (zh-CN))</a-select-option>
              </a-select>
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Toggled left menu</div>
            <div :class="$style.air__sidebar__container">
              <a-switch
                :checked="settings.isMenuCollapsed"
                @click="settingChange($event, 'isMenuCollapsed')"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Unfixed left menu</div>
            <div :class="$style.air__sidebar__container">
              <a-switch
                :checked="settings.isMenuUnfixed"
                @click="settingChange($event, 'isMenuUnfixed')"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Fixed topbar</div>
            <div :class="$style.air__sidebar__container">
              <a-switch
                :checked="settings.isTopbarFixed"
                @click="settingChange($event, 'isTopbarFixed')"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Dark Footer</div>
            <div :class="$style.air__sidebar__container">
              <a-switch
                :checked="settings.isFooterDark"
                @click="settingChange($event, 'isFooterDark')"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Menu color</div>
            <div :class="$style.air__sidebar__container">
              <air-color-picker
                :value="settings.menuColor"
                :setting="'menuColor'"
                :colors="['white', 'gray', 'blue', 'dark']"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Flyout menu</div>
            <div :class="$style.air__sidebar__container">
              <air-color-picker
                :value="settings.flyoutMenuColor"
                :setting="'flyoutMenuColor'"
                :colors="['white', 'gray', 'blue', 'dark']"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Login color</div>
            <div :class="$style.air__sidebar__container">
              <air-color-picker
                :value="settings.systemLayoutColor"
                :setting="'systemLayoutColor'"
                :colors="['white', 'gray', 'blue', 'dark', 'image']"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Content no max-width</div>
            <div :class="$style.air__sidebar__container">
              <a-switch
                :checked="settings.isContentNoMaxWidth"
                @click="settingChange($event, 'isContentNoMaxWidth')"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">App max-width</div>
            <div :class="$style.air__sidebar__container">
              <a-switch
                :checked="settings.isAppMaxWidth"
                @click="settingChange($event, 'isAppMaxWidth')"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Gray background</div>
            <div :class="$style.air__sidebar__container">
              <a-switch
                :checked="settings.isGrayBackground"
                @click="settingChange($event, 'isGrayBackground')"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Gray topbar</div>
            <div :class="$style.air__sidebar__container">
              <a-switch
                :checked="settings.isGrayTopbar"
                @click="settingChange($event, 'isGrayTopbar')"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Squared card borders</div>
            <div :class="$style.air__sidebar__container">
              <a-switch
                :checked="settings.isSquaredBorders"
                @click="settingChange($event, 'isSquaredBorders')"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Card shadow</div>
            <div :class="$style.air__sidebar__container">
              <a-switch
                :checked="settings.isCardShadow"
                @click="settingChange($event, 'isCardShadow')"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Borderless cards</div>
            <div :class="$style.air__sidebar__container">
              <a-switch
                :checked="settings.isBorderless"
                @click="settingChange($event, 'isBorderless')"
              />
            </div>
          </div>
          <div :class="$style.air__sidebar__item">
            <div :class="$style.air__sidebar__label">Menu shadow</div>
            <div :class="$style.air__sidebar__container">
              <a-switch
                :checked="settings.isMenuShadow"
                @click="settingChange($event, 'isMenuShadow')"
              />
            </div>
          </div>
        </div>
      </vue-custom-scrollbar>
    </div>
    <a
      href="javascript: void(0);"
      @click="toggleSidebar()"
      :class="$style.air__sidebar__toggleButton"
      class="btn btn-rounded btn-light text-nowrap text-dark font-weight-bold font-size-18"
    >
      <i class="fe fe-settings text-blue mr-md-2" />
      <span class="d-none d-md-inline">Settings</span>
    </a>
  </div>
</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
import { mapState } from 'vuex'
import AirColorPicker from '@/components/layout/Sidebar/partials/colorPicker'

export default {
  components: { vueCustomScrollbar, AirColorPicker },
  computed: mapState(['settings']),
  methods: {
    toggleSidebar: function () {
      const setting = 'isSidebarOpen'
      const value = !this.settings[setting]
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    settingChange(e, setting) {
      const value = !this.settings[setting]
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    selectMenuType(e) {
      const setting = 'menuType'
      const { value } = e.target
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    selectMenuLayoutType(e) {
      const setting = 'menuLayoutType'
      const { value } = e.target
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    selectRouterAnimation(value) {
      const setting = 'routerAnimation'
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
    selectLocale(value) {
      const setting = 'locale'
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
