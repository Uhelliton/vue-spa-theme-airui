<template>
  <div>
    <div>
      <a-avatar class="mr-2" :size="64" icon="user" />
      <a-avatar class="mr-2" size="large" icon="user"/>
      <a-avatar class="mr-2" icon="user"/>
      <a-avatar class="mr-2" size="small" icon="user"/>
    </div>
    <br/>
    <div>
      <a-avatar class="mr-2" shape="square" :size="64" icon="user" />
      <a-avatar class="mr-2" shape="square" size="large" icon="user" />
      <a-avatar class="mr-2" shape="square" icon="user" />
      <a-avatar class="mr-2" shape="square" size="small" icon="user" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'AirAntdAvatarExample',
}
</script>
