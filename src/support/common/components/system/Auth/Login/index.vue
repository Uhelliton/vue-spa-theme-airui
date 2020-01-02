<script>
export default {
  name: 'AirLogin',
  data: function () {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$nprogress.start()
          this.$auth.login(values.email, values.password)
            .then(() => {
              this.$nprogress.done()
              this.$router.push('/')
              this.$notification['success']({
                message: 'Logged In',
                description: 'You have successfully logged in to Air UI Vue Admin Template!'
              })
            })
            .catch((error) => {
              this.$nprogress.done()
              this.$notification['warning']({
                message: error.code,
                description: error.message
              })
            })
        }
      })
    }
  }
}
</script>

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
      <div class="text-dark font-size-30 mb-2 text-center">Log In</div>
      <div class="text-muted text-center mb-4">Login and password - admin@mediatec.org / mediatec</div>
      <a-form class="mb-4" :form="form" @submit="handleSubmit">
        <a-form-item>
          <a-input
            size="large"
            placeholder="Email"
            v-decorator="['email', { initialValue: 'admin@mediatec.org', rules: [{ required: true, message: 'Please input your username!' }]}]"
          />
        </a-form-item>
        <a-form-item>
          <a-input
            size="large"
            placeholder="Password"
            type="password"
            v-decorator="['password', {initialValue: 'mediatec', rules: [{ required: true, message: 'Please input your Password!' }]}]"
          />
        </a-form-item>
        <a-button
          type="primary"
          htmlType="submit"
          size="large"
          class="text-center btn btn-success w-100 font-weight-bold font-size-18"
        >Entrar</a-button>
      </a-form>
      <router-link
        to="/system/forgot-password"
        class="text-blue font-weight-bold font-size-18" >
        Esqueceu a senha?
      </router-link>
    </div>

    <div class="mt-auto pb-5 pt-5">
      <ul
        class="list-unstyled d-flex mb-2 flex-wrap justify-content-center"
        :class="$style.footerNav">
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

<style lang="scss" module>
   @import "../style.module.scss";
</style>
