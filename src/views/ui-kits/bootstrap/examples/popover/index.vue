<template>
  <div class="text-center my-3">
    <b-button v-b-popover.hover="'I am popover content!'" title="Popover Title">Hover Me</b-button>
  </div>
</template>
<script>
export default {
  name: 'AirBootstrapPopoverExample',
}
</script>
