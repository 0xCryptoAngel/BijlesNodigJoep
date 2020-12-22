<template>
  <div><LoginForm :loginsubmit="loginUser" /></div>
</template>

<script>
import LoginForm from '~/components/loginregistration/LoginForm'

export default {
  name: 'Login',

  middleware: 'auth',
  auth: 'guest',
  components: {
    LoginForm,
  },
  methods: {
    loginUser(user) {
      this.$axios
        .post('http://notawanker.com/login', {
          user,
        })
        .then((resp) => {
          this.$auth.setToken('local', 'Bearer ' + resp.data.user.token)
          this.$auth.setRefreshToken('local', resp.data.refresh_token)
          this.$axios.setHeader(
            'Authorization',
            'Bearer ' + resp.data.user.token
          )
          this.$axios.setHeader('Accept', 'application/json, text/plain')
          this.$auth.ctx.app.$axios.setHeader(
            'Authorization',
            'Bearer ' + resp.data.user.token
          )
          this.$axios
            .get('http://notawanker.com/users/current')
            .then((resp) => {
              this.$auth.setUser(resp.data)
              this.$router.push('/profile')
            })
        })
    },
  },
}
</script>
