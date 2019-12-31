<template>
  <div>
    <a-button type="primary" @click="openNotification">Open the notification box</a-button>
  </div>
</template>
<script>
export default {
  name: 'AirAntdNotificationExample',
  methods: {
    openNotification () {
      this.$notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!')
        },
      })
    },
  },
}
</script>
