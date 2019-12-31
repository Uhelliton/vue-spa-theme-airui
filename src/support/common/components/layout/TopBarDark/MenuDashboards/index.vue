<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft">
    <div :class="$style.dropdown">
      <i class="fe fe-grid mr-2"></i>
      Dashboards
    </div>
    <a-menu slot="overlay">
      <a-menu-item-group title="Dashboards">
        <a-menu-item>
          <router-link to="/dashboard/analytics">
            <i class="fe fe-home mr-2"></i>
            Analytics
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link to="/dashboard/statistics">
            <i class="fe fe-home mr-2"></i>
            Statistics
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link to="/dashboard/ecomerce">
            <i class="fe fe-home mr-2"></i>
            Ecommerce
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link to="/dashboard/crypto">
            <i class="fe fe-home mr-2"></i>
            Crypto
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link to="/dashboard/crypto-terminal">
            <i class="fe fe-home mr-2"></i>
            Crypto Terminal
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link to="/dashboard/jira">
            <i class="fe fe-home mr-2"></i>
            Jira
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link to="/dashboard/helpdesk">
            <i class="fe fe-home mr-2"></i>
            Helpdesk
          </router-link>
        </a-menu-item>
      </a-menu-item-group>
    </a-menu>
  </a-dropdown>
</template>

<style lang="scss" module>
@import "./style.module.scss";
</style>
