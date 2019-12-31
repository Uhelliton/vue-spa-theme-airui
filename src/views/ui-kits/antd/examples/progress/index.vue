<template>
  <div>
    <div>
      <a-progress :percent="30" />
      <a-progress :percent="50" status="active" />
      <a-progress :percent="70" status="exception" />
      <a-progress :percent="100" />
      <a-progress :percent="50" :showInfo="false" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'AirAntdProgressExample',
}
</script>
