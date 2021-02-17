<template>
  <section>
    <web-header :title="title" :beschrijving="beschrijving" />
    <main>
      <div><LoginForm :loginsubmit="loginUser" /></div>
    </main>
  </section>
</template>

<script>
import LoginForm from '~/components/loginregistration/LoginForm'
import webHeader from '~/components/webLayout/webHeader'

export default {
  name: 'Login',
  layout: 'webpage',
  middleware: 'auth',
  auth: 'guest',
  components: {
    LoginForm,
    webHeader,
  },
  data() {
    return {
      title: 'Log in op je account',
      beschrijving: 'Lorem ipsum',
    }
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
