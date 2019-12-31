<template>
  <div :class="$style.auth">
    <div class="pt-5 pb-5 d-flex align-items-end mt-auto">
      <img src="resources/images/air-logo.png" alt="AIR UI Logo" />
      <div class="air__utils__logo__text">
        <div class="air__utils__logo__name text-uppercase text-dark font-size-21">AIR UI</div>
        <div class="air__utils__logo__descr text-uppercase font-size-12 text-gray-6">Admin template</div>
      </div>
    </div>
    <div class="pl-5 pr-5 pt-5 pb-5 bg-white text-center" :class="$style.container">
      <div class="text-dark font-size-30 mb-4">Register</div>
      <a-form class="mb-4" :form="form">
        <a-form-item>
          <a-input
            placeholder="Full Name"
            v-decorator="['fullName', {rules: [{ required: true, message: 'Please input your full name!' }]}]"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            placeholder="Email Address"
            v-decorator="['fullName', {rules: [{ required: true, message: 'Please input your email address!' }]}]"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            placeholder="Password"
            v-decorator="['password', {rules: [{ required: true, message: 'Please input your Password!' }]}]"
          />
        </a-form-item>
        <button
          type="button"
          class="text-center btn btn-success w-100 font-weight-bold font-size-18"
        >Sign Up</button>
      </a-form>
      <a
        href="#"
        class="font-weight-bold font-size-18 text-dark btn btn-outline-light w-100 mb-3"
        :class="$style.googleSign"
        :style="{ backgroundImage: 'url(resources/images/icons/google-logo.svg)' }"
      >Sign up with Google</a>
      <div class="font-size-18">
        By signing up, you agree to the
        <a
          href="#"
          class="text-blue font-weight-bold font-size-18"
        >Terms of Service</a> and
        <a href="#" class="text-blue font-weight-bold font-size-18">Privacy Policy</a>
      </div>
    </div>
    <div class="text-center font-size-18 pt-4 mb-auto">
      Already have an account?
      <router-link to="/system/login" class="font-weight-bold text-blue text-underlined">
        <u>Log In</u>
      </router-link>
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
  name: 'AirRegister',
  data: function () {
    return {
      form: this.$form.createForm(this),
    }
  },
}
</script>
<style lang="scss" module>
@import "@/components/system/Auth/style.module.scss";
</style>
