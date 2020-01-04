<script>
import LayoutApp from 'src/support/common/layouts/App/index'
import LayoutAuth from 'src/support/common/layouts/Auth/index'

export default {
  name: 'App',
  components: {
    LayoutApp,
    LayoutAuth
  },
  data () {
    return {
      layout: this.$route.meta.layout || 'admin'
    }
  },
  methods: {
    handleRouteUpdate (to, from) {
      this.layout = to.meta.layout || 'admin'
    }
  },
  watch: {
    '$route' (to, from) {
      this.handleRouteUpdate(to, from)
    }
  }
}
</script>

<template>
  <div id="q-app">
    <layout-app v-show="layout === 'admin'"></layout-app>
    <layout-auth v-show="layout !== 'admin'"></layout-auth>
  </div>
</template>
