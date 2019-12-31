<template>
  <div :class="$style.errors">
    <div class="pt-4 pb-4 d-flex align-items-end mt-auto">
      <img src="resources/images/air-logo.png" alt="AIR UI Logo" />
      <div class="air__utils__logo__text">
        <div class="air__utils__logo__name text-uppercase text-dark font-size-21">AIR UI</div>
        <div class="air__utils__logo__descr text-uppercase font-size-12 text-gray-6">Admin template</div>
      </div>
    </div>
    <div class="pl-5 pr-5 pt-5 pb-5 mb-auto text-dark font-size-30" :class="$style.container">
      <div class="font-weight-bold mb-3">Page not found</div>
      <div>This page is deprecated, deleted, or does not exist at all</div>
      <div class="font-weight-bold font-size-70 mb-1">404 —</div>
      <router-link to="/" class="btn btn-outline-primary width-100">Go Back</router-link>
    </div>
    <div class="mt-auto pb-5 pt-5">
      <ul
        class="list-unstyled d-flex mb-2 flex-wrap justify-content-center"
        :class="$style.footerNav"
      >
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Compliance</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
      <div class="text-gray-4 text-center">© 2019 Mediatec. All rights reserved.</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AirError404',
}
</script>
<style lang="scss" module>
@import "@/components/system/Errors/style.module.scss";
</style>
