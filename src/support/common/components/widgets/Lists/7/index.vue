<template>
  <div>
    <ul :class="$style.list" class="list-unstyled">
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemMeta">
            <div class="air__utils__donut air__utils__donut--gray-2 air__utils__donut--md"/>
          </div>
          <div class="mr-3">
            <div>Payment Received</div>
            <div class="text-muted">Mary has approved your quote.</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemMeta">
            <div class="air__utils__donut air__utils__donut--success air__utils__donut--md"/>
          </div>
          <div class="mr-3">
            <div>Account Activated</div>
            <div class="text-muted">Mary has approved your quote.</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemMeta">
            <div class="air__utils__donut air__utils__donut--danger air__utils__donut--md"/>
          </div>
          <div class="mr-3">
            <div>User Deleted</div>
            <div class="text-muted">Mary has approved your quote.</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemMeta">
            <div class="air__utils__donut air__utils__donut--gray-2 air__utils__donut--md"/>
          </div>
          <div class="mr-3">
            <div>Message Received</div>
            <div class="text-muted">Mary has approved your quote.</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemMeta">
            <div class="air__utils__donut air__utils__donut--info air__utils__donut--md"/>
          </div>
          <div class="mr-3">
            <div>Account Activated</div>
            <div class="text-muted">Mary has approved your quote.</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
            <span/>
          </div>
        </a>
      </li>
      <li :class="$style.item">
        <a href="javascript: void(0);" :class="$style.itemLink">
          <div :class="$style.itemMeta">
            <div class="air__utils__donut air__utils__donut--gray-2 air__utils__donut--md"/>
          </div>
          <div class="mr-3">
            <div>Account Activated</div>
            <div class="text-muted">Mary has approved your quote.</div>
          </div>
          <div :class="$style.itemAction">
            <span/>
            <span/>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AirList7',
}
</script>
<style lang="scss" module>
  @import './style.module.scss';
</style>
