<template>
  <div :class="$style.topbar">
    <div class="mr-md-4 mr-auto">
      <air-search />
    </div>
    <div class="mr-auto d-none d-md-block">
      <air-issues-history />
    </div>
    <div class="mb-0 mr-4 d-xl-block d-none">
      <air-status />
    </div>
    <div class="mr-4 d-none d-sm-block">
      <air-language-switcher />
    </div>
    <div class="mr-4 d-none d-sm-block">
      <air-actions />
    </div>
    <div class>
      <air-user-menu />
    </div>
  </div>
</template>

<script>
import AirSearch from 'src/support/common/components/layout/TopBar/Search'
import AirIssuesHistory from 'src/support/common/components/layout/TopBar/IssuesHistory'
import AirStatus from 'src/support/common/components/layout/TopBar/Status'
import AirLanguageSwitcher from 'src/support/common/components/layout/TopBar/LanguageSwitcher'
import AirActions from 'src/support/common/components/layout/TopBar/Actions'
import AirUserMenu from 'src/support/common/components/layout/TopBar/UserMenu'

export default {
  components: {
    AirSearch,
    AirIssuesHistory,
    AirStatus,
    AirLanguageSwitcher,
    AirActions,
    AirUserMenu
  }
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
