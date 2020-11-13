<template>
  <div>
    <RegisterForm :registersubmit="registerUser" />
    <NotificationMessage
      :show="isNotification"
      @close="isNotification = false"
    />
  </div>
</template>

<script>
import NotificationMessage from '~/components/NotificationMessage'
import RegisterForm from '~/components/RegisterForm'

export default {
  name: 'Login',
  layout: 'webpage',
  components: {
    RegisterForm,
    NotificationMessage,
  },
  data() {
    return {
      isNotification: false,
    }
  },
  methods: {
    registerUser(user) {
      this.$axios
        .post('http://notawanker.com/signup', {
          user,
        })
        .then(() => {
          this.isNotification = true
        })
    },
  },
}
</script>
