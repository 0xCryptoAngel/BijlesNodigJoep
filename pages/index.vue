<template>
  <div><LoginForm :loginsubmit="loginUser" /></div>
</template>

<script>
import LoginForm from '~/components/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  methods: {
    async loginUser(user) {
      try {
        await this.$auth.loginWith('local', {
          data: {
            user,
          },
        })
        this.$router.push('/profile')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>
