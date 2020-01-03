<template>
  <a-dropdown :trigger="['click']" placement="bottomLeft" @visibleChange="addCount">
    <div :class="$style.dropdown">
      <a-badge :count="count">
        <a-avatar shape="square" icon="user" size="large" :class="$style.avatar" />
      </a-badge>
    </div>
    <a-menu slot="overlay">
      <a-menu-item>
        <strong> Username</strong>
        <div>
          <strong class="mr-1">Plano:</strong>
          Professional
        </div>
        <div>
          <strong>Função:</strong>
          Administrator
        </div>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <div>
          <strong class="mr-1">Email:</strong> admin@mediatec.org
        </div>
        <div>
          <strong class="mr-1">Telefone:</strong> -
        </div>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <a href="javascript: void(0);">
          <i :class="$style.menuIcon" class="fe fe-user"></i>
         Editar Profile
        </a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript: void(0);" @click="logout">
          <i :class="$style.menuIcon" class="fe fe-log-out"></i>
          Logout
        </a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  data: function () {
    return {
      count: 7
    }
  },
  methods: {
    addCount () {
      this.count++
    },
    logout () {
      this.$auth.logout()
    }
  }
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
