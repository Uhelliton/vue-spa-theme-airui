<template>
  <div>
    <a-badge count="5" class="mr-3">
      <a href="#" class="head-example"></a>
    </a-badge>
    <a-badge count="0" showZero class="mr-3">
      <a href="#" class="head-example"></a>
    </a-badge>
    <a-badge class="mr-3">
      <a-icon slot="count" type="clock-circle" style="color: #f5222d" />
      <a href="#" class="head-example"></a>
    </a-badge>
  </div>
</template>
<script>
export default {
  name: 'AirAntdBadgeExample',
}
</script>
<style>
  .head-example {
    width: 42px;
    height: 42px;
    border-radius: 4px;
    background: #eee;
    display: inline-block;
    vertical-align: middle;
  }
</style>
