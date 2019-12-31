<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters(['user']),
    nextRoute () {
      return this.$route.query.redirect || '/'
    }
  },
  watch: {
    user (auth) {
      if (auth) {
        this.$router.replace(this.nextRoute)
      }
    },
    '$route' (to, from) {
      const query = Object.assign({}, to.query)
      this.$store.commit('SETUP_URL_SETTINGS', query)
    }
  }
}
</script>

<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
