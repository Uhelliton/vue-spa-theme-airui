<template>
  <div :class="$style.topbarDark">
    <a href="javascript: void(0);" :class="$style.logo" class="d-none d-md-block">
      <img src="resources/images/air-logo.png" alt="Air UI" />
      <div :class="$style.logoName">AIR UI</div>
      <div :class="$style.logoDescr">Admin Template</div>
    </a>
    <div class="mr-3 d-block">
      <air-menu-dashboards />
    </div>
    <div class="mr-auto d-block">
      <air-menu-pages />
    </div>
    <div class="mb-0 mr-4 d-xl-block d-none">
      <air-status />
    </div>
    <div class="mr-4 d-none d-md-block">
      <air-language-switcher />
    </div>
    <div class="mr-4 d-none d-md-block">
      <air-actions />
    </div>
    <div class="d-none d-md-block">
      <air-user-menu />
    </div>
  </div>
</template>

<script>
import AirMenuDashboards from '@/components/layout/TopBarDark/MenuDashboards'
import AirMenuPages from '@/components/layout/TopBarDark/MenuPages'
import AirStatus from '@/components/layout/TopBarDark/Status'
import AirLanguageSwitcher from '@/components/layout/TopBarDark/LanguageSwitcher'
import AirActions from '@/components/layout/TopBarDark/Actions'
import AirUserMenu from '@/components/layout/TopBarDark/UserMenu'

export default {
  components: {
    AirMenuDashboards,
    AirMenuPages,
    AirStatus,
    AirLanguageSwitcher,
    AirActions,
    AirUserMenu,
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
