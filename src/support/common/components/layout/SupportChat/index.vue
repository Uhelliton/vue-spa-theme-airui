<template>
  <div :class="$style.chat">
    <button
      type="button"
      :class="$style.toggleButton"
      class="btn btn-rounded btn-light text-nowrap text-dark font-weight-bold font-size-18"
      @click="toggleSupportChat()"
    >
      <i :class="$style.icon" class="fe fe-message-square text-blue mr-md-2" />
      <span class="d-none d-md-inline">Support Chat</span>
    </button>
    <div :class="{[$style.container]: true, [$style.containerToggled]: settings.isSupportChatOpen}">
      <div class="d-flex flex-wrap mb-2">
        <div class="text-dark font-size-18 font-weight-bold mr-auto">Support Chat</div>
        <button type="button" class="btn btn-link p-0 border-0" @click="toggleSupportChat()">
          <i class="fe fe-x-square font-size-21 align-middle text-gray-6" />
        </button>
      </div>
      <general14 />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import General14 from '@/components/widgets/General/14'

export default {
  components: {
    General14,
  },
  computed: mapState(['settings']),
  methods: {
    toggleSupportChat: function () {
      const setting = 'isSupportChatOpen'
      const value = !this.settings[setting]
      this.$store.commit('CHANGE_SETTING', { setting, value })
    },
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
