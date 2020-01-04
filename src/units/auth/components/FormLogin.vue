<script>
import { mapActions } from 'vuex'
import NotifyMessage from 'src/support/utils/notify'
import Preload from 'src/support/utils/preload'

export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: 'Por favor insira seu email', trigger: 'blur' },
          { type: 'email', message: 'Por favor insira um email válido', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'Por favor insira sua senha', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions('auth', ['attemptLogin']),
    onAuthenticate (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Preload.show()
          this.attemptLogin({ ...this.form })
            .then(response => {
              Preload.hide()
              if (response.success) {
                this.$router.push({ name: 'dashboard.index' })
              } else {
                NotifyMessage.error('Ops! Error ao logar')
              }
            })
            .catch(error => {
              NotifyMessage.error(error)
            })
        } else {
          console.log('error')
        }
      })
    }
  }
}
</script>

<template>
  <div style="width: 40%; margin: 0 auto">
    <el-form :model="form" :rules="rules" ref="form"  class="m-login__form m-form">
      <el-form-item  prop="email" >
        <el-input v-model="form.email"  placeholder="seu email"></el-input>
      </el-form-item>
      <el-form-item  prop="password" >
        <el-input v-model="form.password" type="password" placeholder="senha"></el-input>
      </el-form-item>
      <el-form-item class="text-center">
        <button @click.prevent="onAuthenticate('form')" class="btn btn-brand btn-elevate btn-pill btn-block">Entrar</button>
      </el-form-item>
    </el-form>
  </div>
</template>
