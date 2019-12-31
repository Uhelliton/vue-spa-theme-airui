<template>
  <div>
    <a-popover title="Title">
      <template slot="content">
        <p>Content</p>
        <p>Content</p>
      </template>
      <a-button type="primary">Hover me</a-button>
    </a-popover>
  </div>
</template>
<script>
export default {
  name: 'AirAntdPopoverExample',
}
</script>
