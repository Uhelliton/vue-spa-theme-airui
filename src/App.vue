<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters('auth', ['user']),
    nextRoute () {
      return this.$route.query.redirect || '/'
    }
  },
  watch: {
    user (auth) {
      console.log(auth)
      if (auth) {
        this.$router.replace(this.nextRoute)
      }
    },
    '$route' (to, from) {
      const query = Object.assign({}, to.query)
      this.SETUP_URL_SETTINGS(query)
    }
  },
  methods: {
    ...mapMutations('settings', ['SETUP_URL_SETTINGS'])
  }
}
</script>

<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
